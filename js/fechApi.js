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


    await fetch(`https://vidasaudavel.onrender.com/clients/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => { 
        if(!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`)
        }
        return response.json()
    }).then((responseData) => {
        console.log('Dados enviados com sucesso: ' + responseData);
     }).catch((error) => { 
        console.error('Erro ao enviar os dados: ', error)
     })
     

   
}

