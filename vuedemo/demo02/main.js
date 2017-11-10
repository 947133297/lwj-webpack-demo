// register a global component
import Vue from 'vue'
import outer from './component/out.vue'

new Vue({
    el: '#app',
    components: { outer }
})