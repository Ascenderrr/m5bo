(() => {
    document.documentElement.classList.add('js');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revealItems = document.querySelectorAll('[data-reveal]');

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
        const observer = new IntersectionObserver((entries, revealObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0 });

        revealItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.classList.add('is-visible');
            }
            observer.observe(item);
        });
    }

    const header = document.querySelector('header');
    if (header) {
        const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({
                behavior: reduceMotion.matches ? 'auto' : 'smooth',
                block: 'start'
            });
            history.pushState(null, '', link.getAttribute('href'));
        });
    });

    document.querySelectorAll('#year').forEach((year) => {
        year.textContent = String(new Date().getFullYear());
    });
})();