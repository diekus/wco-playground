if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
        console.log('SW generated succesfully');
    }).catch(function(err) {
        console.log('SW registration failed: ', err)
    });
}