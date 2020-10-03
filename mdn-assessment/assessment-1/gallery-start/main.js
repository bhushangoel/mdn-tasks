const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=0; i<5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i+1}.jpg`);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', function(e) {
   displayedImage.src = e.target.src;
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(e) {
    const tc = e.target.textContent;
    if(tc.toLowerCase() === 'darken') {
        e.target.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        e.target.className = 'light';
    } else {
        e.target.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        e.target.className = 'dark';
    }
})
