
// IIFE
(() => {
    console.log(window.location.href);
    var searchParams = new URLSearchParams(window.location.href.split('?')[1]);
    
    import('./' + searchParams.get('id') + '.js').then(module => {
        module.loadStory();
    });
})();