
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

function get(from){
    MyContract.methods.update().call({from:from},function(err,result){
        if (err) {
            console.log(err)
        }
    
        var output1=result;
        b=output1.toString()
        fs = require('fs');
        fs.writeFile('record_save.txt',b, function (err) {
          if (err) return console.log(err);
          console.log('output > record_save.txt');
        });
        var b_1=b+'\n';
        fs.appendFile('output.txt',b , function (err) {
          if (err) return console.log(err);
          console.log('hash_id > output_save.txt');
        });

        
    })
}
