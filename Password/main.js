// let password = prompt('Password', '');

// if (password == 'password'){
//     return checkPassword()
// }return true

function onButtonClicked(){
    if (checkPassword() === true){
    alert("OK");
    }
}

function checkPassword(){
    let a = prompt("password");
    if (a !== 'mypassword'){
    checkPassword();
    }
    return true;
}
