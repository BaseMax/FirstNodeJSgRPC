var messages = require('./helloworld_pb')
var services = require('./helloworld_grpc_pb')
var grpc = require('@grpc/grpc-js')

function sayHello(call, callback) {
  let reply = new messages.HelloReply()
  reply.setMessage('Hello ' + call.request.getName())
  reply.setAge(40)
  callback(null, reply)
}

function main() {
  let server = new grpc.Server()
  server.addService(services.GreeterService, {sayHello: sayHello})
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start()
  })
}

main()
