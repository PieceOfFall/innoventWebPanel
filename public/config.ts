window.config = {
  command: {
    // #region 中央展台
    // 产品管线小屏
    pipeline: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.30',
        port: 6000,
        isHex: false,
        data: 'medicine_001_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.13',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 物体识别桌1
    ttor1: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.30',
        port: 6000,
        isHex: false,
        data: 'medicine_002_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.14',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 物体识别桌2
    ttor2: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.30',
        port: 6000,
        isHex: false,
        data: 'medicine_003_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.15',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 物体识别桌3
    ttor3: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.30',
        port: 6000,
        isHex: false,
        data: 'medicine_004_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.16',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 物体识别桌4
    ttor4: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.30',
        port: 6000,
        isHex: false,
        data: 'medicine_005_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.17',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 领导来访
    welcomeLeader: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.31',
        port: 6000,
        isHex: false,
        data: '005_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.11',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 产品管线主机
    pipelineHost: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.31',
        port: 6000,
        isHex: false,
        data: 'pipeline_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.4',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    pipelineVol: {
      up: {
        operation: 'tcp',
        ip: '192.168.5.4',
        port: 7788,
        isHex: false,
        data: 'set_volume:up'
      },
      down: {
        operation: 'tcp',
        ip: '192.168.5.4',
        port: 7788,
        isHex: false,
        data: 'set_volume:down'
      }
    },

    // 欢迎大屏
    welcomeBig: {
      poweron: {
        operation: 'udp',
        ip: '192.168.5.62',
        port: 12345,
        isHex: true,
        data: '0106002C000189C3'
      },
      poweroff: {
        operation: 'udp',
        ip: '192.168.5.62',
        port: 12345,
        isHex: true,
        data: '0106002C00004803'
      }
    },

    // 区域静音
    centerAudioMute: {
      poweron: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: 'B32103002701020004000100'
      },
      poweroff: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: 'B32102002701020004000000'
      }
    },

    // 中央展台顶部灯带
    centerLight: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.32',
        port: 6000,
        isHex: true,
        data: '0101'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.32',
        port: 6000,
        isHex: true,
        data: '0001'
      }
    },

    // #endregion

    // #region 创立背景
    // 区域静音
    backgroundAudioMute: {
      poweron: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: '待确认'
      },
      poweroff: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: '待确认'
      }
    },

    //区域灯带
    backgroundLight: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.32',
        port: 6000,
        isHex: true,
        data: '0102'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.32',
        port: 6000,
        isHex: true,
        data: '0002'
      }
    },
    // #endregion

    // #region 全球布局
    //全球布局小屏
    global: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.30',
        port: 6000,
        isHex: false,
        data: 'global_006_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.18',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 全球布局小屏左
    globalLeft: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.30',
        port: 6000,
        isHex: false,
        data: 'global_007_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.19',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 全球布局小屏右
    globalRight: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.30',
        port: 6000,
        isHex: false,
        data: 'global_008_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.20',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 全球布局主机
    globalHost: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.31',
        port: 6000,
        isHex: false,
        data: 'global_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.5',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 全球布局大屏
    globalBig1: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.61',
        port: 5000,
        isHex: true,
        data: '000000000006000613ED00FF'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.61',
        port: 5000,
        isHex: true,
        data: '000000000006000613ED00F0'
      }
    },
    globalBig2: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.61',
        port: 5000,
        isHex: true,
        data: '000000000006000613EE00FF'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.61',
        port: 5000,
        isHex: true,
        data: '000000000006000613EE00F0'
      }
    },

    // 区域静音
    globalAudioMute: {
      poweron: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: 'B32102002701020003000100'
      },
      poweroff: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: 'B32101002701020003000000'
      }
    },

    globalVol: {
        up: {
          operation: 'tcp',
          ip: '192.168.5.5',
          port: 7788,
          isHex: false,
          data: 'set_volume:up'
        },
        down: {
          operation: 'tcp',
          ip: '192.168.5.5',
          port: 7788,
          isHex: false,
          data: 'set_volume:down'
        }
      },

    // 区域灯带
    globalLight: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.32',
        port: 6000,
        isHex: true,
        data: '0104'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.32',
        port: 6000,
        isHex: true,
        data: '0004'
      }
    },

    // #endregion

    // #region 未来展望
    // 未来展望主机
    outlook: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.31',
        port: 6000,
        isHex: false,
        data: 'future_write_poweron'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.6',
        port: 7788,
        isHex: false,
        data: 'shutdown'
      }
    },

    // 未来展望大屏
    outlookBig: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.63',
        port: 5000,
        isHex: true,
        data: '000000000006000613ED00FF'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.63',
        port: 5000,
        isHex: true,
        data: '000000000006000613ED00F0'
      }
    },

    // 区域静音
    outlookAudioMute1: {
      poweron: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: 'B32104002701020005000100'
      },
      poweroff: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: 'B32103002701020005000000'
      }
    },
    outlookAudioMute2: {
      poweron: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: 'B32105002701020006000100'
      },
      poweroff: {
        operation: 'udp',
        ip: '192.168.5.33',
        port: 50000,
        isHex: true,
        data: 'B32104002701020006000000'
      }
    },

    outlookVol: {
        up: {
          operation: 'tcp',
          ip: '192.168.5.6',
          port: 7788,
          isHex: false,
          data: 'set_volume:up'
        },
        down: {
          operation: 'tcp',
          ip: '192.168.5.6',
          port: 7788,
          isHex: false,
          data: 'set_volume:down'
        }
      },

    // 区域灯带
    outlookLight: {
      poweron: {
        operation: 'tcp',
        ip: '192.168.5.32',
        port: 6000,
        isHex: true,
        data: '0105'
      },
      poweroff: {
        operation: 'tcp',
        ip: '192.168.5.32',
        port: 6000,
        isHex: true,
        data: '0005'
      }
    }
    // #endregion
  }
}
