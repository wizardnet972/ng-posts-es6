 export default function selectedTagsFilter() {
     function arrayContainsArray(superset, subset) {
         return subset.some(function (value) {
             return (superset.indexOf(value) >= 0);
         });
     }
     return (tasks, tags) => {
         if (!tags || tags.length === 0) return tasks;
         return tasks.reduce((x, y) => y.tags && arrayContainsArray(y.tags, tags) && x.concat(y) || x, []);
     };
 }