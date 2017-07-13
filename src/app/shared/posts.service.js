import _ from 'lodash';

export default class PostsService {

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    load() {
        return this.$http.get('posts.json').then(res => {
            this.addTags(_.chain(res.data).map('tags').flatMap().uniq().value());
            return res.data || [];
        });
    }

    addTags(tags) {
        this.tags = this.$q.resolve(tags);
    }
}