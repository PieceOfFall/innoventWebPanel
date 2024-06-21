import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap, TargetParamMap } from '@/plugins/WebSocket/types'

/**
 * 产品管线屏幕控制
 * @param operation 操作
 * @param operationParam 操作参数
 */
export function ctrlPipelineScreen(
  operation: TargetOperationMap['pipeline-screen'],
  operationParam?: TargetParamMap['pipeline-screen']
): void {
  sendDataToWebSocket({
    target: 'pipeline-screen',
    operation,
    operationParam
  })
}
