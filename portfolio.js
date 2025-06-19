let menulist = document.getElementById("menuList");
let home = document.querySelector(".home");


function toggleMenu() {
    if (document.getElementById('menuList').style.display = 'none') {
        document.getElementById('menuList').style.display = 'block';
        document.querySelector(".home").style.marginTop = "70px";
    }
}

// Home Section

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const words = ["Web Developer", "Freelancer", "Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const erasingDelay = 60;
const newWordDelay = 1500;

function type() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, newWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(type, erasingDelay);
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    if (words.length) setTimeout(type, 500);
})


// Counter Section

const counters = document.querySelectorAll('.conuter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;


        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 15);

        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    updateCount();
})



// Project Section

function showProject(projectId) {
    const displayImage = document.getElementById('display-image');
    const projectName = document.getElementById('project-name');
    const projectTech = document.getElementById('project-tech');
    const projectDesc = document.getElementById('project-desc');


    const projects = {
        project1: {
            image: './portfolioimg/aq2.png',
            name: 'Fashion Website Design',
            tech: 'HTML, CSS, JS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem? Ipsam cupiditate dignissimos nisi dicta ipsum possimus nulla et nam? Soluta excepturi, consequuntur corporis ad tempore quaerat velit facilis accusamus.',
        },

        project2: {
            image: './portfolioimg/111q.png',
            name: 'Travel Website Design',
            tech: 'HTML, Bootsrap, React',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem? Ipsam cupiditate dignissimos nisi dicta ipsum possimus nulla et nam? Soluta excepturi, consequuntur corporis ad tempore quaerat velit facilis accusamus.',
        },

        project3: {
            image: './portfolioimg/110q.png',
            name: 'School Website Design',
            tech: 'HTML, CSS, JS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem? Ipsam cupiditate dignissimos nisi dicta ipsum possimus nulla et nam? Soluta excepturi, consequuntur corporis ad tempore quaerat velit facilis accusamus.',
        },


        project4: {
            image: './portfolioimg/109q.png',
            name: 'Burger Website Design',
            tech: 'HTML, CSS, JS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem? Ipsam cupiditate dignissimos nisi dicta ipsum possimus nulla et nam? Soluta excepturi, consequuntur corporis ad tempore quaerat velit facilis accusamus.',
        },

        project5: {
            image: './portfolioimg/aq3.png',
            name: 'Pizza Website Design',
            tech: 'HTML, CSS, JS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem? Ipsam cupiditate dignissimos nisi dicta ipsum possimus nulla et nam? Soluta excepturi, consequuntur corporis ad tempore quaerat velit facilis accusamus.',
        },

        project6: {
            image: './portfolioimg/aq4.png',
            name: 'Pizza Website Design',
            tech: 'HTML, CSS, JS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem? Ipsam cupiditate dignissimos nisi dicta ipsum possimus nulla et nam? Soluta excepturi, consequuntur corporis ad tempore quaerat velit facilis accusamus.',
        },

        project7: {
            image: './portfolioimg/1q7.png',
            name: 'Pizza Website Design',
            tech: 'HTML, CSS, JS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem? Ipsam cupiditate dignissimos nisi dicta ipsum possimus nulla et nam? Soluta excepturi, consequuntur corporis ad tempore quaerat velit facilis accusamus.',
        },

        project8: {
            image: './portfolioimg/qa1.png',
            name: 'Shoe Website Design',
            tech: 'HTML, CSS, JS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem? Ipsam cupiditate dignissimos nisi dicta ipsum possimus nulla et nam? Soluta excepturi, consequuntur corporis ad tempore quaerat velit facilis accusamus.',
        },

    };

    const project = projects[projectId];
    displayImage.src = project.image;
    projectName.textContent = project.name;
    projectTech.textContent = `Technologies Used: ${project.tech}`;
    projectDesc.textContent = project.desc;


    document.getElementById('project-display').style.display = 'flex';
}

function closeProjectDisplay() {
    document.getElementById('project-display').style.display = 'none';
}

function loadMoreCards() {
    document.getElementById('additinal-cards').classList.remove('hidden');
    document.getElementById('see-more-btn').style.display = 'none';
}

// Skills Section


document.addEventListener('DOMContentLoaded', function () {

    const htmlProgress = document.getElementById('html-progress');
    const htmlPercentageText = document.getElementById('html-percentage');
    htmlProgress.style.width = '100%';
    htmlPercentageText.textContent = '100%';

    const cssProgress = document.getElementById('css-progress');
    const cssPercentageText = document.getElementById('css-percentage');
    cssProgress.style.width = '100%';
    cssPercentageText.textContent = '100%';


    const tailwindProgress = document.getElementById('tailwind-progress');
    const tailwindPercentageText = document.getElementById('tailwind-percentage');
    tailwindProgress.style.width = '100%';
    tailwindPercentageText.textContent = '100%';

    const jsProgress = document.getElementById('js-progress');
    const jsPercentageText = document.getElementById('js-percentage');
    jsProgress.style.width = '90%';
    jsPercentageText.textContent = '90%';

    const phpProgress = document.getElementById('php-progress');
    const phpPercentageText = document.getElementById('php-percentage');
    phpProgress.style.width = '80%';
    phpPercentageText.textContent = '80%';

    const sqlProgress = document.getElementById('sql-progress');
    const sqlPercentageText = document.getElementById('sql-percentage');
    sqlProgress.style.width = '80%';
    sqlPercentageText.textContent = '80%';
})

