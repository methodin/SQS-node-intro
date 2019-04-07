// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region we will be using
AWS.config.update({region: 'us-east-1'});

// Create SQS service client
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

// Replace with your accountid and the queue name you setup
const accountId = '1234567';
const queueName = 'test';

// Setup the sendMessage parameter object
const params = {
  MessageBody: JSON.stringify({
    order_id: 1234,
    date: (new Date()).toISOString()
  }),
  QueueUrl: `https://sqs.us-east-1.amazonaws.com/${accountId}/${queueName}`
};

sqs.sendMessage(params, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Successfully added message", data.MessageId);
  }
});
