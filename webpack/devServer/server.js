const http = require('http')//创建一个服务
const app = http.createServer((req, res) => {
    if (req.url == '/api/hello') {
        res.end('hello node')//返回该内容 
    }
})
app.listen(9000, 'localhost', () => {
    //监听该app 9000:自己设置的端口  localhost：域名（可以省略）
    console.log('localhost :9000')
})