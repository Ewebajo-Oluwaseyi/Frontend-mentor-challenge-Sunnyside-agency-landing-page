document.querySelector('.Navitem_toggle').addEventListener('click', function Toggle() {
    document.querySelectorAll('.NavItem').forEach(nav => nav.classList.toggle('show'))
})