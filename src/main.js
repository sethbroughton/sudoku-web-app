import Vue from 'vue'
import App from './App.vue'
import Sudoku from './Sudoku';
import Cell from './Cell';

Vue.component('sudoku', Sudoku);
Vue.component('cell', Cell);

new Vue({
  el: '#app',
  render: h => h(App)
})