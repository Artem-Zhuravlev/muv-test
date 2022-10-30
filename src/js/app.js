import dropdownActiveState from './modules/dropdownActiveState';
import mobileMenuToggler from './modules/mobileMenuToggler';
import accordionInit from './modules/accordion';

document.addEventListener('DOMContentLoaded', () => {
  dropdownActiveState();
  mobileMenuToggler();
  accordionInit();
});
