function cargarCabecera (){
    fetch('/html/menu.html')
    .then(response => response.text())
    .then(dat => {
        document.getElementById('Cabecera-menu').innerHTML=data;
    }).catch(error => console.log('error al cargar el html', error))
}

cargarCabecera();