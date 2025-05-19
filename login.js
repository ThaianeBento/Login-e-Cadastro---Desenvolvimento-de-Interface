const eyeIcon= document.getElementById('eye')
const slashedEyeIcon = document.getElementById('slashed-eye')
const inputPassword = document.getElementById('password')

eyeIcon.addEventListener('click', function(){
    this.classList.add('hide');
    slashedEyeIcon.classList.remove('hide');
    inputPassword.type = 'password';
})

slashedEyeIcon.addEventListener('click', function(){
    this.classList.add('hide');
    eyeIcon.classList.remove('hide');
    inputPassword.type = 'text';
})


