document.addEventListener('DOMContentLoaded', () => {
  const qrImage = document.querySelector('.qr-image');
  
  // Перехід по кліку на QR-код
  qrImage.style.cursor = 'pointer';
  qrImage.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  });

  // Підстрибування картки при натисканні Пробілу
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      const card = document.querySelector('.card-container');
      card.style.transition = 'transform 0.15s ease-out';
      card.style.transform = 'translateY(-45px)';
      
      setTimeout(() => {
        card.style.transition = 'transform 0.2s ease-in';
        card.style.transform = 'translateY(0)';
      }, 150);
    }
  });
});
