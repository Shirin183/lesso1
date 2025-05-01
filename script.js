let header = document.getElementById('header')
header.style.width = '1483px';
header.style.height = '831px'
header.style.padding = '54px 42px 217px 119px';
header.style.backgroundColor = '#C4B5A5';

let ul = document.getElementById('ul');
ul.style.listStyle = 'none'
ul.style.display = 'flex'
ul.style.gap = '88px'


let dark = document.getElementById('dark');
dark.addEventListener('click', () => {
    header.style.backgroundColor = 'black'
})

let light = document.getElementById('light');
light.addEventListener('click', () => {
    header.style.backgroundColor = '#C4B5A5'
})