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

### Benchmark Performance

```
$ ghz --insecure --proto ./helloworld.proto --call helloworld.Greeter.SayHello -d '{"name":"Max"}' 0.0.0.0:50051

Summary:
  Count:	200
  Total:	65.31 ms
  Slowest:	17.67 ms
  Fastest:	14.13 ms
  Average:	16.03 ms
  Requests/sec:	3062.49

Response time histogram:
  14.132 [1]	|
  14.486 [5]	|∎∎
  14.840 [6]	|∎∎
  15.194 [11]	|∎∎∎∎
  15.548 [13]	|∎∎∎∎∎
  15.902 [110]	|∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎
  16.256 [4]	|∎
  16.610 [0]	|
  16.964 [0]	|
  17.318 [12]	|∎∎∎∎
  17.672 [38]	|∎∎∎∎∎∎∎∎∎∎∎∎∎∎

Latency distribution:
  10 % in 15.00 ms 
  25 % in 15.65 ms 
  50 % in 15.79 ms 
  75 % in 17.07 ms 
  90 % in 17.44 ms 
  95 % in 17.53 ms 
  99 % in 17.67 ms 

Status code distribution:
  [OK]   200 responses   
```
