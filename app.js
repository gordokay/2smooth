const header = document.querySelector('header');
const section = document.querySelector('section');
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

observer.observe(header);
observer.observe(section);

