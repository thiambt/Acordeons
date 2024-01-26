document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function (item) {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', function () {
        item.classList.toggle('active');
  
        const content = item.querySelector('.accordion-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  