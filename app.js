const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navList = document.querySelector('nav > ul');

const observer = new IntersectionObserver(toggleActiveNavLink, {threshold: 0.5});

function toggleActiveNavLink(entries) {
  entries.forEach(entry => {
    const navLink = navList.querySelector(`li > a[href='#${entry.target.id}']`);
    if(entry.isIntersecting) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  })
}

[header, ...sections].forEach(element => observer.observe(element));

