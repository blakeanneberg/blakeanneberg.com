var toggle = document.getElementById('toggle');
toggle.addEventListener('change', function() {
  if (toggle.checked) {
    document.documentElement.classList.add('dark-mode');
    document.documentElement.classList.remove('light-mode');
  } else {
    document.documentElement.classList.add('light-mode');

    
document.documentElement.classList.remove('dark-mode');
  }
});
