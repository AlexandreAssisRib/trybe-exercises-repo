window.onload = function () {
    let butao = document.getElementById('enviar')
    console.log(butao)
    butao.addEventListener('click', function(event){
    event.preventDefault()
    })

    let apagar = document.getElementById('apagar');
    apagar.addEventListener('click',function(event){
    event.preventDefault();
    let inputs = document.getElementsByTagName('input')
    for (let index = 0; index < inputs.length; index++) {
       inputs[index].value = ''
        
    }

    })
}
