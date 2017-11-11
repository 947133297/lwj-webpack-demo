// register a global component
import Vue from 'vue'
import outer from './component/out'

new Vue({
    el: '#app',
    components: { outer }
})