// Chặn chuột phải
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Chặn giữ tay lâu ảnh / link trên điện thoại
document.addEventListener('touchstart', function(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
    e.preventDefault();
  }
}, { passive: false });

// Chặn Ctrl+C hoặc copy text
document.addEventListener('copy', function(e) {
  e.preventDefault();
});

// Chặn kéo ảnh, text
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});
