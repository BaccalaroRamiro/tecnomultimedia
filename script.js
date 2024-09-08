document.querySelector('.ias').addEventListener('click', function() {
    const imgias = document.querySelector('.imgias'); 
    if (imgias.style.display === 'none' || imgias.style.display === '') {
        imgias.style.display = 'flex'; 
    } else {
        imgias.style.display = 'none'; 
    }
});
