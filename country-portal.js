function searchWP(languageCode) {
    document.location = 'https://' + languageCode + '.wikipedia.org/w/index.php?search=' + document.getElementById('searchString').value;
}

window.onload = function() {
    document.getElementById('searchString').focus();
};

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    if (event.key === 'Enter') {
        searchWP('no');
    } else {
        return;
    }

    event.preventDefault();
}, true);