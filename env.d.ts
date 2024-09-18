/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_WS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare type Command = Record<string,Record<string,CommandParam>>

declare interface CommandParam {
  operation: 'tcp'| 'udp'
  ip:string
  port:number
  isHex:boolean
  data: string
}

declare interface WindowConfig {
  command: Command
}

declare interface Window {
  config:WindowConfig
}
