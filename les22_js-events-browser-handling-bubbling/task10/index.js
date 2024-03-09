// document.addEventListener('DOMContentLoaded', function() {
//     const pages = document.querySelectorAll('.pagination__page');

//     function handleClick(event) {
//         console.log(event.target.dataset.pageNumber);
//     }

//     pages.forEach(function(page) {
//         page.addEventListener('click', handleClick);
//     });
// });

// -----------------------------------------------

const pages = document.querySelectorAll('.pagination__page');

const handleClick = event => {
    console.log(event.target.dataset.pageNumber);
}

pages.forEach(function(page) {
    page.addEventListener('click', handleClick);
});