export interface TargetOperationMap {
  ping: 'ping'
  light: 'poweron' | 'poweroff'
  computer: 'poweron' | 'poweroff'
  media: 'normal' | 'positioning' | 'mute' | 'unmute'
  screen: 'poweron' | 'poweroff'
  soundbox: 'poweron' | 'poweroff'
  led: 'poweron' | 'poweroff'
}

export interface TargetParamMap {
  ping: never
  light: number
  computer: ComputerParam
  media: 1 | 2 | 3 | 4
  screen: 1 | 2 | 3
  soundbox: never
  led: never
}

type OperationType<T extends keyof TargetParamMap> = TargetOperationMap[T]
type ParamType<T extends keyof TargetParamMap> = TargetParamMap[T]

export interface WebSocketMsg<
  T extends keyof TargetOperationMap = 'ping' | 'light' | 'computer' | 'media'
> {
  target?: T
  operation: OperationType<T>
  operationParam?: ParamType<T>
}

/* Params */
export interface ComputerParam {
  type: 'host' | 'leaderHost' | 'medicine' | 'global'
  name: string
}

export interface LedParam {
  r: number
  g: number
  b: number
}
