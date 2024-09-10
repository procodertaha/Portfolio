const searchInput = document.getElementById('search');
const images = document.querySelectorAll('.grid-image img');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    images.forEach(image => {
        const className = image.className.toLowerCase();
        if (className.includes(query)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
});

gsap.from(".left-herosection h3",{
    y: 100,
    duration: 1,
    delay:1,
    opacity:0,
   
})
gsap.   to(".left-herosection h3",{
    // y: 200,
    duration: 1,
    delay:1,
    opacity:1,
    color: "#FFAF00"

   
})
gsap.from(".left-herosection p",{
    y: 100,
    duration: 1,
    delay:1,
    opacity:0,
 
})
gsap.to(".fa-star",{
    x: 500,
    duration: 2,
    delay:2,
    stagger: 1,
    repeat:-1
})
