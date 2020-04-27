export default class AutoApi {
  apiName:string
  constructor(apiName:string){
    this.apiName = apiName
  }
  remote(options?: any): AutoApi {
    return this
  }
  local(options?: any): AutoApi {

    return this
  }
  json(options?: any): AutoApi {

    return this
  }
  addFrontend(options?: any): AutoApi {

    return this
  }
  logFile(options?: any): AutoApi {

    return this
  }
  options(options?: any): AutoApi {

    return this
  }
  mock(options?: any): AutoApi {

    return this
  }
  invoke(options?: any): AutoApi {
    console.log(`invoke`)
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

