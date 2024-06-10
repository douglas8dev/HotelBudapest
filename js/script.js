


function inicio() {

    var nome = prompt("Digite o seu nome");
        
    alert('olá ' + nome + ' Bem vindo ao Hotel Budapeste');
    var escolha = parseInt(prompt('Funções do Terabithia Hotel\n1 - Quanto quartos são?\n2 - Como soletra?\n3 - Com "S" ou com"Z"?\n4 - Que horas você pode?\n5 - Álcool ou gasolina?\n6 - Ar puro, finalmente\n 7 - Sair'));

    switch(escolha){
    case 1:
    senha()
    reserva_quartos();
    break;
    case 2:
    senha()
    soletrar();
    break;
    case 3:
    senha();
    SouZ();
    break;
    case 4:
    queHorasVocePode();
    break;
    case 5:
    senha()
    alcoolGasolina();
    break;
    case 6:
    arPuro();
    break;    
    case 7:
    sair();
    break;
    default:
    erro();
    break;
    }


function senha(){
var senha = prompt('digite a senha:') ;

if( senha != '2678'){
alert('A senha está incorreta')
senha()
}else{
alert('A senha está correta, pode fazer a operação')
}
}

function reserva_quartos(){
    var quartos_ocupados = [1,12,17,20]
    var diaria = parseFloat(prompt('digite o valor padrão da diaria'))
    if(diaria<=0){
    alert('Valor invalido')
    inicio()
}

var qnt_dias = parseFloat(prompt('digite a quantidades de dias'))
    if(qnt_dias<=0 || qnt_dias>30){
    alert('Valor invalido')
    inicio()
}

var hospede = prompt('Digite o nome do hospede')

var nmr_quarto = parseInt(prompt('Digite o numero do quarto'))

    while(quartos_ocupados.includes(nmr_quarto)){
    nmr_quarto = parseInt(prompt('Quarto ocupado, Insira outro Valor'))
    }

var confirma_reserva= prompt('Deseja confirma a reserva S/N')

    if(confirma_reserva == "S" || confirma_reserva == "s"){
    alert('Reserva confirmada!')
    }else{
    alert('Reserva não confirmada')
    inicio()
    }
}

    function pegarValor() {
    valor = parseFloat(prompt("informe o valor da diaria: "));
    if (isNaN(valor)) {
        alert("por favor digite um numero");
        pegarValor();
    }
    else if (valor <= 0) {
        alert("valor informado é invalido!");
        pegarValor();
    }
}

    function soletrar(){
       
        var valor = 0, gratuidade = 0, meia = 0, somaPagantes = 0, hospede = "", hospedeContagem = 0, idade = 0;
        
        var hospede = prompt("informe o nome do hospede:(digite PARE para sair da função)");
        if(hospede === "") {
            alert("por favor não deixe o campo vazio");
        soletrar();
        }else if(hospede === "PARE") {
        alert(nome + ", o valor total das hospedagens é de " + somaPagantes + "R$. possuindo " + hospedeContagem
            + " hospedes, onde " + meia + " pagam meia e " + gratuidade + " tem gratuidade");
        }
        var idade = prompt('Qual a idade do hospede?');    
            
            if (idade <= 6){
                alert(hospede + " cadastrada(o) com sucesso. " + hospede + " possui gratuidade");
                gratuidade++; 
            }
            else if (idade >= 60) {
                alert(hospede + " cadastrada(o) com sucesso. " + hospede + " pagará meia");
                meia++;
                somaPagantes += (valor / 2);
            }
            else {
                somaPagantes += valor;
                alert(hospede + " cadastrada(o) com sucesso.");
            }
            
            hospedeContagem++; -soletrar();
    } 

    function SouZ(){
            
            var escolha = prompt("Faça sua escolha"+ "\n1 - cadastrar hospedes" + "\n2 - pesquisar hospede" + "\n3 - sair");

            switch(escolha){
                case "1":
                    cadastrarHospede();
                    break;
                case "2":
                    procurarHospedes();
                    break;
                case "3":
                    inicio();
                    break;
                default:
                    alert("por favor selecione uma das opções");
                    SouZ();
                    break;
            }
        }

    var hospedesSZ = [];
    
    function cadastrarHospede() {
        
        if (hospedesSZ.length < 15) {
        let hospedesSZ = prompt("Qual o nome do Hóspede?");
        alert("Hospede " + hospedesSZ + " foi cadastrada(o) com sucesso!");
        console.log(hospedesSZ);
        SouZ();
    }else {
        alert("o limite de hospedes foi atingido");
        SouZ();
    }
}
                
    function procurarHospedes() {
        hospedePesquisa = prompt("Qual o nome do Hóspede?");
        if (hospedePesquisa.includes(hospedesSZ)) {
        alert(hospedePesquisa + " foi encontrada(o) no sistema");
        SouZ();
    }else {
        alert("hospede não cadastrado no sistema");
        SouZ();
    }
}
    
    function queHorasVocePode() {
        
        convidadosAuditorio();
        diadaSemana(); 
        duracaoEvento();
        calcularGarcom(); 
        alert("agora vamos calcular o buffet");
        calcularBuffet();
        confirmarDados();
    }

    function convidadosAuditorio() {
        
        convidados = parseInt(prompt("adicione a quantidade de convidados"));
        if (isNaN(convidados)) {
            alert("por favor aidicione numeros");
            convidadosAuditorio();
        } else if (convidados <= 0) {
            alert("quantidade de convidados invalida");
            convidadosAuditorio();
        } else if (convidados > 350) {
            alert("quantidade de convidade superior a quantidade permitida")
            convidadosAuditorio();
        } else if (convidados <= 150) {
            auditorio = "laranja";
            alert("use o auditório " + auditorio);
            alert("agora vamos agendar o evento");
        } else if (convidados > 150 && convidados <= 220) {
            cadeiras = convidados - 150;
            auditorio = "laranja";
            alert("use o auditório " + auditorio + ".(adicione " + cadeiras + " cadeiras)");
            alert("agora vamos agendar o evento");
        }
        else {
            auditorio = "colorado";
            alert("use o auditório " + auditorio);
            alert("agora vamos agendar o evento");
        }
    }

    function diadaSemana() {
        
        diaSemana = prompt("em qual dia da semana ocorrera o evento?(não informe o -feira. exemplo: \" terca\")");
        switch (diaSemana) {
            case "segunda": //esse case está desse jeito para que não precise ficar colocando o mesmo código em cada caso
            case "terca":
            case "terça":
            case "quarta":
            case "quinta":
            case "sexta":
                segundaSexta();
                break;
            case "sabado":
            case "sábado":
            case "domingo":
                fimSemana();
                break;
            default:
                alert("dia da semana informado não existe");
                diaSemana()
                break;
        }
    }

    function segundaSexta() {
        limiteEvento = 23;
        horario = parseInt(prompt("informe o horário do evento"))
        if (isNaN(horario)) {
            alert("informe o horario em numeros");
            segundaSexta();
        } else if (horario < 0 || horario > 24) {
            alert("horario inexistente")
            segundaSexta();
        } else if (horario < 7 || horario > 23) {
            alert("não funcionamos nesse horario");
            segundaSexta();
        }
        pegarEmpresa();
        alert("auditório reservado para " + nomeEmpresa + ". " + diaSemana + " às " + horario + "h")
    }
    
    function fimSemana() {
        limiteEvento = 15;
        horario = parseInt(prompt("informe o horário do evento"))
        if (isNaN(horario)) {
            alert("informe o horario em numeros");
            fimSemana();
        } else if (horario < 0 || horario > 24) {
            alert("horario inexistente");
            fimSemana();
        } else if (horario < 7 || horario > 15) {
            alert("não funcionamos nesse horario");
            fimSemana()
        }
        pegarEmpresa();
        alert("auditório reservado para " + nomeEmpresa + ". " + diaSemana + " às " + horario + "h");
    }

    function pegarEmpresa() {
        nomeEmpresa = prompt("qual o nome da empresa?");
        if (nomeEmpresa === "") {
            alert(("o campo não pode estar vazio"));
            pegarEmpresa();
        }
    }
    


    function duracaoEvento() {
        horaEvento = parseInt(prompt("qual será a duração do evento em horas?"));
        limite = horario + horaEvento;
        if (isNaN(horaEvento)) {
            alert("adicione a hora em numero");
            duracaoEvento();
        } else if (horaEvento <= 0) {
            alert("quantidade de horas invalidas");
            duracaoEvento();
        } else if (limite > limiteEvento) {
            alert("não trabalhamos mais que o nosso horário");
            duracaoEvento();
        }
    }

    function calcularGarcom() {
        garcom = Math.ceil(convidados / 12); /* a cada 12 convidados serão necessarios 1 garçom.
        o math.ceil é para sempre arredondar pra cima caso necessario*/
        garcom += Math.ceil(horaEvento / 2);//a cada 2 horas de evento é necessario mais um garçom
        valorGarcom = horaEvento * 10.50 * garcom; // calculo de quanto sera pago pelos serviços dos garçons
        alert("serão necessarios " + garcom + " garçons, o custo será de R$" + valorGarcom);
    }

    function calcularBuffet() {
        cafe = Math.ceil(0.2 * convidados); /* cada convidado recebera 200ml de café , mas como está sendo pedido por L
        é necessario o arredondamento pra cima*/
        agua = Math.ceil(0.5 * convidados);/* cada convidado recebera 500ml de água , mas como está sendo pedido por L
        é necessario o arredondamento pra cima*/
        salgado = Math.ceil(7 * convidados / 100) * 100;/* cada convidado recebera 7 unidades de salgado , mas como está sendo pedido por centro
        é necessario o arredondamento pra cima. exemplo: deu 534 salgados no total, a divisão por 100 formara o numero 5.34
        que dentro do math.ceil se tornará 6 e depois será multiplicado por 100 para formar o cento 600 que será pedido*/
        valorCafe = cafe * 0.8; //cada 1L de café é R$ 0,80
        valorAgua = agua * 0.4; //cada 1l de água é R$ 0,40
        valorsalgado = salgado / 100 * 34; //cada centro é R$ 34
        valorBuffet = valorAgua + valorCafe + valorsalgado; //aqui pega todos os valores que serão gasto com produtos no buffet
        valorTotal = valorGarcom + valorBuffet; //aqui fala o valor geral que será gasto com o evento
        alert("o evento precisará de " + cafe + "L de café, " + agua + "L de água e " + salgado + " unidades de salgados");
    }

    function confirmarDados() {
       
     confirmar = prompt("DADOS PARA FINALIZAR RESERVA\n Evento no Auditório: " + auditorio + "\nNome da Empresa: "
            + nomeEmpresa + "\nData: " + diaSemana + ", " + horario + "h às " + limite + "\nDuração do Evento: " + horaEvento
            + "h\nQuantidade de Garçons: " + garcom + "\nQuantidade de Convidados: " + convidados + "\n\n Custo dos garçons: R$ "
            + valorGarcom + "\nCusto do buffet: R$ " + valorBuffet + "\n\nValor total do Evento: R$" + valorTotal
            + "\n\nDeseja confirmar a reserva? S/N");
        if(confirmar === "S" || "s") {
            alert("reserva efetuada com sucesso");
            inicio();
        }else {
            convidados = 0, cadeiras = 0, diaSemana = "", horario = 0, nomeEmpresa = "", garcom = 0;
            limiteEvento = 0, horaEvento = 0, valorGarcom = 0, cafe = 0, agua = 0; salgado = 0;
            valorCafe = 0, valorAgua = 0, valorsalgado = 0, valorBuffet = 0, limite = 0, confirmar, auditorio = "";
            alert("reserva cancelada!");
            inicio();
        }
    }

    function alcoolGasolina() {
        postoWayneAlcool(); 
        postoWayneGasolina();
        postoStarkAlcool(); 
        postoStarkGasolina();
        checarBarato(); 
    }

    function postoWayneAlcool() {
        postoWayneAlcool = parseFloat(prompt("adicione o valor do álcool no posto Wayne Oil"));
        if (isNaN(postoWayneAlcool)) {
            alert("porfavor informe em numero");
            postoWayneAlcool();
        } else if (postoWayneAlcool <= 0) {
            alert("valor informado não poder igual ou menor a 0");
            postoWayneAlcool();
        }
    }

    function postoWayneGasolina() {
        postoWayneGasolina = parseFloat(prompt("adicione o valor da gasolina no posto Wayne Oil"));
        if (isNaN(postoWayneGasolina)) {
            alert("porfavor informe em numero");
            postoWayneGasolina();
        } else if (postoWayneGasolina <= 0) {
            alert("valor informado não poder igual ou menor a 0");
            postoWayneGasolina();
        }
    }
    
    function postoStarkAlcool() {
        postoStarkAlcool = parseFloat(prompt("adicione o valor do álcool no posto Stark Petrol"));
        if (isNaN(postoStarkAlcool)) {
            alert("porfavor informe em numero");
           postoStarkAlcool();
        } else if (postoStarkAlcool <= 0) {
            alert("valor informado não poder igual ou menor a 0");
           postoStarkAlcool();
        }
    }
    
    function postoStarkGasolina() {
        postoStarkGasolina = parseFloat(prompt("adicione o valor do gasolina no posto Stark Petrol"));
        if (isNaN(postoStarkGasolina)) {
            alert("porfavor informe em numero");
            postoStarkGasolina();
        } else if (postoStarkGasolina <= 0) {
            alert("valor informado não poder igual ou menor a 0");
            postoStarkGasolina();
        }
    }

    function checarBarato() {
        if (postoWayneGasolina <= postoStarkGasolina) {  
            diferenca = postoWayneGasolina - (postoWayneGasolina * 0.3);
            if (postoWayneAlcool < diferenca) {
                alert("é mais barato abastecer com álcool no posto Wayne Oil");
            } else {
                alert(", é mais barato abastecer com gasolina no posto Wayne Oil");
            }
        } else {
            diferenca = postoStarkGasolina - (postoStarkGasolina * 0.3);
            if (postoStarkAlcool < diferenca) {
                alert(nome + ", é mais barato abastecer com álcool no posto Stark Petrol");
            } else {
                alert(nome + ", é mais barato abastecer com gasolina no posto Stark Petrol");
            }
        }
        confirmar = confirm("deseja calcular novamente?");
        if (confirmar) {
            alcoolGasolina();
        } else {
            postoWayneAlcool = 0, postoWayneGasolina = 0, postoStarkGasolina = 0, postoStarkAlcool = 0, diferenca = 0;
            funcoes();
        }
    }

    function arPuro() {
        nomeEmpresas(); 
        valorAr(); 
        quantidadeAparelho(); 
        desconta(); 
        qtdMinima(); 
        calcularValor();
        confirmar = confirm("deseja checar novas empresas?");
        if(confirmar){
            arPuro();
        }else{
            empresas = "", empresa = "", valor = 0, valorFinal = 0, quantidade = 0, quantidadeMinima = 0;
            desconto = 0, confirmar, barato = Infinity;
            alert("o orçamento mais barato é o da " + empresa + " que saiu por R$ " + barato);
            funcoes();
        }  
    }

    function nomeEmpresas() {
        empresas = prompt("adicione o nome da empresa");
        if (empresas === "") {
            alert("não deixe o espaço em branco");
            nomeEmpresas();
        }
    }

    function valorAr() {
        valor = parseFloat(prompt("qual o valor por aparelhos?"));
        if (isNaN(valor)){
            alert("por favor informe numeros");
            valorAr();
        }else if (valor <= 0){
            alert("o valor não pode ser 0 ou abaixo dele");
            valorAr();
        }
    }

    function quantidadeAparelho(){
        quantidade = parseInt(prompt("qual a quantidade de aparelhos?"));
        if (isNaN(quantidade)){
            alert("por favor informe numeros");
            quantidadeAparelho();
        }else if (quantidade <= 0){
            alert("a quantidade não pode ser 0 ou abaixo dele");
            quantidadeAparelho();
        }
    }

    function desconta(){
        desconto = parseInt(prompt("qual a porcentagem de desconto?"));
            if (isNaN(desconto)){
                alert("por favor informe numeros");
                desconta()
            }else if (desconto < 0){
                alert("o desconto não pode ser abaixo de 0");
                desconta();
            }else if (desconto > 100){
                alert("o desconto não pode ser maior do que 100%");
                desconta();
            }
    }

    function qtdMinima(){
        quantidadeMinima = parseInt(prompt("qual a quantidade minima de aparelhos para o desconto?"));
            if (isNaN(quantidadeMinima)){
                alert("por favor informe numeros");
                qtdMinima();
            }else if (quantidadeMinima < 0){
                alert("a quantidade miníma exigida não pode ser negativa");
                qtdMinima();
            }
    }

    function calcularValor(){
        if (quantidade >= quantidadeMinima) //aqui checa se está apto para ganhar o desconto
            valorFinal = valor * quantidade - desconto / 100 * valor * quantidade; //aqui calcula o valor com o desconto aplicado
        else
            valorFinal = quantidade * valor; // aqui calcula sem desconto
        alert("O serviço da " + empresas + " custará R$ " + valorFinal);
        if (barato > valorFinal) { //aqui checa para armazena a empresa com o serviço mais barato
            barato = valorFinal;
            empresa = empresas;
        }
    }




    function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

    function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
    alert(nome + ' foi um prazer ter você por aqui!')
    window.close();
    } else {
    inicio();
}
} 
}