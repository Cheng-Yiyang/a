var fs = require('fs');

//同步执行

var data =fs.readFileSync("Input.txt");
// 终端打印如下信息
console.log("我是同步执行的结果集："+data.toString());
console.log(data.toString())


function selectedFile(){
    if(1){
        var selectedFile = document.getElementById('file0').files[0];
        var name = selectedFile.name;//读取选中文件的文件名
        var size = selectedFile.size;//读取选中文件的大小
        console.log("文件名:"+name+"大小:"+size);
    
        var reader = new FileReader();//这是核心,读取操作就是由它完成.
        reader.readAsText(selectedFile);//读取文件的内容,也可以读取文件的URL
        reader.onload = function () {
            //当读取完成后回调这个函数,然后此时文件的内容存储到了result中,直接操作即可
            console.log(this.result);
        }
    }
}
