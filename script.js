document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const saveNameBtn = document.getElementById('saveNameBtn');
  const greeting = document.getElementById('greeting');

  const themeSelect = document.getElementById('themeSelect');
  const animationSelect = document.getElementById('animationSelect');
  const animateBtn = document.getElementById('animateBtn');
  const box = document.getElementById('box');

  const savedName = localStorage.getItem('username');
  if (savedName) {
    greeting.textContent = `Welcome back, ${savedName}!`;
    usernameInput.value = savedName;
  }

  saveNameBtn.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    if (name !== "") {
      localStorage.setItem('username', name);
      greeting.textContent = `Welcome back, ${name}!`;
    }
  });

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme;
  themeSelect.value = savedTheme;

  themeSelect.addEventListener('change', () => {
    const theme = themeSelect.value;
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  });

  animateBtn.addEventListener('click', () => {
    const animType = animationSelect.value;
    box.classList.remove('animate-slide', 'animate-bounce', 'animate-rotate');
    void box.offsetWidth; // force reflow
    box.classList.add(`animate-${animType}`);
  });
});
