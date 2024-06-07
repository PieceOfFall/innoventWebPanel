import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap, TargetParamMap } from '@/plugins/WebSocket/types'

/**
 * 音频处理器控制
 * @param operation 操作
 * @param operationParam 操作参数
 */
export function ctrlMedia(
  operation: TargetOperationMap['media'],
  operationParam?: TargetParamMap['media']
): void {
  sendDataToWebSocket({
    target: 'media',
    operation,
    operationParam
  })
}
