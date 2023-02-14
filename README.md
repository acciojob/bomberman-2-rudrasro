# Bomberman 2

The game we designed in Bomberman-1 was all based on luck. Let's extend the same game with the same <strong><code>10x10 grid</code></strong> and try to help our fellow users get a path to win. But how?
 

 <ul>
 Whenever a user clicks on a cell he/she should be able to see a number based on the following conditions:
 <li>Consider a rectangular area around the cell clicked.</li>
 <li>Calculate the number of bombs contained in that area.</li>
 <img src="https://d3dyfaf3iutrxo.cloudfront.net/image/upload/971a901912d64e64976b83dcaf3d8026.jpg" style="width:200px;height:300px">
 <li>Display the number in the cell.</li>
 </ul>
 

 One might think what about the cells at the extreme edges
 

 <b>Worry Not!
 Consider the following images. These will help you consider various edge cases.
 </b>
 <img src ="https://d3dyfaf3iutrxo.cloudfront.net/image/upload/c48d7b4ced1047728c95d408254be6ed.jpeg" style="width:200px;height:300px;">
 <br>
 <img src ="https://d3dyfaf3iutrxo.cloudfront.net/image/upload/f1e3f899012e4146b707fb11d245428e.jpeg" style="width:200px;height:300px;">
 <br>
 

 <b>How will it help?</b>
 By clicking on various cells user may be able deduce which cells contain bombs. Following the same pattern the user may complete the game.
 

 <b>Users first! 🙏</b>
 You have helped users a lot by guiding them the path, but what if they could remember their conclusions out of those helping paths?
 For example: The user is sure that some cell contains a bomb, they may want to remember it so that they don't have to make calculations again and again.
 

 <b>Let's get to the point.</b>
 Give the users an option to flag a cell as follows:
 

 When users right-clicks on a cell they should see something like this.
 

 <img src ="https://d3dyfaf3iutrxo.cloudfront.net/image/upload/9121e5366a384c25aff6414c24e91b15.jpeg" style="width:100px;height:100px;">
 <br>
 This way users can remember that they concluded there's a bomb in that cell and should not click it. If a user left-clicks on this flagged cell, normal flow should continue.
 

 <b>Time for celebration 🎉</b>
 If a user has scored <strong>90</strong> points it means he has clicked all the safe cells or flagged all the <strong>10</strong> bombs. A message should be displayed on the screen saying "YOU WIN!". Otherwise "YOU LOSE!".
 <strong>Acceptance criteria </strong>
 <li>Use 🚩 💣 to flag and show bombs</li>
 <li>Each of the box will have id {0, 1, .. 99} </li>
 <li>For valid boxes className list should contain 'valid'</li>
 <li>For bomb boxes className list should contain 'bomb' </li>
 <li>Boxes which are revealed (on game over or user left-click) className list should contain 'checked'</li>
 <li>Flaged Boxes (*by user) className list should contain 'flag' </li>
 <li>Each of the box should have <code>data</code> attribute which has value equal to the number cells containing bomb in its neighbourhood</li>
 <li>ex: <code>&lt;div id="13" class="valid checked" data="0"&gt;&lt;/div&gt</code></li>
 <li>Message should be inside div tag of id 'result' </li>
 <li>Keep track of flags left inside span tag of element id 'flagsLeft' </li>
