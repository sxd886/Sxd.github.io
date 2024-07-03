//分数
var score = 0;
//题目列表
var quiz_list = [];
//1.获取按钮
btns = document.querySelector('.dropdown-menu').querySelectorAll('li');
//2.为这个 按钮绑定事件
for (var i = 0; i < btns.length; i ++) {
  btns[i].addEventListener('click' , showQuiz);
}
//3.点击提交，返回题目列表
//获取提交按钮
submit_btn = document.querySelector('.submit');
submit_btn.addEventListener('click', ()=> {
  //获得用户提供的答案
  //拿到这些input
  var trs = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr');
  for (var i = 0; i < TransformStream.length; i ++) {
    var input = trs[i].querySelector('input');

    if (Number(input.value) == Number(eval(quiz_list[i]).toFixed(2))) {
      score ++;
    }
  }
  //展示score
  showScore(score);

  //拿到要隐藏的元素div
  var node = document.querySelector("#quiz");
  //隐藏
  node.style.display = 'none';
  //拿到要显示的div
  node = document.querySelector('#post');
  node.style.display = 'block';
});

//展示题目
function showQuiz(event) {
  //将上一次的题目清空
  quiz_list = [];
  //分数初始化
  score = 0
  //获取点击的是哪个难度？
  var difficulty = event.target.innerHTML
  console.log('我点啦，点的是谁呢？' , difficulty);
  //生成5题
for (var i = 0; i < 5; i ++) {
  quiz_list.push(generateQuiz());
}
console.log('生成的题目是',quiz_list);
//将题目放到指定位置
//拿到位置的元素
var ele = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr');
console.log('元素是', ele);
for(var i = 0; i < ele.length; i ++){
  var td = ele[i].querySelector('td');
  //将生成的题目放到元素上
  td.innerHTML = quiz_list[i];
}
//拿到要隐藏的元素div
var node = document.querySelector('#post');
//隐藏
node.style.display = 'none';
//拿到要显示的div
node = document.querySelector('#quiz');
node.style.display = 'block';
 }
 
//生成题目
function generateQuiz() {
  quiz = [];
  for (var i = 0; i < 5; i ++) {
    // 思考一下，如何生成一个数字，在生成一个字符呢？
    if (i % 2 == 0) {
      quiz.push(Math.round(Math.random() * 50));
    }else {
      //生成字符？
      quiz.push(generateOp());
    }
  }
  return quiz.join('');
}

//生成字符
function generateOp() {
  ops = ['+', '-', '*', '/'];
  return ops[Math.floor(Math.random() * 4)];
}
function showScore(score) {
  //拿到放分数的元素
  var ele = document.querySelector('.ggscore');
  //把分数放进去
  ele.innerText = score;
}
//判断一个数字是否为整数
function isInteger(num) {
  return Math.floor(num) === num;
}