(function () {
  const root = document.documentElement;
  const key = 'theme';
  const btn = document.getElementById('themeToggle');

  function apply(theme) {
    if (theme === 'dark' || theme === 'light') {
      root.setAttribute('data-theme', theme);
      localStorage.setItem(key, theme);
    } else {
      root.removeAttribute('data-theme');
      localStorage.removeItem(key);
    }

    const current = root.getAttribute('data-theme');
    const isDark = current === 'dark';

    if (btn) {
      btn.setAttribute('aria-pressed', String(isDark));
      const icon = btn.querySelector('[data-icon]');
      const label = btn.querySelector('[data-label]');
      if (icon) icon.textContent = isDark ? '🌙' : '☀️';
      if (label) label.textContent = isDark ? 'Dark' : 'Light';
    }
  }

  const saved = localStorage.getItem(key);
  if (saved === 'dark' || saved === 'light') {
    apply(saved);
  } else {

    apply(root.getAttribute('data-theme'));
  }

  if (btn) {
    btn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      apply(current === 'dark' ? 'light' : 'dark');
    }, false);
  }
})();