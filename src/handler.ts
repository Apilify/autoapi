import { execOptionsType, remoteType, localType, jsonType } from '@root/types'
export default class AutoApi {
  apiName:string
  execOptions:execOptionsType
  constructor(apiName:string){
    this.apiName = apiName
    this.execOptions = {
      remote:[],
      local:[],
      json:[],
      apilify:[],
      frontend:[],
      log:[],
      options:[],
      mock:[]
    }
  }
  remote(options: remoteType): AutoApi {
    this.execOptions.remote.push(options)
    return this
  }
  local(options: localType): AutoApi {
    this.execOptions.local.push(options)
    return this
  }
  json(options: jsonType): AutoApi {
    this.execOptions.json.push(options)
    return this
  }
  addFrontend(options: any): AutoApi {
    this.execOptions.frontend.push(options)
    return this
  }
  logFile(options: any): AutoApi {
    this.execOptions.log.push(options)
    return this
  }
  options(options: any): AutoApi {
    this.execOptions.options.push(options)
    return this
  }
  mock(options?: any): AutoApi {
    this.execOptions.mock.push(options)
    return this
  }
  invoke(options?: any): AutoApi {
    return this
  }
}

class Frontend {
  static Swift(options:any): any{
    return {}
  }
  constructor(){
  }
}

export {AutoApi, Frontend}

