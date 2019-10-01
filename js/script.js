const containerLista = document.getElementById('container__lista')
const formulario = document.getElementById('formulario')
const listaTarefas = document.getElementById('lista__tarefas')
const erro = document.getElementById('msg__erro')
const botoes = document.getElementById('botoes')
const botaoRemover = document.createElement('button')
const botaoFeitos = document.createElement('button')
botoes.appendChild(botaoFeitos)
botoes.appendChild(botaoRemover)

botaoFeitos.classList.add('botao__feitos')
botaoRemover.classList.add('botao__remover')

botaoFeitos.textContent= 'Marcar todos como lidos'
botaoRemover.textContent= 'Remover todos itens' 

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()   
          
    const inputUsuario= document.getElementById('input__usuario')
    const itemLista = inputUsuario.value
                   
    if(itemLista.trim()===''){
        erro.classList.add('erro')
        erro.textContent= 'Digite uma tarefa, irmã'
    } else {
        erro.classList.remove('erro')
        erro.textContent=''
        const lista = document.createElement('li')
        listaTarefas.appendChild(lista)
        lista.classList.add('linha') 
        lista.textContent= itemLista
        const botaoX = document.createElement('button')
        lista.appendChild(botaoX)
        botaoX.textContent= 'x'
        botaoX.classList.add('botao__x')
        botaoX.addEventListener('click', function(){
        listaTarefas.removeChild(lista)       
        })   

        lista.addEventListener('click', function(){
            if(lista.classList.contains('check__tarefa')){
                lista.classList.remove('check__tarefa')
            } else{
                lista.classList.add('check__tarefa')
            }        
        })
        botaoFeitos.addEventListener('click', function(){
            if(listaTarefas.classList.contains('check__tarefa')){
                listaTarefas.classList.remove("check__tarefa") 
                botaoFeitos.textContent= 'Marcar todos como lidos'
            }else{
                listaTarefas.classList.add("check__tarefa")
                botaoFeitos.textContent="Desfazer"
            }    
        })
        
        botaoRemover.addEventListener('click', function(){
           lista.remove()   
                
        })
        
    }

    formulario.reset()     
   
})

   


   
