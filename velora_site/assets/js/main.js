
const header=document.querySelector('[data-header]');
const nav=document.querySelector('[data-nav]');
const toggle=document.querySelector('[data-nav-toggle]');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')})}
window.addEventListener('scroll',()=>{header&&header.classList.toggle('scrolled',window.scrollY>24);document.querySelector('[data-back-top]')?.classList.toggle('show',window.scrollY>600)});
document.querySelector('[data-back-top]')?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-contact-form]').forEach(form=>{form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent('Velora sourcing inquiry from '+(data.get('company')||data.get('name')||'website'));const body=encodeURIComponent([...data.entries()].map(([k,v])=>`${k}: ${v}`).join('\n'));const note=form.querySelector('[data-form-note]');if(note) note.textContent='Opening your email app with this inquiry. If it does not open, email info@velorasourcing.com directly.';window.location.href=`mailto:info@velorasourcing.com?subject=${subject}&body=${body}`})});
