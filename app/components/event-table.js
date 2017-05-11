import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        this.$('.ui.dropdown').dropdown();
    }
});
