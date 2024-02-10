// wait to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');


    // get the query parameter of ref
    var url = new URL(window.location.href);
    var ref = url.searchParams.get("ref");
    console.log('ref:', ref);
    

    

});