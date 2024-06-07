import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap } from '@/plugins/WebSocket/types'

/**
 * LED控制
 * @param operationParam 操作参数
 */
export function ctrlLed(operation: TargetOperationMap['led']): void {
  sendDataToWebSocket({
    target: 'led',
    operation
  })
}
