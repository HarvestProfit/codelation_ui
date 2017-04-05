// From: https://www.npmjs.com/package/vue-slider-component
// Converted to support Vue 1.x on Rails asset pipeline

(function() {
  "use strict";

  App.register('component').enter(function() {

    var template = '<div class="vue-info" :style="{\'font-size\': size + \'px\'}">\
                      <i class=\"fa fa-question vue-info-hint\"></i>\
                      <span class="vue-info-message" :class="[direction]">\
                        <slot></slot>\
                      </span>\
                    </div>';

    Vue.component('vue-info', {
      template: template,
      props: {
        'size': {
          default: '12'
        },
        'direction': {
          default: ''
        }
      }
    });

  });
})();