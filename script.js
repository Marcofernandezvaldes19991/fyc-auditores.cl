const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Formulario sin servidor: abre el cliente de correo con la consulta prellenada.
const enquiry = document.getElementById('inquiry-form');
if (enquiry) enquiry.addEventListener('submit', event => {
  event.preventDefault();
  if (!enquiry.reportValidity()) return;
  const v = key => enquiry.elements.namedItem(key)?.value?.trim() || '';
  const subject = 'Consulta web - ' + (v('servicio') || 'Servicios profesionales');
  const body = ['Nombre: '+v('nombre'),'Empresa: '+v('empresa'),'Correo: '+v('email'),'Teléfono: '+v('telefono'),'Servicio: '+v('servicio'),'Mensaje:',v('mensaje')].join('\\n');
  window.location.href = 'mailto:contacto@fyc-auditores.cl?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
});
