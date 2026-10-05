let endereco = [];

function buscarEndereco(cep){
    if(validaCep(cep)){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => { return response.json()})
        .then((json) => {
            if(json.erro){
                alert("CEP invalido");
                return;
            }
            endereco = json;
            console.log(json);
            let logradouro = document.querySelector("#logradouro");
            let bairro = document.querySelector("#bairro");
            let localidade = document.querySelector("#localidade");
            let estado = document.querySelector("#estado");

            logradouro.value = json.logradouro;
            bairro.value = json.bairro;
            localidade.value = json.localidade;
            estado.value = json.estado;
            
            //carregarProdutos(produtos);
    
        })
        .catch(error => alert("CEP inválido"));
    }
  
}

function validaCep(cep){
    let regex = /^\d{8}/;
    return regex.test(cep);
}
//buscarEndereco("60115270")