/**
 * Varinats connect libraries
 * 
 * import 'vue'
 * import 'bootstrap/dist/css/bootstrap.min.css'
 * import Vue from 'vue'
 * window.Vue = require('vue')
 */

import './js/common'
import './assets/styl/main.styl'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
// import App from './components/App.vue'

// window.Vue = require('vue')
// Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
function init() {
    let mount_point = $('.some_mount_point');

    if (!mount_point.length) return false;

    console.log('asd')
    new Vue({
        el: mount_point.get(0),
        render: h => h(require('./components/banner.vue').default)
    })
}

$(document).ready(() => {
    init()
})
