document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    if (form) {
        // Replace with the email you want to receive messages at
        const recipientEmail = 'RECIPIENT_EMAIL@example.com';

        form.querySelectorAll('input, textarea').forEach((field) => {
            const hint = field.parentElement.querySelector('.field-hint');
            field.addEventListener('input', () => {
                const invalid = !field.validity.valid;
                field.setAttribute('aria-invalid', String(invalid));
                if (hint) hint.textContent = invalid ? field.validationMessage : '';
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitButton = form.querySelector('button[type="submit"]');
            const formNote = form.querySelector('.form-note');
            if (submitButton) submitButton.disabled = true;
            if (formNote) formNote.textContent = 'Opening your email app…';

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
    }

    const betaForm = document.getElementById('beta-form');
    if (betaForm) {
        const note = document.createElement('span');
        note.className = 'form-note';
        note.textContent = 'Complete the required fields to request beta access.';
        betaForm.append(note);

        betaForm.querySelectorAll('input[required], select[required], textarea[required]').forEach((field) => {
            const hint = document.createElement('span');
            hint.className = 'field-hint';
            hint.textContent = 'Required';
            field.parentElement.append(hint);
        });
    }
});