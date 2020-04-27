export type remoteType = {
  url?:string,
  contentType?:string,
  headers?:any,
  body?:string,
  method?:string,
  handler?:string,
}

export type localType = any
export type jsonType = {[key:string]:any} | any[]

export type frontendType = {

}


export type execOptionsType = {
  remote:remoteType[],
  local:localType[],
  json:any[],
  apilify:any[],
  frontend:any[],
  log:any[],
  options:any[],
  mock:any[],
}