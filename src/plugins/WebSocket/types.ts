export interface OperationTargetMap {
  ping: never
  light: 'lightId'
  computer: 'computerId'
  media: 'mediaId'
}

type TargetType<T extends keyof OperationTargetMap> = OperationTargetMap[T]

export interface WebSocketMsg<
  T extends keyof OperationTargetMap = 'ping' | 'light' | 'computer' | 'media'
> {
  clientId: number
  operation: T
  target?: TargetType<T>
  operationParam?: object
}
