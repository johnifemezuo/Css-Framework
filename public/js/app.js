
// let nav = document.querySelector('#nav');
let bars = document.querySelectorAll('#bars');
bars.forEach(bar =>{
  
   bar.addEventListener('click', (e)=>{
      let header_right = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('#header_right');
      let nav = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('#nav')
      bar.classList.toggle('change');
     console.log(nav)
      if(nav.className == 'nav_close'){
        nav.classList.add('nav_open');
        header_right.classList.add('header_right_open');
  
      }else {
        nav.classList.remove('nav_open');
        header_right.classList.remove('header_right_open');
  
      }
   
    });
    

  })
