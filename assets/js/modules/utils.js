export const updateFooterYear = () => {
    const footerYear = document.querySelector('.footer p');
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Sébastien LEMOINE. Tous droits réservés.`;
};

export const getSlugFromUrl = () => {
    return window.location.search.split('=')[1];
}; 