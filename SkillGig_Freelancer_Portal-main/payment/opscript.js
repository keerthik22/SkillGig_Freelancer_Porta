document.addEventListener('DOMContentLoaded', function() {
    const paymentTypes = document.querySelectorAll('.payment-type .type');

    paymentTypes.forEach(type => {
        type.addEventListener('click', function() {
            // Remove 'selected' class from all payment types
            paymentTypes.forEach(t => t.classList.remove('selected'));

            // Add 'selected' class to the clicked payment type
            this.classList.add('selected');
        });
    });
});
