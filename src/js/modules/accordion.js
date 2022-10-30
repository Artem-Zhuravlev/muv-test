const accordionInit = () => {
  const accordion = document.querySelectorAll('.accordion');
  if (accordion === null) return;
  const accordionItem = document.querySelectorAll('.accordion-item');
  const ACTIVE_CLASS = 'active';


  const _accordionToggler = (e) => {
    const target = e.currentTarget;
    const { children } = target.parentNode;
    [...children].forEach((element) => {
      if (element != target) {
        element.classList.remove(ACTIVE_CLASS);
      }
    });
    target.classList.toggle(ACTIVE_CLASS);
  }

  accordionItem.forEach((item) => {
    item.addEventListener('click', _accordionToggler, false);
    item.addEventListener('keypress', _accordionToggler, false);
  });
};


export default accordionInit;
