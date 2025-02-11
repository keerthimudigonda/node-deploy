var http=require("http")
var url=require("url")
var fs=require("fs")


var server=http.createServer((req,res)=>{
    fs.readFile("data.json","utf-8",(err,data)=>{

        if(err){
            res.write(JSON.stringify({
                err:err.message

            }))
            res.end()
        }
        else{
            res.write(data)
            res.end()
             
        }
    })

})



server.listen(3001,()=>{
    console.log("server is running")
})