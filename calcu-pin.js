function opera()
{

    let suvinil = window.document.getElementById("marca1");
    let coral = window.document.getElementById("marca2");
    

    /*transformando o texto em numero para efetuar o calculo*/
    let larg = parseFloat(window.document.getElementById("larg").value);
    let alt = parseFloat(window.document.getElementById("alt").value);
    let area = larg * alt;
    let tinta = area / 10;
    let tinta1 = area / 6.666;
    let tintafinal = 0;

/*Para criar uma condição if/else baseada em um input do tipo radio, é preciso marcar o elemento usando a propriedade  '.checked'*/
    if (suvinil.checked) {
        tintafinal = tinta;
    } else {
        tintafinal = tinta1;}
    /*aqui o innerhtml adiciona um texto com o resultado do calculo que é feito quando a função é disparada atravez do click do butão*/
    window.document.getElementById("result").innerHTML = `Sua parede tem a dimensão de ${larg} x ${alt} e sua area é de ${area}m&sup2;, voce precisará de ${tintafinal.toFixed(3)}L de tinta para pintar essa parede com apenas uma demão de tinta se a parede ja estiver pintada ou conter massa corrida,`

}