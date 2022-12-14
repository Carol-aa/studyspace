alert('1')
const button = document.createElement('button');
const root = document.getElementById('root')
button.textContent = "加法"
button.addEventListener('click', () => {
    import(/*webpackChunkName: 'math', webpackPrefetch: true*/'./math.js').then(({ add }) => {
        //webpackPrefetch: true 预加载：在网络空闲的时候加载
        console.log(add(4, 5),'21')
    })
})//懒加载操作
document.body.appendChild(button)