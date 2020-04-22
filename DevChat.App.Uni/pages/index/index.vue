<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true"><block slot="backText">返回</block><block slot="content">聊天</block></cu-custom>
		<view class="cu-chat">
			<view v-for="(item,index) in messageList" v-bind:key="index">
				<view v-if="item.type === 'self'" class="cu-item self">
					<view class="main">
						<view class="content bg-green shadow">
							<text>{{item.content}}</text>
						</view>
					</view>
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
					<view class="date">2018年3月23日 13:23</view>
				</view>
				
				<view v-else class="cu-item">
					<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
					<view class="main">
						<view class="content shadow">
							<text>{{item.content}}</text>
						</view>
					</view>
					<view class="date "> 13:23</view>
				</view>
			</view>
		</view>
		<view class="cu-bar foot input" :style="[{transitionProperty:'bottom',transitionTimingFunction:'ease',transitionDuration:messageInputStyle.transitionDuration,bottom:messageInputStyle.bottom+'px'}]">
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" v-model="text"
			 @focus="InputFocus" @blur="InputBlur"></input>
			<button class="cu-btn bg-green shadow" @click="send()">发送</button>
		</view>

	</view>
</template>

<script>
	import SignalR from '../../utils/signalr.js'	
	export default {
		data() {
			return {
				messageList:[],
				text:'666',
				socket:null,
				InputBottom: 0,
				messageInputStyle:{
					transitionDuration:'0s',
					bottom:0
				}
			};
		},
		onLoad() {
			this.connectSocket()
		},
		methods: {
			connectSocket: async function(){
				this.socket = new SignalR();
				console.log('最新代码')
				await this.socket.connectSocket('http://192.168.0.107:5002/hub') 
				this.socket.onMessage('receiveMessage',(content)=>{
					this.messageList.push({type:'opposite',content:content})
					console.log(content)
				})
			},
			send(){
				this.socket.send('SendMessage',this.text)
				this.messageList.push({type:'self',content:this.text})
			},
			InputFocus(e) {
				console.log(e.detail.height)
				this.messageInputStyle = {
						transitionDuration:'0.3s',
						bottom:e.detail.height
				}
			},
			InputBlur(e) {
				this.messageInputStyle = {
					transitionDuration:'0s',
					bottom:0
				}
			}
		}
	}
</script>

<style>
page{
  padding-bottom: 100upx;
}
</style>
