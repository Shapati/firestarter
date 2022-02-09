
const input = document.querySelector('input')
const circle1 = document.querySelector('#circle1')
const circle2 = document.querySelector('#circle2')
const password = document.querySelector('.password')
const pass = document.querySelector('.pass')
const img = document.querySelector('.scroll')
input.addEventListener('keyup', e=>{
e.preventDefault();
if(input.value.includes('@')){
  input.classList.add('jiggle')
  input.classList.add('red')
}else{
  input.classList.remove('jiggle')
  input.classList.remove('red')
}

})



circle2.addEventListener('click', ()=>{

  img.setAttribute('src','./Assets/Page Image.png')
  circle2.classList.add('color')
  circle1.classList.remove('color')

})
circle1.addEventListener('click', ()=>{

  img.setAttribute('src','./Assets/Sign Up Image.png')
  circle1.classList.add('color')
  circle2.classList.remove('color')

})




pass.addEventListener('click', ()=>{

  let value=password.getAttribute('type')
 
  if( value === 'password'){
      password.setAttribute('type','text');
  }else if(value==='text') {
     password.setAttribute('type','password')
  }

})