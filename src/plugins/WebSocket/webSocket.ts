import type { WebSocketMsg, TargetOperationMap } from './types'

let websocket: WebSocket
let heartBeatTimer: number

/**
 * 连接websocket
 * @param url websocket地址
 */
export function connectWebSocket(url: string) {
  websocket = new WebSocket(url)

  websocket.onopen = () => {
    // 连接成功后发送数据
    console.log('Connected')
    heartBeatTimer = startSendHeartBeat()
  }

  websocket.onclose = () => {
    clearInterval(heartBeatTimer)
    if (websocket.readyState === WebSocket.CLOSED) connectWebSocket(url)
  }

  websocket.onmessage = (event) => {
    console.log(event.data)
  }

  websocket.onerror = (error) => {
    const errorSocket = error.target as WebSocket

    if (errorSocket.readyState === WebSocket.CLOSED) connectWebSocket(url)
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
export function sendDataToWebSocket<T extends keyof TargetOperationMap>(data: WebSocketMsg<T>) {
  // 将数据转换为字符串并发送到服务器
  websocket.send(
    JSON.stringify({
      _type: 'web-panel',
      clientId: import.meta.env.VITE_CLIENT_ID as number,
      clientName: 'web-panel',
      timestamp: new Date().getTime(),
      ...data
    })
  )
}

/**
 * 开启心跳包定时器
 * @returns 定时器id
 */
function startSendHeartBeat(): number {
  return setInterval(() => {
    sendDataToWebSocket({
      operation: 'ping'
    })
  }, 1000)
}
