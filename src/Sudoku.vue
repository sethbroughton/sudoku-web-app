<template>
  <div class="sudoku-board">
    <div v-for="(n, i) in 9" v-bind:key="i">
      <div v-for="(n, j) in 9" v-bind:key="j">
      <input type="number" min=1 max=9 v-model.number.lazy="board[i][j]" class="cell"/>
      </div>
    </div>
    <div id="example-1">
        <button v-on:click="displayBoard">Solve</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() { return {
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
        //let board = this.board;
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
        //let board = this.board;
        for(let row = 0; row<board.length; row++){
          for(let col = 0; col<board.length; col++){
            if(board[row][col]==''){
              for(let n = 1; n<=9; n++){
                if(this.checkGuess(n, row, col, board)){
                  board[row][col] = n;
                  this.$forceUpdate();

                  if(this.solveSudoku(board)){
                    return true;
                  } else {
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
    let board = this.board; 
    this.solveSudoku(board);
    console.log(board);
    this.$forceUpdate();

  }
      }
    }
  
</script>
<style>
  .sudoku-board {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    height: 1200px;
  }
   .cell {
        width: 64px;
        height: 64px;
        border: 2px solid rgb(75,75,75);
        font-size: 42px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>