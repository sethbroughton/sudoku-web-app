import Vue from 'vue'
import App from './App.vue'
import Sudoku from './components/Sudoku';

Vue.component('sudoku', Sudoku);

new Vue({
  el: '#app',
  render: h => h(App)
})