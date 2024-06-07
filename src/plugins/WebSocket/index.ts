import type { Plugin } from 'vue'
import { connectWebSocket, sendDataToWebSocket } from './webSocket'

const webSocketPlugin: Plugin = {
  install(_app, options: string) {
    connectWebSocket(options)
  }
}

export { sendDataToWebSocket }

export default webSocketPlugin
