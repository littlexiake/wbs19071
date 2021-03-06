let http = require("http");

class User {
    constructor(id,name) {
        this.id = id;
        this.name= name;
    }
}

let users = new Map();
users.set(1, new User(1,"小虾壳"));
users.set(2, new User(2,"Sam"));
users.set(3, new User(3,"Frank"));
users.set(4, new User(4,"John"));


class Result {
    constructor(flag,data) {
        this.flag = flag;
        this.data = data;
    }
}

//创建一个服务器
let server = http.createServer(function(request,response) {
    let result = null;

    let url = request.url;

    try {
        let param = url.split(/\?/)[1];
        let key = param.split(/=/)[0];
        let value = param.split(/=/)[1];
        // console.log(key, value);
        if (!key || !value || key!="id")
            // console.log("Parameter must be id=???");
            result = new Result(false, "Parameter must be id=???");
        else {
            if (Number.isInteger(+value)) {
                if (users.has(+value))
                    result = new Result(true, users.get(+value));
                else
                    result = new Result(false, "Not Found :(");
            } else {
                // console.log("ID must be integer!");
                result = new Result(false, "ID must be integer!");
            }
        }
    } catch(e) {
        // console.log("Invalid Parameter!");
        result = new Result(false, "Invalid Parameter!");
    }
    response.writeHead(200,{ "content-type" : "text/plain;charset=utf-8"});
    response.write(JSON.stringify(result));
    response.end();
});

server.listen(8000,function(){
    console.log("Running ...");
});