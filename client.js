var parseArgs = require('minimist')
var messages = require('./helloworld_pb')
var services = require('./helloworld_grpc_pb')
var grpc = require('@grpc/grpc-js')

function main() {
  var argv = parseArgs(process.argv.slice(2), {
    string: 'target'
  })
  var target = 'localhost:50051'
  if (argv.target) {
    target = argv.target
  }
  let client = new services.GreeterClient(target, grpc.credentials.createInsecure())
  let request = new messages.HelloRequest()
  let user = 'world'
  if (argv._.length > 0) {
    user = argv._[0] 
  }
  request.setName(user)
  client.sayHello(request, function(err, response) {
    console.log('Greeting:', response.getMessage())
  })
}

main()
