document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.register-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for registering for ' + this.parentElement.querySelector('h2').textContent);
        });
    });
});
