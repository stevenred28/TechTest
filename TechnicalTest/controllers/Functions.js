/**
 * Steve Delfin's test
 */

var fs = require('fs');
var response_file = fs.readFileSync("./controllers/data_response.json");
var request_file = fs.readFileSync("./controllers/data_request.json");


exports.sum = function(req, res){
    test();
    var response_data = JSON.parse(response_file);
    var request_data = JSON.parse(request_file);
    var req_num1 = request_data.TD1.number1;
    var req_num2 = request_data.TD1.number2;
    response_data.Total = add_two_numbers(req_num1, req_num2);
    res.send(JSON.stringify(response_data));
};

function add_two_numbers(number1, number2){
    var total = number1 + number2;
    return total;
}

function test(){
    var sum;
    var sumcheck;
    var result;
    var results = '';
    var json_data = JSON.parse(request_file);
    for (item in json_data) {
        sum = add_two_numbers(json_data[item].number1, json_data[item].number2);
        sumcheck = parseFloat(json_data[item].number1) + parseFloat(json_data[item].number2)
        result = assert(sum == sumcheck, item);
        results += result
    }
    console.log(results)
}

function assert(condition, message){
    if (condition){
        return message + ': PASSED' + '\n'
    } else{
        return message + ': FAILED' + '\n'
    }
}