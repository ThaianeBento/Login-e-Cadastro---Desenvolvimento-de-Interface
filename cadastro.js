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


let passwordErrors = [];
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
  
    const errorDiv = document.createElement('div');
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    passwordInput.parentNode.appendChild(errorDiv);
  
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
       passwordErrors = [];
  
      if(password.length < 8) {
        passwordErrors.push("A senha deve ter pelo menos 8 caracteres.");
      }
      if(!/[a-zA-Z]/.test(password)) {
        passwordErrors.push("A senha deve conter pelo menos uma letra.");
      }
      if(!/\d/.test(password)) {
        passwordErrors.push("A senha deve conter pelo menos um número.");
      }
      if(/^[a-zA-Z0-9]*$/.test(password)) {
        passwordErrors.push("A senha deve conter pelo menos um caractere especial.");
      }
  
      if(passwordErrors.length > 0) {
        errorDiv.innerHTML = passwordErrors.join('<br>');
      } else {
        errorDiv.innerHTML = '';
      }
    });
  });


const monthSelect = document.getElementById('month')
const months = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  
  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1; 
    option.text = month;
    monthSelect.appendChild(option);
  });

  const daySelect = document.getElementById('day')
  for (let day = 1; day <= 31; day++) {
    const option = document.createElement("option");
    option.value = day;
    option.text = day;
    daySelect.appendChild(option);
  }

  const yearSelect = document.getElementById("year");

  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  
  for (let year = currentYear; year >= startYear; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
  }

  let lastSelectedDay = null;

  function updateDays() {
    const daySelect = document.getElementById('day');
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!month || !year) return; 

    const daysInMonth = new Date(year, month, 0).getDate(); 

    if (lastSelectedDay === null) {
        lastSelectedDay = parseInt(daySelect.value) || 1;
      }

    daySelect.innerHTML = '';

    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement("option");
        option.value = day;
        option.text = day;
        daySelect.appendChild(option);
    }

    if (lastSelectedDay <= daysInMonth) {
        daySelect.value = lastSelectedDay;
      } else {
        daySelect.value = daysInMonth;
        lastSelectedDay = daysInMonth;
      }
}


document.getElementById('day').addEventListener('change', function () {
  lastSelectedDay = parseInt(this.value);
});

monthSelect.addEventListener('change', updateDays);
yearSelect.addEventListener('change', updateDays);
  

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  const profileName = document.getElementById('profile-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const month = document.getElementById('month').value;
  const day = document.getElementById('day').value;
  const year = document.getElementById('year').value;
  const robot = document.getElementById('robot').checked;

  let missingFields = [];

if (!profileName) missingFields.push('Nome de perfil');
if (!email) missingFields.push('E-mail');
if (!password) missingFields.push('Senha');
if (!month) missingFields.push('Mês de nascimento');
if (!day) missingFields.push('Dia de nascimento');
if (!year) missingFields.push('Ano de nascimento');
if (!robot) missingFields.push('Confirmação de que você não é um robô');

if (missingFields.length > 0) {
  e.preventDefault();
  alert('Por favor, preencha os seguintes campos obrigatórios:\n\n- ' + missingFields.join('\n- '));
}

if (passwordErrors.length > 0) {
    e.preventDefault();
    alert('A senha não atende aos critérios:\n\n- ' + passwordErrors.join('\n- '));
    document.getElementById('password').focus();
    return;
  }
});