# First NodeJS `gRPC`

## Getting started

```
sudo npm install -g grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=grpc_js:. helloworld.proto
```

### Start the server

```
node server.js
```

### Start the client to test

```
node client.js
```

#### Test with playground software (BloomRPC)

![BloomRPC - first nodejs grpc](preview.png)
