import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import HmFriendInformationCard from '../../comp/drifting-bottle/index'
import CryptoJS from 'crypto-js'

import * as S from '@microsoft/signalr'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { 
    const s = new S.HubConnectionBuilder().withUrl("http://192.168.0.107:5002/hub").build();
    s.start().then(function () {
  }).catch(function (err) {
      return console.error(err.toString());
  });
    const str = 'hahaha'
    const key = CryptoJS.enc.Utf8.parse("11111111111111111111111111111111");  //十六位十六进制数作为密钥
    const iv = CryptoJS.enc.Utf8.parse('2222222222222222');   //十六位十六进制数作为密钥偏移量

    const encrypted = CryptoJS.DES.encrypt(str, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    const enc = encrypted.ciphertext
    const base64 = CryptoJS.enc.Base64.stringify(enc)
    console.log(base64)


  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '世纪佳猿漂流瓶'
  }

  render () {
    return (
      <View className='index'>
        <HmFriendInformationCard name='飒' address='来自克洛斯星的.net工程师' />
      </View>
    )
  }
}
