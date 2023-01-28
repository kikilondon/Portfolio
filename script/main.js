

document.querySelectorAll('.accordion--button').forEach(button =>{
button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('accordion--button--active');

    if(button.classList.contains('accordion--button--active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

    } else {

        accordionContent.style.maxHeight = 0;
    }

});

});


let hearts = document.querySelectorAll('.fa-heart');
console.log('hearts', hearts);

for(let i =0; i< hearts.length; i++){
 hearts[i].dataset.hearts = i;
 hearts[i].addEventListener('click', (e) => {

  let id = e.target.dataset.hearts;

  if(e.target.style.color != "rgb(225, 0, 50)") {
    e.target.style.color = "rgb(225, 0, 50)"
    //console.log("red");
  } else {
    e.target.style.color = "rgb(129 129 129)"
    //console.log("gray");
  }
});
}
       
