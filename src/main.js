// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('materialize-css/dist/css/materialize.min.css')
require('materialize-css/dist/js/materialize.min.js')

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.filter('addZero', function(number) {
    if(number < 10){
        return `0${number}`;
      }
    return number;
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
