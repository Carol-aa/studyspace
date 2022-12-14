console.log('hello webpack')
//请求服务
 fetch('api/hello')
 .then(response=>response.text())
 .then(res=>{
     console.log(res);
     
 })