const filterText = document.querySelector('.filter-text');
const filterDropdown = document.getElementById('filterDropdown');
const moreTags = document.getElementById('more-tags');
const hiddenTags = document.getElementById('hiddenTags');

filterText.addEventListener('click', function(e) {
    e.preventDefault();
    if (filterDropdown.style.display === 'block') {
        filterDropdown.style.display = 'none';
    } else {
        filterDropdown.style.display = 'block';
    }
});

document.querySelector('.collapse-btn').addEventListener('click', function() {
    filterDropdown.style.display = 'none';
});

function toggleHiddenTags() {
    moreTags.style.display = 'none';
    hiddenTags.classList.add('show');
}