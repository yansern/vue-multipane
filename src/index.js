import Multipane from './multipane.vue';
import MultipaneResizer from './multipane-resizer.vue';

export { Multipane, MultipaneResizer };

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('multipane', Multipane);
  window.Vue.component('multipane-resizer', MultipaneResizer);
}
