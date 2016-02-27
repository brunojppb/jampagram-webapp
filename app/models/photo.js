import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  imageUrl: DS.attr('string'),
  fullImagePath: Ember.computed('imageUrl', {
    get() {
      return 'http://localhost:3000' + this.get('imageUrl');
    }
  })
});
