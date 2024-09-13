import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap, TargetParamMap } from '@/plugins/WebSocket/types'

/**
 * 直接发送command指令
 * @param operationParam 操作参数
 */
export function command(
  operation: TargetOperationMap['command'],
  operationParam: TargetParamMap['command']
): void {
  sendDataToWebSocket({
    target: 'command',
    operation,
    operationParam
  })
}
