const form = document.getElementById('Form')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const login = document.getElementsByClassName('button')

form.addEventListener('submit', (e) => { // ativar ação de submit do formulário e resetar a login do browser //
    e.preventDefault()

    login()
})

function login() {
    if (email.valeu === '' || senha.valeu === '') {
        window.alert('ERRO!')
    } else (window.alert('Tudo ok!'))

    
}