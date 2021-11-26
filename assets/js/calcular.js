
function calcularDatos(){
    //Primero se capturan los datos ingresados por el usuario
    var totalHombres = document.getElementById("totalHombres").value;
    var totalMujeres = document.getElementById("totalMujeres").value;
    var totalAmbos = document.getElementById("totalAmbos").value;

    if(totalHombres == "" || totalMujeres == "" || totalAmbos == ""){
        alert("Por favor ingrese todos los datos.")
        return;
    };
    //Luego calculamos p1 y p2 

    var p1 = totalHombres/totalAmbos;
    var p2 = totalMujeres/totalAmbos;

    //Luego calculamos q1 y q2 
    
    var q1 = 1 - p1;
    var q2 = 1 - p2;

    //Luego calculamos p1*q1/n1
    var p1q1n1 = (p1*q1)/totalHombres;

    //Luego calculamos p2*q2/n2
    var p2q2n2 = (p2*q2)/totalMujeres;

    //Finalmente calculamos la parte inferior y la parte superior de la fórmual
    
    var inferior = (p1-p2) - (1.645*Math.sqrt(p1q1n1 + p2q2n2));

    var superior = (p1-p2) + (1.645*Math.sqrt(p1q1n1 + p2q2n2));

    document.getElementById("inferior").value = inferior;

    document.getElementById("superior").value = superior;

}

function limpiarDatos(){
    document.getElementById("totalHombres").value = "";
    document.getElementById("totalMujeres").value = "";
    document.getElementById("totalAmbos").value = "";
    document.getElementById("inferior").value = "";
    document.getElementById("superior").value = "";
}