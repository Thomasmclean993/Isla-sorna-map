// script.js
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('area').forEach(area => {
    area.addEventListener('mouseenter', function() {
        const coords = this.coords.split(',').map(Number);
        const shape = this.shape;

        const highlight = document.getElementById('highlight');
      console.log(highlight)
        highlight.style.display = 'block';
        
            highlight.style.left = `${coords[0]}px`;
            highlight.style.top = `${coords[1]}px`;
            highlight.style.width = `${coords[2] - coords[0]}px`;
            highlight.style.height = `${coords[3] - coords[1]}px`;
    });

    area.addEventListener('mouseleave', function() {
        const highlight = document.getElementById('highlight');
        highlight.style.display = 'none';
    });
  });
});

