import angular from 'angular';

export const editPost = () => {
    return {
        template: require('./edit-post.component.html'),
        controller: EditPostCtrl,
        controllerAs: 'editor',
        bindings: {
            details: '<',
            texts: '<',
            onUpdate: '&',
            onCancel: '&'
        },
    }
};

class EditPostCtrl {
    constructor(PostsService) {
        this.postsService = PostsService;
    }

    $onInit() {
        this.post = angular.copy(this.details);
        this.texts.save = this.texts.save || 'save';
    };

    update() {
        this.onUpdate({
            postUpdated: this.post
        });
        this.post = null;
    }

    loadTags() {
        return this.postsService.tags;
    }
}