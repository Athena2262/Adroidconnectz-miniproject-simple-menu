// Function to toggle the mobile navigation
function toggleMobileNav() {
    var navItems = document.getElementById('navbarNav');
    if (navItems.classList.contains('show')) {
      navItems.classList.remove('show');
    } else {
      navItems.classList.add('show');
    }
  }
  
  // Add event listener to the hamburger icon button
  document.querySelector('.navbar-toggler').addEventListener('click', toggleMobileNav);
