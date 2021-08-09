# First NodeJS `gRPC`

A example repository to show how you can create your first gRPC webservice (+ Protobuf in HTTP2 protocol) with NodeJS.

## Getting started

```
sudo npm install -g grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=grpc_js:. helloworld.proto
```

**Read more:**
- https://grpc.io/docs/languages/node/
- https://developers.google.com/protocol-buffers
- https://developers.google.com/web/fundamentals/performance/http2
- https://http2.github.io/

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

Using https://ghz.sh/:
```
$ ghz --insecure --proto ./helloworld.proto --call helloworld.Greeter.SayHello -d '{"name":"Max"}' 0.0.0.0:50051

Summary:
  Count:	200
  Total:	35.95 ms
  Slowest:	13.22 ms
  Fastest:	2.34 ms
  Average:	8.63 ms
  Requests/sec:	5562.82

Response time histogram:
  2.337 [1]	|∎
  3.426 [26]	|∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎
  4.514 [0]	|
  5.602 [6]	|∎∎∎∎∎∎
  6.691 [19]	|∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎
  7.779 [31]	|∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎
  8.868 [40]	|∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎
  9.956 [0]	|
  11.044 [10]	|∎∎∎∎∎∎∎∎∎∎
  12.133 [26]	|∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎
  13.221 [41]	|∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎

Latency distribution:
  10 % in 2.88 ms 
  25 % in 5.73 ms 
  50 % in 8.42 ms 
  75 % in 11.98 ms 
  90 % in 13.06 ms 
  95 % in 13.16 ms 
  99 % in 13.20 ms 

Status code distribution:
  [OK]   200 responses   
```

**Minimum:**
```
Average:	16.03 ms
Requests/sec:	3062.49
```

**Maximum:**
```
Average:	8.63 ms
Requests/sec:	5562.82
```

© Copyright Max Base, 2021
