document.getElementById('form-button').addEventListener('click', sendDataToServer)
export async function sendDataToServer(e) {
    e.preventDefault();
    const title = document.getElementById('InputName').value
    const email = document.getElementById('InputEmail').value
    const mensagem = document.getElementById('Textarea1').value
    

    const data = { 
        title,
        email,
        mensagem
        
    } 

    console.log(data);


    await fetch("https://vidasaudavel.onrender.com/clients", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })   

    location.reload()
}

