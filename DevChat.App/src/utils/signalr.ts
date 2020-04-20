/**
 * 
 * 因SignalR不兼容微信小程序，此方法简约兼容小程序
 * 
 */
import Taro, { SocketTask } from '@tarojs/taro'

interface resultType {
  negotiateVersion: string
  connectionToken: string
}

interface reciveMessageEvent {
  name: string
  method: (...args: any[]) => void
}

export default class SignalR {
  socket: SocketTask
  eventList: reciveMessageEvent[] = []

  constructor() {
    console.log('SignalR实例化')
    return this
  }

  // 获取signalr的token
  getoken = async (url: string) => {
    const result = await Taro.request<resultType>({
      url: url + '/negotiate?negotiateVersion=1',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      }
    })

    return result.data.connectionToken
  }

  // 连接wss
  connectSocket = async (url: string) => {
    const token = await this.getoken(url)
    const wss = url.replace(/^(https|http)/, "wss") + '?id=' + token

    // 创建连接
    this.socket = await Taro.connectSocket({ url: wss })
    // 连接成功后进行握手
    this.socket.onOpen(() => this.socket.send({ data: '{"protocol":"json","version":1}' }))
    this.socket.onMessage((response) => {
      // 去除尾部的特殊字符
      const raw = response.data
      const realResp = raw.substr(0, raw.length - 1)
      // 反序列化
      const data = JSON.parse(realResp)
      // 事件回调
      this.eventList.filter(x => x.name === data.target)[0]?.method(...data.arguments)
    })
  }

  // 发送消息
  send = (methodName: string, ...args: any[]) => {
    const data = { "arguments": args, "streamIds": [], "target": methodName, "type": 1 }
    this.socket.send({
      data: JSON.stringify(data) + ''
    })
  }

  // 添加接受消息的回调
  onMessage = (methodName: string, newMethod: (...args: any[]) => void) => {
    this.eventList.push({ name: methodName, method: newMethod })
  }
}