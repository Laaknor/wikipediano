function searchWP(languageCode) {
    document.location = 'https://' + languageCode + '.wikipedia.org/w/index.php?search=' + document.getElementById('searchString').value;
}

window.onload = function() {
    document.getElementById('searchString').focus();
};
