document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('workshopForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const workshop = document.getElementById('workshop').value;
        const comments = document.getElementById('comments').value;

        alert(`Thank you for registering, ${name}!`);
        
        console.log({
            name: name,
            email: email,
            phone: phone,
            workshop: workshop,
            comments: comments
        });

        // Reset the form
        form.reset();
    });
});
