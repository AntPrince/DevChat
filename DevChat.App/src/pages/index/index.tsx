import React, { useState,useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtList, AtListItem } from 'taro-ui'
import SignalR from '../../utils/signalr'
import moment from 'moment'
import './index.scss'

interface messageType{
  content:string
  time:string
}

const Index = ()=> {
  const [messageList,setMessageList] = useState<messageType[]>([])
  
  useEffect(()=>{
    regSignalR()
  },[])

  const socket = new SignalR();
  const regSignalR = async ()=>{
    await socket.connectSocket('https://localhost:5001/hub')
    socket.onMessage('receiveMessage',(content)=>{
      const now = moment().format("HH:mm:ss")
      setMessageList(x=>x.concat({content:content,time:now}))
    })
  }

  const sendMessage = ()=>{
    socket.send('SendMessage','666')
  }

  return (
    <View className='index'>
      <AtList>
        {
          messageList.map((message:messageType,index:number)=>{
            return (
                <AtListItem key={index} title={message.content} note={message.time} />
              )
          })
        }
      </AtList>
      <AtButton onClick={()=>sendMessage()}>发送</AtButton>
    </View>
  )
}

export default Index