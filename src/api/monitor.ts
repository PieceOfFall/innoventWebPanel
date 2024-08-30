import { sendDataToWebSocket } from '@/plugins/WebSocket'
import type { TargetOperationMap } from '@/plugins/WebSocket/types'

/**
 * 全球布局监控界面隐藏控制
 * @param operation 操作
 */
export function ctrlMonitor(operation: TargetOperationMap['monitor']): void {
  sendDataToWebSocket({
    target: 'monitor',
    operation
  })
}
