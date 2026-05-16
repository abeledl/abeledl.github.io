document.addEventListener('DOMContentLoaded', function () {
  const now = new Date();
  const footer = document.querySelector('.footer');
  if (footer) {
    const meta = document.createElement('p');
    meta.textContent = `Offline-ready website generated on ${now.toLocaleDateString()}.`;
    footer.appendChild(meta);
  }
});
