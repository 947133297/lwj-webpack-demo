// register a global component
Vue.component(
    'async-webpack-example',
    () => import('./comp')
)
new Vue({
    el: '#app'
})