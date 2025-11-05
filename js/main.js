document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Replace with the email you want to receive messages at
    const recipientEmail = 'RECIPIENT_EMAIL@example.com';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name')?.value.trim() || '';
        const email = document.getElementById('email-contact')?.value.trim() || '';
        const message = document.getElementById('message')?.value.trim() || '';

        const subject = encodeURIComponent(`Contact from Roomus website: ${name || 'No name'}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        // Open default mail client with prefilled email
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    });
});