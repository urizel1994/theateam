const   save_copy = document.getElementById('save-copy'),
        overlay = document.getElementById('overlay'),
        popup_form = document.getElementById('popup-form');

fadeIn = () => {
    overlay.classList.add('visible');
    popup_form.classList.add('visible');
};

fadeOut = () => {
    popup_form.classList.remove('visible');
    overlay.classList.remove('visible');
};

save_copy.addEventListener('click', fadeIn);

overlay.addEventListener('click', fadeOut);
