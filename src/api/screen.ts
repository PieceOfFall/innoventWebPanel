import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap } from '@/plugins/WebSocket/types'

/**
 * 继电器下屏幕控制
 * @param operation 操作
 */
export function ctrScreen(operation: TargetOperationMap['screen']): void {
  sendDataToWebSocket({
    target: 'screen',
    operation
  })
}
