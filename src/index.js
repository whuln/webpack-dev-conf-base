
if (module.hot) {
    module.hot.accept();
  }


import Vue from 'vue';
import App from './components/app.vue';

  new Vue({
    el: '#main',
    components:{
      App
    }
  });

