// 处理登录的 JavaScript
// 定义用户列表
var user_list = getArr("user_list");
// 定义密码列表
var password_list = getArr("password_list");
// 定义分数列表
var score_list = getArr("score_list");

// 处理用户登录
// 获取登录按钮
var login_btn = document.querySelector('#sign_in');
login_btn.addEventListener('click', login);

function login() {
    // 拿到用户的用户名
    var ele = document.querySelector('#username');
    var input_username = ele.value;
    // 拿到用户的密码
    ele = document.querySelector('#password');
    var input_password = ele.value;

    // 判断用户是否存在
    if (user_list.indexOf(input_username) != -1) {
        // 如果用户存在
        // 判断密码是否正确？
        index = user_list.indexOf(input_username);
        var target_password = password_list[index];
        if (input_password == target_password) {
            localStorage.setItem("username", input_username);
            alert("登陆成功咯！");
            // 刷新页面
            location.reload();
        } else {
            alert("登陆失败，密码错误！");
        }
    } else {
        alert('用户不存在，请注册！')
    }
}

// 处理用户注册
// 获取注册按钮
var regist_btn = document.querySelector('#sign_up');
regist_btn.addEventListener('click', regist);

// 用户注册登录
function regist() {
    // 拿到用户的用户名
    var ele = document.querySelector('#username');
    var input_username = ele.value;
    if (input_username == "" || input_username == null) {
     alert("请输入你的用户名！");
     return  ; 
    }
    // 拿到用户的密码
    ele = document.querySelector('#password');
    var input_password= ele.value;
    if (input_password == "" || input_password == null) {
     alert("请输入你的密码！");
     return ;
    }
    // 判断用户是否存在
    if (user_list.indexOf(input_username) == -1) {
        // 如果用户不存在
        user_list.push(input_username);
        password_list.push(input_password);
        saveArr("user_list", user_list);
        saveArr("password_list", password_list);
        alert("注册成功！");
    } else {
        alert('用户已存在，请登录！')
    }
}

// 将数组存入 localstorage
function saveArr(item,arr) {
    var arrStr = JSON.stringify(arr);
    localStorage.setItem(item, arrStr);
}

// 将数组从 localstorage 中获取
function getArr(item) {
    var json_str = localStorage.getItem(item);
    return JSON.parse(json_str) || [];
} 