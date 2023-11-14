//Buscar elementos
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const clientes = document.querySelector('#users');

//Método para receber o envio do formulário
myForm.addEventListener('submit', cadCliente);

//função para registrar o cadastro
function cadCliente(e) {
    e.preventDefault();

    if(nameInput.value === ''|| emailInput.value === '' || horario.value === '') {
        const msgError = document. createElement('p');
        msgError.classList.add('error')
        msgError.innerHTML = 'Por favor, preencha os campos!'
        MediaSession.appendChild(msgError);

        setTimeout( () => msg.remove (), 5000);
    } else {
        //Criar elemento <li>
    const li = document.createElement('li');
    //Inserindo conteudo no elemento li
    li.appendChild(
    document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${horario.value}`)
    );
    //associar li a lista de clientes
    clientes.appendChild(li);

    //Apagar Infomações do formulário
    nameInput.value = '';
    emailInput.value = '';
    horario.getElementsByTagName('option')[0].selected = 'selected'; 
    nameInput.focus();
    }
    
}