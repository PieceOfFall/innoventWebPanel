import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap } from '@/plugins/WebSocket/types'

/**
 * 继电器下所有设备控制
 * @param operation 操作
 */
export function ctrRelay(operation: TargetOperationMap['relay']): void {
  sendDataToWebSocket({
    target: 'relay',
    operation
  })
}
