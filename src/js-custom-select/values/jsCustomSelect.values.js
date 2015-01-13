(function () {
  angular.module('jsCustomSelect.values', [])
    .value('jsCustomSelect.defaults', {
        displayText: 'Select...',
        emptyListText: 'There are no items to display',
        emptySearchResultText: 'No results match "$0"',
        addText: 'Add',
        searchDelay: 1000
    });
})();
