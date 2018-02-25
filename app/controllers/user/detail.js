import Controller from '@ember/controller';

export default Controller.extend({
  isPictureHide: true,
  actions: {
    togglePicture() {
      this.toggleProperty('isPictureHide');
    }
  }
});
