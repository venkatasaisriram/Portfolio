const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')
const visitBtn = document.getElementById("visit-btn")
const downloadBtn = document.getElementById("download-btn")
const contactBtn = document.getElementById("contact-btn")
const icons1 = document.getElementById("github")
const icons2 = document.getElementById("linkedin")
const sectionContact = document.getElementById("contact")
const gridCards1 = document.getElementById("grid-card1")
const gridCards2 = document.getElementById("grid-card2")
const gridCards3 = document.getElementById("grid-card3")
const gridCards4 = document.getElementById("grid-card4")
const sectionProject = document.getElementById("projects")
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

visitBtn.addEventListener('click', function() {
    // window.location.href = "https://github.com/venkatasaisriram";
    window.open('https://github.com/venkatasaisriram', '_blank')
})

downloadBtn.addEventListener('click', function() {
    // window.location.href = "./images/sriram.pdf";
    window.open("./images/sriram.pdf", "_blank");
})

contactBtn.addEventListener('click', function() {
    sectionContact.scrollIntoView({behavior: 'smooth'})
})

icons1.addEventListener('click', function() {
    window.open("https://github.com/venkatasaisriram", "_blank")
})

icons2.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/venkata-sai-sriram-chitrada", "_blank")
})

gridCards1.addEventListener('click', function() {
    sectionProject.scrollIntoView({behavior:'smooth'})
})

gridCards2.addEventListener('click', function() {
    sectionProject.scrollIntoView({behavior:'smooth'})
})

gridCards3.addEventListener('click', function() {
    sectionProject.scrollIntoView({behavior:'smooth'})
})

gridCards4.addEventListener('click', function() {
    sectionProject.scrollIntoView({behavior:'smooth'})
})
