
// open image on click
for (const img of document.querySelectorAll('img')) {
  img.onclick = () => {
    window.open(img.src)
  }
}
