//função que verifica se uma data está dentor do range de duas datas
const verificaRangeData = (data, dataInicio, dataFim, tipoComparacao)=>{
    if(tipoComparacao == "and"){
        return (data >= dataInicio && data <= dataFim);
    }else if(tipoComparacao == "or"){
        return (data >= dataInicio || data <=dataFim);
    }
}
// função principal que retorna o nome de um signo de acordo com a data informada
const retornaSigno = (signos, data) =>{
    let ano = data.getFullYear();
    for (const signo of signos){
        
        
        let dataInicioSigno = new Date (ano +"-"+ signo["dataInicio"] + " 00:00:00");
        let dataFimSigno = new Date (ano +"-"+signo["dataFim"] + " 23:59:59");
        let tipoComparacao = signo["dataInicio"] == "12-22" ? "or":"and";

        if (verificaRangeData(data, dataInicioSigno, dataFimSigno, tipoComparacao)){
            return signo ["Nome"];
        }
    }
}

export default retornaSigno;