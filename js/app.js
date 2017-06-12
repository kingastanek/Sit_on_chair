document.addEventListener('DOMContentLoaded', function(){

  console.log("DOM");
  //Rozwijalne menu
  var submenu = document.querySelector('.submenu');
  console.log(submenu);
  var forMouseAction = document.querySelector('nav>ul>li');

  submenu.classList.add('hidden');

  forMouseAction.addEventListener('mouseover', function(){
    submenu.classList.remove('hidden');
  })

  forMouseAction.addEventListener('mouseout', function(){
    submenu.classList.add('hidden');
  })

//Obrazek - efekt hover
var imgBox = document.querySelectorAll('img.box');
console.log(imgBox);
var desc1 = document.querySelector('.descriptionImage1');
var p1 = document.querySelector('.p1');
var desc2 = document.querySelector('.descriptionImage2');
var p2 = document.querySelector('.p2');


  imgBox[0].addEventListener('mouseover', function(){
  desc1.classList.add('hidden');
  p1.classList.add('hidden');
  })

  imgBox[1].addEventListener('mouseover', function(){
    desc2.classList.add('hidden');
    p2.classList.add('hidden');
  })

  imgBox[0].addEventListener('mouseout', function(){
    desc1.classList.remove('hidden');
    p1.classList.remove('hidden');
  })

  imgBox[1].addEventListener('mouseout', function(){
  desc2.classList.remove('hidden');
  p2.classList.remove('hidden');
  })


})
