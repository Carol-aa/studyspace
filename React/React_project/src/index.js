//入口文件 
const App =
    <div>
        <h1>标题</h1>
        <p>项目</p>
    </div>
//获取一个根容器
const root = ReactDOM.createRoot(document.getElementById('root'));
//将app渲染进根容器 
root.render(App)
//必须经过webpack打包后才能执行