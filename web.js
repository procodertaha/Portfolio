





const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('in-view')
        }else{
            entry.target.classList.remove("in-view")
        }
    })
},{
    threshold: 0.2 
})

const projects = document.querySelectorAll(".project,.html,.css,.c,.js")

projects.forEach((project)=> observer.observe(project))

const skills = document.querySelectorAll(".skillbox1,.skillbox2,.skillbox3,.heading-myskill")

skills.forEach((skillbox)=> observer.observe(skillbox))


document.querySelector('.fa-bars').addEventListener('click', function() {
    document.querySelector('.nav-part2').classList.toggle('active');
  });
  



  const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.nav-part2 span');

// Show nav-part2 when hamburger icon is clicked
menuIcon.addEventListener('click', () => {
  nav.classList.add('open');
  menuIcon.style.display = 'none'; // Hide hamburger icon
});

// Hide nav-part2 and show hamburger when close button is clicked
closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
  menuIcon.style.display = 'block'; // Show hamburger icon again
});

