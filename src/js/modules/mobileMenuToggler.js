const mobileMenuToggler = () => {
  const header = document.querySelector('.header');
  if (header === null) return;
  const btn = document.querySelector('.header-burger');
  const ACTIVE_CLASS = 'header-active';

  btn.addEventListener('click', () => {
    header.classList.toggle(ACTIVE_CLASS);
  });
};

export default mobileMenuToggler;
