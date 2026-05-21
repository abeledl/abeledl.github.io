document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.getElementById('app-gallery');
  if (gallery) {
    fetch('apps.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load app data');
        }
        return response.json();
      })
      .then((apps) => {
        gallery.innerHTML = '';
        apps.forEach((app) => {
          const card = document.createElement('article');
          card.className = 'feature-card app-card';
          card.innerHTML = `
            <div class="app-icon-frame">
              <img class="app-card-logo" src="${app.logo}" alt="${app.name} logo" />
            </div>
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            <div class="app-card-action">
              <a class="button button-primary" href="${app.mainPage}">Open App</a>
            </div>
          `;
          gallery.appendChild(card);
        });
      })
      .catch(() => {
        gallery.innerHTML = '<article class="feature-card"><h3>Unable to load apps</h3><p>Try refreshing the page.</p></article>';
      });
  }

  const now = new Date();
  const footer = document.querySelector('.footer');
  if (footer) {
    const meta = document.createElement('p');
    meta.textContent = `Built by Efai De Leon • ${now.getFullYear()}`;
    footer.appendChild(meta);
  }
});
