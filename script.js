// Small progressive enhancement: mark menu links as opened in a new tab where supported.
document.querySelectorAll('a[href^="assets/FINAL-IRD-Menu.pdf"]').forEach((link) => {
  link.addEventListener('click', () => {
    // Native browser navigation handles viewing and downloading; no tracking or data collection.
  });
});
