const header = document.querySelector('header');
const navList = document.querySelector('nav > ul');

const observer = new IntersectionObserver(toggleActiveNavLink);

function toggleActiveNavLink(entry) {
  const navLink = navList.querySelector(`li > a[href='#${entry[0].target.id}']`);
  if(entry[0].intersectionRatio > 0.5) {
    navLink.classList.add('active');
  } else {
    navList.classList.remove('active');
  }
}

observer.observe(header);
