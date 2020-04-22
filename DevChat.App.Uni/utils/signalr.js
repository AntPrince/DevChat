export default class SignalR {
  socket = null
  eventList = []

  constructor() {
    console.log('SignalR实例化')
    return this
  }

  // 获取signalr的token
  getoken = async (url) => {
    const response = await uni.request({
      url: url + '/negotiate?negotiateVersion=1',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      }
    })
	console.log(response)
    return response[1].data.connectionToken
  }

  // 连接wss
  connectSocket = async (url) => {
    const token = await this.getoken(url)
    const wss = url.replace(/^(https|http)/, "ws") + '?id=' + token

    // 创建连接
    this.socket = await uni.connectSocket({ url: wss ,complete: ()=> {console.log(1)}})
	console.log(this.socket)
    // 连接成功后进行握手
    this.socket.onOpen(() => this.socket.send({ data: '{"protocol":"json","version":1}' }))
    this.socket.onMessage((response) => {
      // 去除尾部的特殊字符
      const raw = response.data
      const realResp = raw.substr(0, raw.length - 1)
      // 反序列化
      const data = JSON.parse(realResp)
      // 事件回调
      this.eventList.filter(x => x.name === data.target)[0] && this.eventList.filter(x => x.name === data.target)[0].method(...data.arguments)
    })
  }

  // 发送消息
  send = (methodName, ...args) => {
    const data = { "arguments": args, "streamIds": [], "target": methodName, "type": 1 }
    this.socket.send({
      data: JSON.stringify(data) + ''
    })
  }

  // 添加接受消息的回调
  onMessage = (methodName, newMethod) => {
    this.eventList.push({ name: methodName, method: newMethod })
  }
}