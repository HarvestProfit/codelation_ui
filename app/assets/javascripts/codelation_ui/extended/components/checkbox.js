(function() {
  "use strict";

  App.ui.components.extended.checkbox = Vue.extend({
    template: ' <div class="ui ui-checkbox" :class="[disabled ? \'ui-disabled\' : \'\']">\
                  <input :id="id" :disabled="disabled" name="{{ name }}" type="checkbox" v-model="value">\
                  <span v-on:click="toggle()"></span>\
                </div>\
    ',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        twoWay: true,
        type: Boolean,
        default: false
      },
      confirm: {
        type: String,
        default: null
      },
      id: {
        type: String,
        default: null
      }
    },
    data: function() {
      return {
        changed: false,
        init: true
      }
    },
    ready: function() {
      if (!this.id) {
        this.id = App.ui.interfaces.std.helpers.methods._randomId();
      }
    },
    computed: {
      isDisabled: function() {
        switch (this.disabled) {
          case 'true':
            return true;
          case true:
            return true;
          case 'disabled':
            return true;
          default:
            return false;
        }
      }
    },
    methods: {
      toggle: function() {
        if (this.isDisabled) {
          return;
        }
        if (this.confirm) {
          if (!this.changed) {
            if (confirm(this.confirm)) {
              this.changed = true;
              this.value = !this.value;
            }
          } else {
            this.value = !this.value;
          }
        } else {
          this.value = !this.value;
        }
      }
    }
  });
})();
