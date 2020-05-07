<template>
<div>
  <h1 class="title"> Sudoku Solver </h1>
  <h3> Please enter your starter numbers </h3>
  <div class="columns is-3">
    <div class="column is-one-third">
      <div class="sudoku-board">
        <div v-for="(n, i) in 9" v-bind:key="i">
          <div v-for="(n, j) in 9" v-bind:key="j">
            <input type="number" min=1 max=9 v-model.number.lazy="board[i][j]" class="cell"/>
          </div>
        </div>
        <button class="button is-light" v-on:click="resetBoard">Reset</button>
       </div>
    </div>
    <div class="column">  
      <div class="buttons">
        <button class="button is-success" 
        v-on:click="displayBoard"
        v-bind:class="isLoading">Solve</button>
        
        <button class="button is-dark" v-on:click="loadPuzzle">Load a Random Sudoku</button>
      </div>
      <article class="message" v-show="solved">
        <div class="message-header">
          <p>Runtime Statistics</p>
        </div>
        <div class="message-body">
          <div>
          Calculation Time: <strong>{{programTime}} milliseconds </strong>
          </div>
          <div>
          Number of Backtracks: {{backtracks}}
          </div>
          Learn more about the method used to solve the puzzle <a href="https://en.wikipedia.org/wiki/Backtracking">HERE </a>
        </div>  
      </article>
    </div> 
  </div>
</div>

</template>

<script>
  export default {
    data() { return { 
      programTime: 0,
      values: {},
      backtracks: 0,
      solved: false,
      isLoading: '',
      board: [
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ]
    } },
    methods: {
      checkGuess(num, row, col, board) {
        //Check Row
        let i = row;
        for(let j = 0; j<board.length; j++){
          if(board[i][j]==num){
            return false;
          }
        }
        //Check Column
        let j = col;
        for(let i = 0; i<board.length; i++){
          if(board[i][j]==num){
            return false;
          }
        }
        //Check Sector
        let r = row - row % 3;
        let c = col - col % 3;
        for(let i = r; i<(r+3); i++){
          for(let j = c; j<(c+3); j++){
            if(board[i][j]==num){
              return false;
            }
          }
        }
        return true;   
        }, 

      solveSudoku(board){
        
        for(let row = 0; row<board.length; row++){
          for(let col = 0; col<board.length; col++){
            if(board[row][col]==''){
              for(let n = 1; n<=9; n++){
                if(this.checkGuess(n, row, col, board)){
                  board[row][col] = n;
                  if(this.solveSudoku(board)){
                    return true;
                  } else {
                    this.backtracks = this.backtracks + 1;
                    board[row][col] = '';
                  }
                } 
              }
              return false;
            }
          }
        }
    this.board = board;
    return true;
      }, 

  displayBoard(){
    let now = performance.now();
    this.isLoading = 'is-loading';
    let board = this.board; 
    this.solveSudoku(board);
    this.solved = true;
    this.isLoading = '';
    let finish = performance.now();
    this.programTime = (finish-now);
    this.$forceUpdate();
  }, 

  resetBoard(){

    let board =  [
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ];
    this.board = board;
    this.solved = false;
    this.backtracks = 0;

  }, 

  loadPuzzle(){
    this.backtracks = 0;
    this.solved = false;
    const puzzlePromise = fetch(`http://localhost:8080/sudoku/api/puzzle`);
    puzzlePromise
    .then((response)=>{
      return response.json();
    })
    .then((data)=>
    this.values = data
    )
    this.board = this.values.values;
  }

      }
    }
  
</script>
<style>
  .sudoku-board {
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 800px;

  }
   .cell {
        width: 50px;
        height: 50px;
        border: 2px solid rgb(75,75,75);
        font-size: 42px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .message {
      width: 500px
    }
</style>