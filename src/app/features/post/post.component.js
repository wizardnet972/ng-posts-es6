import angular from 'angular';

export const post = () => {
  return {
    template: require('./post.component.html'),
    controller: PostCtrl,
    controllerAs: 'post',
    bindings: {
      details: '<',
      onUpdate: '&',
      onDelete: '&'
    }
  }
};

class PostCtrl {
  edit() {
    this.editMode = true;
  }

  update(postUpdated) {
    this.editMode = false;
    this.onUpdate({
      postUpdated
    });
  }

  cancel() {
    this.editMode = false;
  }
}