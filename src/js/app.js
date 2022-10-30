import dropdownActiveState from './modules/dropdownActiveState';
import mobileMenuToggler from './modules/mobileMenuToggler';
import tabs from './modules/tabs';

document.addEventListener('DOMContentLoaded', () => {
  dropdownActiveState();
  mobileMenuToggler();
  tabs();
});
