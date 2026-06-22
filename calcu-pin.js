function opera()
{

    let suvinil = window.document.getElementById("marca1");
    let coral = window.document.getElementById("marca2");

    let demao1 = document.querySelector('input#demao1');
    let demao2 = document.querySelector('input#demao2');
    let demao3 = document.querySelector('input#demao3');
    let demao4 = document.querySelector('input#demao4');
    let demao5 = document.querySelector('input#demao5');
    

    /*transformando o texto em numero para efetuar o calculo*/
    let larg = parseFloat(window.document.getElementById("larg").value);
    let alt = parseFloat(window.document.getElementById("alt").value);
    let area = larg * alt;
    let tinta = area / 10;
    let tinta1 = area / 6.666;
    /*a variavel a baixo dobra  a quantidade de tinta*/
    let tinta2 = area / 5;
    /*a variavel abaixo foi criada e deixada vazia para receber a variavel tinta ou tinta 1 dependendo da escolha no input radio. ela será usada nas condiçoes if e else*/
    let tintafinal = 0;
    let res = document.querySelector('#result');
    let textodemao = "";

/*Para criar uma condição if/else baseada em um input do tipo radio, é preciso marcar o elemento usando a propriedade  '.checked'*/
    if (suvinil.checked && demao2.checked) {
        tintafinal = tinta2;
        textodemao = "duas(2) demãos de tinta se a parede já estiver pintada ou conter massa corrida";

    } else {
        tintafinal = tinta1;
        textodemao = "apenas uma demão de tinta se a parede já estiver pintada ou conter massa corrida";}
    /*aqui o innerhtml adiciona um texto com o resultado do calculo que é feito quando a função é disparada atravez do click do butão.
    O .toFixed() serve para delimitar a quantidade de numeros que aparecem nos resultados colidos que ficam nas variaveis.
    
    antes de imprimir texto atravez do innerhtml é necessario resgatar a tag atravez do get elementbyid ou selctorquire para poder manipular com inner html*/
    res.innerHTML = `Sua parede tem a dimensão de ${larg} x ${alt} e sua area é de ${area}m&sup2;. ` + `voce   
    precisará de ${tintafinal.toFixed(3)}L de tinta para pintar essa parede com  ${textodemao},`;

}