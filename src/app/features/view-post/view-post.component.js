import angular from 'angular';

export const viewPost = () => {
    return {
        template: require('./view-post.component.html'),
        controllerAs: 'post',
        bindings: {
            details: '<',
            onEdit: '&',
            onDelete: '&',
        },
    }
};