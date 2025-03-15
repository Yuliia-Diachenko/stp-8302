export const initCookiePolicy = () => {
  const cookiePolicy = document.querySelector('.pop-up');
  const acceptButton = document.querySelector('.pop-up-accept');
  const rejectButton = document.querySelector('.pop-up-reject');
  const COOKIE_CONSENT_KEY = 'cookieConsent';

  const hasCookieConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

  if (!hasCookieConsent) {
    cookiePolicy.classList.add('show');
    document.body.classList.add('popup-active');
  }

  const hidePopup = () => {
    cookiePolicy.classList.remove('show');
    document.body.classList.remove('popup-active');
  };

  acceptButton.addEventListener('click', () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, true);
    hidePopup();
  });

  rejectButton.addEventListener('click', () => {
    hidePopup();
  });
};
