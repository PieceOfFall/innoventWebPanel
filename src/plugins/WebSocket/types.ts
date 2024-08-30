type PowerCtrl = 'poweron' | 'poweroff'
export interface TargetOperationMap {
  ping: 'ping'

  computer: PowerCtrl
  media: 'normal' | 'positioning' | 'mute' | 'unmute'
  monitor: 'visible' |  'hidden'
  'big-screen': PowerCtrl
  led: 'mode'

  relay: PowerCtrl
  light: PowerCtrl
  'leader-screen': PowerCtrl
  'pipeline-screen': PowerCtrl
  screen: PowerCtrl

  soundbox: PowerCtrl
  sequential: PowerCtrl
}

export interface TargetParamMap {
  ping: never

  computer: ComputerParam
  media: 1 | 2 | 3 | 4
  'big-screen': 'global' | 'welcome' | 'future'
  led: number
  monitor: never

  relay: never
  light: number | 'all'
  'leader-screen': 1 | 2
  'pipeline-screen': 1 | 2
  screen: never

  soundbox: never
  sequential: never
}

type OperationType<T extends keyof TargetParamMap> = TargetOperationMap[T]
type ParamType<T extends keyof TargetParamMap> = TargetParamMap[T]

export interface WebSocketMsg<
  T extends keyof TargetOperationMap =
    | 'ping'
    | 'light'
    | 'computer'
    | 'media'
    | 'big-screen'
    | 'soundbox'
    | 'led'
> {
  target?: T
  operation: OperationType<T>
  operationParam?: ParamType<T>
}

/* Params */
export interface ComputerParam {
  type: 'host' | 'leaderHost' | 'medicine' | 'global' | 'integrated' | 'hosts'
  name: string
}

export interface LedParam {
  r: number
  g: number
  b: number
}

export interface CtrlMsg {
  code: MsgCode
  msg: string
}

export enum MsgCode {
  Error,
  Success,
  Info,
  NotAlert
}
