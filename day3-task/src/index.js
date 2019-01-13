var accordion = document.querySelector('.accordion');
// console.warn(accordion);

accordion.addEventListener('click', function(){
    accordion.classList.toggle('is-open');
});


var accordion = document.querySelectorAll('.accordion');

for (var i=0; i<accordion.clientHeight; i++){
    accordion[i].addEventListener('click', function(e){

        for (var n = 0; n<accordion.length; n++){
            if (e.curentTarget !=accordion[n]){
                accordion[n].classList.remove('is-open');
            }
        }

        this.classList.toggle('is-open');
    });
}


