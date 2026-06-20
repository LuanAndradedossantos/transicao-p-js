function opera()
{
    /*transformando o texto em numero para efetuar o calculo*/
    let larg = parseFloat(window.document.getElementById("larg").value);
    let alt = parseFloat(window.document.getElementById("alt").value);
    let area = larg * alt;
    let tinta = area / 2;
    /*aqui o innerhtml adiciona um texto com o resultado do calculo que é feito quando a função é disparada atravez do click do butão*/
    window.document.getElementById("result").innerHTML = `Sua parede tem a dimensão de ${larg} x ${alt} e sua area é de ${area}m&sup2;, para pintar essa parede, voce precisará de ${tinta}L de tinta.`

}