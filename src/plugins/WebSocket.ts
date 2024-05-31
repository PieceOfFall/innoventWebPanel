import type { Plugin } from 'vue'

let url: string
let websocket: WebSocket
let heartBeatTimer: number
let reconnectTimer: number

const webSocketPlugin: Plugin = {
  install(_app, options: string) {
    connectWebSocket(options)
  }
}

/**
 * 连接websocket
 * @param url websocket地址
 */
function connectWebSocket(socketUrl: string) {
  websocket = new WebSocket(socketUrl)
  url = socketUrl

  websocket.onopen = () => {
    // 连接成功后发送数据
    console.log('Connected')
    clearInterval(reconnectTimer)
    heartBeatTimer = startSendHeartBeat()
  }

  websocket.onclose = () => {
    clearInterval(heartBeatTimer)
    console.log('cloooooooooooooooose')
  }

  websocket.onmessage = (event) => {
    console.log(event.data)
  }

  websocket.onerror = (error) => {
    console.error('WebSocket error:', error)
  }
}

/**
 * 关闭WebSocket连接
 */
export function disconnectWebSocket() {
  if (websocket) {
    websocket.close()
  }
}

/**
 * 发送websocket数据
 * @param data 需要发送地数据
 */
export function sendDataToWebSocket(data: any) {
  // 将数据转换为字符串并发送到服务器
  websocket.send(JSON.stringify(data))
}

/**
 * 开启心跳包定时器
 * @returns 定时器id
 */
function startSendHeartBeat(): number {
  return setInterval(() => {
    sendDataToWebSocket('ping')
  }, 1000)
}

export default webSocketPlugin
