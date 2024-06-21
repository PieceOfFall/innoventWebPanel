import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap, TargetParamMap } from '@/plugins/WebSocket/types'

/**
 * 领导来访屏幕控制
 * @param operation 操作
 * @param operationParam 操作参数
 */
export function ctrlLeaderScreen(
  operation: TargetOperationMap['leader-screen'],
  operationParam?: TargetParamMap['leader-screen']
): void {
  sendDataToWebSocket({
    target: 'leader-screen',
    operation,
    operationParam
  })
}
