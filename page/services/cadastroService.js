const form = document.querySelector("#inp")

form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    try{
        const nome = document.querySelector("#name")
        const email = document.querySelector("#email")
        const senha = document.querySelector("#password")
        const confirmSenha = document.querySelector("#confirm-password")
        const error = document.querySelector("#error")

        if (!nome.value) {
            error.innerHTML = "insira um nome"
            return
        }
        if (!email.value) {
            error.innerHTML = "insira um email"
            return
        }
        if (!senha.value) {
            error.innerHTML = "insira uma senha"
            return
        }
        if (!confirmSenha.value) {
            error.innerHTML = "confirme sua senha"
            return
        }
        if (senha.value != confirmSenha.value) {
            error.innerHTML = "As senhas nao se coincidem"
            return
        }
        if (senha.value.length < 8) {
            error.innerHTML = "A senha deve conter no minimo 8 caracteres"
            return
        }
        const data = {
            email:email.value,
            nome:nome.value,
            senha:senha.value
        }
        const res = await fetch("http://localhost:3000/cadastro", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(res.ok) {
            window.location.href = "./login.html"
        }
    } catch(err) {
        alert("Erro")
        console.error(err)
    }
})