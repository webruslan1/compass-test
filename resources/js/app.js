
require('./bootstrap');

window.Vue = require('vue');
import Vuetify from './plugins/vuetify'

Vue.component('v-about', require('./components/About.vue').default);

const app = new Vue({
    vuetify: Vuetify,
    el: '#app',
});
