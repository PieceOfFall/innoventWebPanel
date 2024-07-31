import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap, TargetParamMap } from '@/plugins/WebSocket/types'

/**
 * 大屏控制
 * @param operation 操作
 * @param operationParam 操作参数
 */
export function ctrlBigScreen(
  operation: TargetOperationMap['big-screen'],
  operationParam?: TargetParamMap['big-screen']
): void {
  sendDataToWebSocket({
    target: 'big-screen',
    operation,
    operationParam
  })
}
