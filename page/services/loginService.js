const form = document.querySelector("#inp")

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.querySelector("#username")
    const senha = document.querySelector("#password")
    const error = document.querySelector("#error")
    const cb = document.querySelector("#verifySave")

    if (!nome.value) {
        error.innerHTML = "Preencha os campos corretamente"
        return
    }
    if (!senha.value) {
        error.innerHTML = "Preencha os campos corretamente"
        return
    }

    const data = {
        nome:nome.value,
        senha:senha.value
    }
    try {
        const res = await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })        
        if(res.status == 200) {
            window.location.href = "./home.html"
            if (cb.checked) {
                localStorage.setItem('token', Date.now())
            }
            else {
                sessionStorage.setItem('token', Date.now())
            }
        } else if (res.status == 401) {
            error.innerHTML = "Usuario ou senha incorretos"
        }
        else {
            error.innerHTML = "Erro ao realizar login. Tente novamente"
        }
    } catch (err) {
        alert("Erro no servidor")
        console.error(err)
    }
})  