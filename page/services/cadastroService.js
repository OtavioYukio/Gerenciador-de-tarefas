const form = document.querySelector("#inp")

form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    try{
        const nome = document.querySelector("#name")
        const email = document.querySelector("#email")
        const senha = document.querySelector("#password")
        const confirmSenha = document.querySelector("#confirm-password")

        if (!nome) {
            alert("insira um nome")
            return
        }
        if (!email) {
            alert("insira um email")
            return
        }
        if (!senha) {
            alert("insira uma senha")
            return
        }
        if (!confirmSenha) {
            alert("confirme sua senha")
            return
        }
        if (senha.value != confirmSenha.value) {
            alert("As senhas nao se coincidem")
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