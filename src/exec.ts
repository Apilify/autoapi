require('module-alias/register')
import AutoApi, {Frontend} from '@root/handler'

new AutoApi("NewYorkData")
.remote({
  url:"https://data.cityofnewyork.us/resource/s3k6-pzi2.json"
})
.local({
  file:"/..."
})
.json({
  "hi":"there"
})
.addFrontend(Frontend.Swift({
  package:true,
  pod:true,
  localOutput:"/User/lanethompson/apilify/proj"
}))
.logFile({})
.options({})
.mock()
.invoke()
console.log("done")

