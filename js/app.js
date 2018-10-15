import Vue from 'vue';
import Meta from 'vue-meta';
import router from './router';
import store from './store';

import PNav from './components/navigation';
Vue.component('p-nav', PNav);
import PSection from './components/section';
Vue.component('p-section', PSection);

Vue.use(Meta);

var app = new Vue({
    el: '#app',
    router,
    store
});
