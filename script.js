document.addEventListener('DOMContentLoaded', () => {
    const expertiseItems = document.querySelectorAll('.expertise-item');
    const expertiseDetails = document.querySelectorAll('.expertise-detail');

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('data-id');

                // Remove active class from all items and details
                expertiseItems.forEach(item => item.classList.remove('active'));
                expertiseDetails.forEach(detail => detail.classList.remove('active'));

                // Add active class to current item and corresponding detail
                entry.target.classList.add('active');
                const activeDetail = document.getElementById(`detail-${id}`);
                if (activeDetail) {
                    activeDetail.classList.add('active');
                }
            }
        });
    }, observerOptions);

    expertiseItems.forEach(item => {
        observer.observe(item);
    });
});
