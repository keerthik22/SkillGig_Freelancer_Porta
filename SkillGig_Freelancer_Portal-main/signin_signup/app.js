document.getElementById('sign-up-btn').addEventListener('click', () => {
    document.querySelector('.container').classList.add('sign-up-mode');
});

document.getElementById('sign-in-btn').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('sign-up-mode');
});
