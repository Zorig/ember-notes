import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  followers: DS.attr('string'),
  following: DS.attr('string'),
  avatar_url: DS.attr('string')
});
