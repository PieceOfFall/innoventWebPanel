import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap } from '@/plugins/WebSocket/types'

/**
 * LED控制
 * @param operation 操作
 */
export function ctrSoundBox(operation: TargetOperationMap['soundbox']): void {
  sendDataToWebSocket({
    target: 'soundbox',
    operation
  })
}
