function setAlt(){
    //Cogemos el valor del slider para trabajar con el
    var Altsetting = document.getElementById("altitude").value;
    //Cogemos las 3 manecillas
    var Alt10k = document.getElementById("rollWidget10k");
    var Alt1k = document.getElementById("rollWidget1k");
    var Alt100 = document.getElementById("rollWidget100");
    
    //Modulamos la velocidad de giro de las manecillas
    Roll10k = Altsetting * 360 / 100000;
    Roll1k = Altsetting * 360 / 10000;
    Roll100 = Altsetting * 360 / 1000;

    //Aplicamos el giro a las manecillas
    Alt10k.style.transform = "rotate("+ Roll10k +"deg)";
    Alt1k.style.transform = "rotate("+ Roll1k +"deg)";
    Alt100.style.transform = "rotate("+ Roll100 +"deg)";
    
    //Anadimos el valor numerico de la altitud al textbox de abajo
    document.getElementById('altValue').value=Altsetting;

    //Dividimos la altitud en sus digitos
    if (Altsetting==100000) {
        digits = [0, 0, 0, 0, 0];
    }
    else {
        var num = Altsetting;
        var digits = [];
        while (num > 0) {
            digits[digits.length] = num % 10;
            num = parseInt(num / 10);
        }
        if (Altsetting < 10) {
            digits [1] = 0;
            digits [2] = 0;
            digits [3] = 0;
            digits [4] = 0;
        }
        if (Altsetting < 100) {
            digits [2] = 0;
            digits [3] = 0;
            digits [4] = 0;
        }
        if (Altsetting < 1000) {
            digits [3] = 0;
            digits [4] = 0;
        }
        if (Altsetting < 10000) {
            digits [4] = 0;
        }
    }
    
    //Cogemos los diales de la imagen y los actualizamos
    //Cogemos la imagen
    var imgSVG = document.getElementById("altimeter_back");
    // "Abrimos" la imagen
    var svgDoc = imgSVG.contentDocument;
    // Cogemos los digitos individuales
    var N1 = svgDoc.getElementById("tspan2175-4");
    var N2 = svgDoc.getElementById("tspan2175-4-4");
    var N3 = svgDoc.getElementById("tspan2175-4-6");
    var N4 = svgDoc.getElementById("tspan2175-4-8");
    var N5 = svgDoc.getElementById("tspan2175-4-84");
    // Actualizamos los digitos
    N1.textContent = digits [4];
    N2.textContent = digits [3];
    N3.textContent = digits [2];
    N4.textContent = digits [1];
    N5.textContent = digits [0];
}