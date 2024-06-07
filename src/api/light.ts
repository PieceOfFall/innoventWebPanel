import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap, TargetParamMap } from '@/plugins/WebSocket/types'

/**
 * 灯带控制
 * @param operation 操作
 * @param operationParam 操作参数
 */
export function ctrlLight(
  operation: TargetOperationMap['light'],
  operationParam?: TargetParamMap['light']
): void {
  sendDataToWebSocket({
    target: 'light',
    operation,
    operationParam
  })
}
