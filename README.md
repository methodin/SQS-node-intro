# SQS-node-intro
Code that backs up the [SQS node.js introduction](https://medium.com/@drwtech/a-node-js-introduction-to-amazon-simple-queue-service-sqs-9c0edf866eca)

# Requirements
You must have an AWS account, your Account ID noted and a valid AWS credentials file setup on your system.

Details can be found in the referenced article.

# Usage
You must have node installed on your system or a node docker alias. If using docker you should make sure you map your local ~/.aws file so it's available in the correct path inside docker.

To send a message:
```
node send.js
```

To receive a message:
```
node receive.js
```
