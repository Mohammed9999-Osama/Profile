let ul = document.querySelector('header .header ul');
let ul_angloar = document.querySelectorAll('header .header ul a');
let naveList = document.querySelector('header .header .nave-list');
let Span_naveList = document.querySelector('header .header .nave-list span');
naveList.addEventListener('click', function () {
  ul.classList.toggle('active');
  if (ul.classList=='active') {
    Span_naveList.classList.add('active');
  }
  else {
    Span_naveList.classList.remove('active');
  }
})
for (let i = 0; i < ul_angloar.length; i++) {
  ul_angloar[i].addEventListener('click', function () {
    ul.classList.remove('active');
    Span_naveList.classList.remove('active');
  })
  
}
document.addEventListener('scroll', function () {
  let scroll_y = window.scrollY;
  if (scroll_y>250) {
    document.querySelector('header').style.backgroundColor = '#000';
  }
  else {
    document.querySelector('header').style.backgroundColor = 'transparent';
  }
})
document.addEventListener('scroll', function () {
  let scroll_y = window.scrollY;
  if (scroll_y > 350) {
    document.querySelector('nav').classList.add('active');
    document.querySelector('nav ul').style.visibility='inherit';
  }
  else {
    document.querySelector('nav').classList.remove('active');
    // document.querySelector('nav ul').style.visibility='inherit';
    document.querySelector('nav ul').style.visibility='hidden';
    // document.querySelector('nav ul').classList.remove('active');
  }
})

document.querySelector('nav div img').addEventListener('click', function () {
  document.querySelector('nav ul').classList.toggle('active')
})