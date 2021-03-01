  
var aws = require('aws-sdk');
var dynamodb = new aws.DynamoDB();

exports.handler = (event, context, callback) => {
    dynamodb.scan({TableName: 'connectDemo'}, (err, data) => {
        callback(null, data['Items']);
    });
};