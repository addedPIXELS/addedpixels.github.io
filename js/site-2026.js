/* addedPIXELS · 2026 site script
   - reveal-on-scroll (fast, first-paint friendly)
   - hash-on-load smooth offset for sticky header
*/
(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduce && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(es => {
            es.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('is-in');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.01, rootMargin: '0px 0px 200px 0px' });

        document.querySelectorAll('[data-reveal]').forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight + 200) {
                requestAnimationFrame(() => {
                    setTimeout(() => el.classList.add('is-in'), Math.min(i, 4) * 40);
                });
            } else {
                io.observe(el);
            }
        });
    } else {
        document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-in'));
    }

    // smooth scroll for internal anchors (account for sticky header)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (id.length < 2) return;
            const t = document.querySelector(id);
            if (!t) return;
            e.preventDefault();
            const top = t.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
        });
    });
})();
