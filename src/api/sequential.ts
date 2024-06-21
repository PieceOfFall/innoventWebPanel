import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap } from '@/plugins/WebSocket/types'

/**
 * 时序电源总控制
 * @param operation 操作
 */
export function ctrSequential(operation: TargetOperationMap['sequential']): void {
  sendDataToWebSocket({
    target: 'sequential',
    operation
  })
}
