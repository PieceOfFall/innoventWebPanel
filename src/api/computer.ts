import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap, ComputerParam } from '@/plugins/WebSocket/types'

/**
 * 电脑控制
 * @param operation 操作
 * @param type 电脑类型
 * @param name 电脑名称
 */
export function ctrlPC(
  operation: TargetOperationMap['computer'],
  type: ComputerParam['type'],
  name: string
): void {
  sendDataToWebSocket({
    target: 'computer',
    operation,
    operationParam: {
      type,
      name
    }
  })
}
