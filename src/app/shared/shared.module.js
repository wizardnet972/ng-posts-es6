import angular from 'angular';
import postsService from './posts.service';
import selectedTags from './selected-tags.pipe';

const MODULE_NAME = 'shared';

angular.module(MODULE_NAME, [])
  .service('PostsService', postsService)
  .filter('selectedTags', selectedTags)

export default MODULE_NAME;