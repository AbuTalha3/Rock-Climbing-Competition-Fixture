// home

import LoadMenu from './Modules/Mobile-Menu.js';
import { LoadGuestsDesktop, LoadGuestsMobile, LoadMore } from './Modules/FeaturedSpeakers.js';

window.addEventListener('load', () => {
  LoadMenu();
  LoadGuestsMobile();
  LoadMore();
  LoadGuestsDesktop();
});
window.addEventListener('resize', () => {
  LoadMenu();
  LoadGuestsDesktop();
});

