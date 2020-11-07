class Cliente{
    constructor(){
        this.clientes = localStorage.getItem('tbClientes') === null
        ?[]
        : JSON.parse(localStorage.getItem('tbClientes'))
    }
    salva(cliente){
        if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
            this.apaga(cliente.codigo)
        }
        this.clientes.push(cliente) // adiciona um novo elemento ao array
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        alert('Cliente salvo com sucesso!')
    }
    apaga (codigo){
        let index =this.clientes.findIndex(cliente=>cliente.codigo==codigo)
        this.clientes.splice(index,1)
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        cliente.atualiza()
    }
    edita(cliente){
        
        document.getElementById('codigo').value =cliente.codigo
         document.getElementById('nome').value,
        document.getElementById('cep').value,
        document.getElementById('endereco').value,
       document.getElementById('bairro').value,
       document.getElementById('cidade').value,
    document.getElementById('observacoes').value
    }
    lista(){
        const listagem =this.clientes.map((cliente)=>(

        
        `<tr>
            <td>${cliente.codigo}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.cep}</td>
            <td>${cliente.endereco}</td>
            <td>${cliente.bairro}</td>
            <td>${cliente.cidade}</td>
            <td>${cliente.observacoes}</td>
            <td>
            <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>
            🗑️Apagar</button>
            <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
                ✏️Editar</button>
            </td>
            </td>
        </tr>
    `
    )) 
    return (`<table border ='1' class=paleBlueRows>')
    <caption>Relação dos Clientes </caption>
    <thead>
    <th>Código</th>
    <th>Bairro</th>
    <th>Nome</th>
    <th>Cidade</th>
    <th>Cep</th>
    <th>Endereço</th>
    <th>Opções</th>
    </thead>
    <tbody>${listagem}</tbody>
    </table>
    `)
        
    }
    atualiza(){
        document.getElementById('listagem').innerHTML=cliente.lista()
    }
   
}


const cliente = new Cliente()
document.getElementById('salvar').onclick =function(){
   const registro = {
       codigo : document.getElementById('codigo').value,
       nome : document.getElementById('nome').value,
       cep: document.getElementById('cep').value,
       endereco: document.getElementById('endereco').value,
       bairro:document.getElementById('bairro').value,
       cidade:document.getElementById('cidade').value,
       observacoes:document.getElementById('observacoes').value

   }
   
   cliente.salva(registro)
}
window.onload =function(){
    cliente.atualiza()

}



