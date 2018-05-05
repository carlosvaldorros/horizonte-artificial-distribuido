function setAlt(Altsetting){
    //Cogemos el valor del slider para trabajar con el
    //var Altsetting = document.getElementById("altitude").value;

    Altsetting20 = Math.round(Altsetting/20)*20;

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
    if (Altsetting==100000 || Altsetting==-10000) {
        digits = [0, 0, 0, 0, 0];
    }
    else {
        var num = Math.abs(Altsetting20);
        var digits = [];
        while (num > 0) {
            digits[digits.length] = num % 10;
            num = parseInt(num / 10);
        }
        if (Altsetting < 10 && Altsetting > -10) {
            digits [1] = 0;
        }
        if (Altsetting < 100 && Altsetting > -100) {
            digits [2] = 0;
        }
        if (Altsetting < 1000 && Altsetting > -1000) {
            digits [3] = 0;
        }
        if (Altsetting < 10000 && Altsetting > -10000) {
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

    //Cogemos el fondo para cambiarle el color en caso de altitud negativa
    // Cogemos el fondo
    //var back = svgDoc.getElementById("path3731");
    var N1neg = svgDoc.getElementById("rect949");
    // Cambiamos su color
    if (Altsetting < 0){
    //    back.style.fill = "#C01010";
        N1neg.style.opacity = 1;
    }
    if (Altsetting > 0){
    //    back.style.fill = "#101010";
        N1neg.style.opacity = 0;
    }

    //Cogemos las manecillas para cambiarles el color en caso de altitud negativa
    //Cogemos las imagenes
    //var H10ksvg = document.getElementById("rollWidget10k");
    //var H1ksvg = document.getElementById("rollWidget1k");
    //var H100svg = document.getElementById("rollWidget100");
    // "Abrimos" las imagenes
    //var H10kDoc = H10ksvg.contentDocument;
    //var H1kDoc = H1ksvg.contentDocument;
    //var H100Doc = H100svg.contentDocument;
    // Cogemos las manecillas
    //var H10k = H10kDoc.getElementById("path816");
    //var H1k = H1kDoc.getElementById("path816");
    //var H100 = H100Doc.getElementById("path818");
    // Cambiamos su color
    //if (Altsetting < 0){ 
    //    H10k.style.fill = "#FF0000";
    //    H1k.style.fill = "#FF0000";
    //    H100.style.fill = "#FF0000";
    //    N1.style.fill = "#FF0000";
        //N1.textContent = "□";
        //N1.style.fontSize = "27px";
    //    N2.style.fill = "#FF0000";
    //    N3.style.fill = "#FF0000";
    //    N4.style.fill = "#FF0000";
    //    N5.style.fill = "#FF0000";
    //}
    //if (Altsetting > 0){
    //    H10k.style.fill = "#FFFFFF";
    //    H1k.style.fill = "#FFFFFF";
    //    H100.style.fill = "#FFFFFF";
    //    N1.style.fill = "#FFFFFF";
    //    N2.style.fill = "#FFFFFF";
    //    N3.style.fill = "#FFFFFF";
    //    N4.style.fill = "#FFFFFF";
    //    N5.style.fill = "#FFFFFF";
    //}

}