document.querySelector('.ias').addEventListener('click', function() {
    const imgias = document.querySelector('.imgias'); 
    const fantasma = document.querySelector('.fantasma'); 

    if (imgias.style.display === 'none' || imgias.style.display === '') {
        imgias.style.display = 'grid'; 
        imgias.style.gridTemplateColumns = '1fr 1fr 1fr'; 
        imgias.style.gridTemplateRows = '1fr 1fr 1fr'; 
        fantasma.style.display= 'none';
        fantasma.style.height= '0 vh';

    } else {
    }
});

document.querySelector('.botonproblemas').addEventListener('click', function() {
    const problemas = document.querySelector('.problemas'); 
    const fantasma = document.querySelector('.fantasma'); 

    if (problemas.style.display === 'none' || problemas.style.display === '') {
        problemas.style.display = 'grid'; 
         problemas.style.gridTemplateColumns = '1fr 1fr 1fr'; 
         problemas.style.gridTemplateRows = '1fr 1fr 1fr'; 
        fantasma.style.display= 'none';
        fantasma.style.height= '0 vh';

    } else {
        
    }
});

document.querySelector('.generar').addEventListener('click', function() {
    document.querySelector('.portada').style.display = 'none';
    document.querySelector('.pantalla2').style.display = 'block'; 
});

document.querySelector('.resultado-volver').addEventListener('click', function() {
    document.querySelector('.pantalla2').style.display = 'none';
    document.querySelector('.pantalla3n1').style.display = 'block'; 
});

 document.querySelector('.resultado-container').addEventListener('click', function() {
     document.querySelector('.pantalla3n1').style.display = 'none';
     document.querySelector('.pantalla4n1').style.display = 'block'; 
    });

    document.querySelector('.volver').addEventListener('click', function() {
        document.querySelector('.pantalla4n1').style.display = 'none';
        document.querySelector('.pantalla3n2').style.display = 'block'; 
       });

       document.querySelector('.iluminado2').addEventListener('click', function() {
        document.querySelector('.pantalla3n2').style.display = 'none';
        document.querySelector('.pantalla5n2').style.display = 'block'; 
       });
