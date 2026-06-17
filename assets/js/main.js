
const menuBtn = document.querySelector('[data-menu]');
const panel = document.querySelector('[data-panel]');
if(menuBtn && panel){menuBtn.addEventListener('click',()=>panel.classList.toggle('open'));}
const forms = document.querySelectorAll('[data-mail-form]');
forms.forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'Website visitor';
    const email = data.get('email') || '';
    const subject = data.get('subject') || 'Velora sourcing inquiry';
    const message = data.get('message') || '';
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:info@velorasourcing.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
});
