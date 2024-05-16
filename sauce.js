window.addEventListener('DOMContentLoaded', () => {
    const sauce = document.querySelector('.sauce');

    function updateSaucePosition() {
        const bottomSauce = sauce.getBoundingClientRect().bottom;
        const bottomViewport = window.innerHeight;
        const bottomPosition = bottomSauce > bottomViewport ? 'relative' : 'absolute';

        sauce.style.position = bottomPosition;
        sauce.style.display = 'block';
    }

    updateSaucePosition();

    window.addEventListener('resize', updateSaucePosition);
});