import angular from 'angular';
import _ from 'lodash';
import 'angular-sanitize';
import 'ng-tags-input';
import 'trix';

import { post } from './features/post/post.component.js';
import { editPost } from './features/edit-post/edit-post.component.js';
import { viewPost } from './features/view-post/view-post.component.js';
import sharedModule from './shared/shared.module';
import angularTrix from './shared/angular-trix.directive';

import '../style/app.scss';

let app = () => {
  return {
    template: require('./app.html'),
    controller: AppCtrl,
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor(PostsService) {
    this.postsService = PostsService;

    this.postsService.load().then(posts => this.posts = posts);
  }

  update(postUpdated) {
    var postInArray = this.posts.find(p => p.id === postUpdated.id);
    _.assign(postInArray, postUpdated);
  }

  delete(postId) {
    var i = this.posts.findIndex(p => p.id === postId);
    (i > -1) && this.posts.splice(i, 1);
  }

  add(postUpdated) {
    postUpdated.id = postUpdated.id || Math.random().toString(36).substr(2, 9);
    this.posts.push(postUpdated);
  }

  loadTags(query) {
    return this.postsService.tags;
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngSanitize', 'ngTagsInput', angularTrix, sharedModule])
  .component('app', app())
  .component('editPost', editPost())
  .component('viewPost', viewPost())
  .component('post', post())

export default MODULE_NAME;