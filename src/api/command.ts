import { sendDataToWebSocket } from '@/plugins/WebSocket'

/**
 * 直接发送command指令
 * @param device 设备名称
 * @param action 操作
 */
export function command(
  device: string,
  action: string
): void {
  console.log(device);

  const targetDevice = window.config.command[device]
  const operationParam = targetDevice[action]
  const operation = operationParam.operation
  
  sendDataToWebSocket({
    target: 'command',
    operation,
    operationParam
  })
}
