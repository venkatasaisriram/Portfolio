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
const liveDemo = document.getElementById("live-demo")
const projectGithub = document.getElementById("project-github")
const submitBtn = document.getElementById("submit-btn")
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

liveDemo.addEventListener('click', function() {
    window.open("https://venkatasaisriram.github.io/Portfolio/", "_blank")
})

projectGithub.addEventListener('click', function() {
    window.open('https://github.com/venkatasaisriram/Portfolio', '_blank')
})

//Pop Up

const certImages = document.querySelectorAll('.cert-img');
const modal = document.getElementById('cert-modal');
const modalImg = document.getElementById('modal-img');
const navBar = document.getElementById("nav-header")

certImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

function closeModal() {
    modal.style.display = 'none';
}

const emailInput = document.getElementById("email-input")

submitBtn.addEventListener('click', function() {
    const email = emailInput.value.trim();

    if(email) {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
    }
    else {
        alert("Please enter email address");
    }
})