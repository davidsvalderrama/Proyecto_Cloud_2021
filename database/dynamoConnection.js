var AWS = require("aws-sdk");
var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });

AWS.config.update({ region: 'us-east-1' });
AWS.config.credentials = credentials;
let data
let docClient = new AWS.DynamoDB.DocumentClient();

let getDataFromAnimals = async function () {
    var params = {
        TableName: "Animales"
    };
    let request = await docClient.scan(params);
    let respone = await request.promise();
    data = respone.Items
    return data
}

module.exports = {
    getDataFromAnimals: getDataFromAnimals
}
