const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');


container.addEventListener('click', function(e){
    if(e.target.className == '.thumb');
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function(){
        jumbo.classList.remove('fade');
    },500);

    thumbs.forEach(function(thumb) {
        // if(thumb.classList.contains('active')) {
        //     thumb.classList.remove('active');
        // }

        thumb.className = 'thumb';
    });

    e.target.classList.add('active');
}); // cara jika nama class sama


// const pilihan = document.querySelectorAll('.thumbnail img');
// pilihan.forEach(function(pil){
//     pil.addEventListener('click', function(){
//         const pilihanImg = pil.className;
//         const jumboPhoto = document.querySelector('.jumbo');

//         jumboPhoto.setAttribute('src', 'img/'+pilihanImg+'.jpg');
//     })

// });  // cara ini digunakan jika nama class berbeda


// const container = document.querySelector('.container');
// const jumbo = document.querySelector('.jumbo');

// container.addEventListener('click', function(e) {
//     if(e.target.className == '.thumb'){
//         jumbo.src = e.target.src;
//         // jumbo.classList.add('fade');
//     }
    
// });

