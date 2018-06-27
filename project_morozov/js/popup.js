const   save_copy = document.getElementById('save-copy'),
        add_to_collect = document.getElementById('add-collect'),
        overlay = document.getElementById('overlay'),
        popup_copy = document.getElementById('popup-copy'),
        popup_add = document.getElementById('popup-add');

let fadeIn = (element) => {
    overlay.classList.add('visible');
    element.classList.add('visible');
};

let fadeOut = (element) => {
    element.classList.remove('visible');
    overlay.classList.remove('visible');
};

save_copy.addEventListener('click', fadeIn.bind(null, popup_copy));
add_to_collect.addEventListener('click', fadeIn.bind(null, popup_add));
overlay.addEventListener('click', fadeOut.bind(null, popup_copy));
overlay.addEventListener('click', fadeOut.bind(null, popup_add));