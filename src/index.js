var Links = document.getElementById('nav-links');
function onToggleMenu(e){
    
    e.name = e.name === 'menu' ? 'close' : 'menu';
    Links.classList.toggle('top-[20%]');

}