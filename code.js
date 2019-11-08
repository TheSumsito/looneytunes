function hora(){
    var horaActual = new Date();
    var hours = horaActual.getHours();
    var min = horaActual.getMinutes();
    var seg = horaActual.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    } else if (min < 10) {
        min = "0" + min;
    } else if (seg < 10) {
        seg = "0" + seg;
    } else {
        hora = "0";
    }


    var fechaActual = new Date();
    var dia = fechaActual.getDay();
    var mes = fechaActual.getMonth();
    var anio = fechaActual.getFullYear();

    if(dia < 10) {
        dia = "0" + dia;
    } else if(mes < 10) {
        mes = "0" + mes;
    } else {
        fecha = 0;
    }


    var hora = hours + " : " + min + " : " + seg;
    var fecha = dia + " / " + mes + " / " + anio;
    var recargar = setTimeout("hora()", 1000);
    
    document.getElementById("hora").innerHTML = hora;
    document.getElementById("fecha").innerHTML = fecha;
}