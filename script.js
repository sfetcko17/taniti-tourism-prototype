const views=[...document.querySelectorAll('.view')];
function show(id){views.forEach(v=>v.classList.toggle('active',v.id===id));document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('current',b.dataset.view===id));document.querySelector('nav').classList.remove('open');document.querySelector('#menu').setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:'smooth'});}
document.addEventListener('click',e=>{const b=e.target.closest('[data-view]');if(b)show(b.dataset.view);});
document.querySelector('#menu').onclick=e=>{const nav=document.querySelector('nav');nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'));};
document.querySelector('#book').onclick=()=>alert('Prototype: this button would open a selected tour provider’s booking website.');
