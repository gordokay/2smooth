const header = document.querySelector('header');
const section = document.querySelector('section');
const navList = document.querySelector('nav > ul');

const observer = new IntersectionObserver(toggleActiveNavLink);

function toggleActiveNavLink(entries) {
  entries.forEach(entry => {
    const navLink = navList.querySelector(`li > a[href='#${entry.target.id}']`);
    if(entry.intersectionRatio < 0.5 && entry.isIntersecting) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  })
}

observer.observe(header);
observer.observe(section);

