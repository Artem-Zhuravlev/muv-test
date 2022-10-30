const dropdownActiveState = () => {
  const dropDrown = document.querySelectorAll('.header .dropdown');
  if (dropDrown === null) return;
  const ACTIVE_CLASS = 'active';
  
  dropDrown.forEach((item) => {
    if (item.parentNode.classList.contains(ACTIVE_CLASS)) {
      item.setAttribute('open', true);
    }
  });
};

export default dropdownActiveState;
