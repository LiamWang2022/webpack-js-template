import './style.css';
import logo from './assets/logo.png';

const root = document.getElementById('root');

const heading = document.createElement('h1');
heading.textContent = '🎉 Webpack Template Works!';
root.appendChild(heading);

const image = document.createElement('img');
image.src = logo;
image.alt = 'Logo';
root.appendChild(image);
