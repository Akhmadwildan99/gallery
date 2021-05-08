// const container = document.querySelector('.container');
// const jumbo = document.querySelector('.jumbo');

// container.addEventListener('click', function(e){
//     if(e.target.className == '.thumb');
//     jumbo.src = e.target.src;
// }); // cara jika nama class sama


const pilihan = document.querySelectorAll('.thumbnail img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanImg = pil.className;
        const jumboPhoto = document.querySelector('.jumbo');

        jumboPhoto.setAttribute('src', 'img/'+pilihanImg+'.jpg');
    })

});  // cara ini digunakan jika nama class berbeda

