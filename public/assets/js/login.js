const loginForm = document.querySelector("#loginForm")


loginForm.addEventListener('submit', async (e) => {
    try{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

         const {data} = await axios.post('/api/v1/agentes/login', {email, password})
        localStorage.setItem('token', data.token)
        localStorage.setItem('email', data.email)
        alert('Agente verificado... redirigiendo al sitio') 
        window.location.href="/htmlcorreo"

    }catch(error){
        console.log(error)
        alert(error.response.data.msg)
    }
})