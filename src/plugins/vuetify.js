import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const ICONS = {
  arrowRight: 'fas fa-star'
}

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#673faf',
        secondary: '#a53fb9',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'fa' || 'md',
  },
  values: ICONS
});