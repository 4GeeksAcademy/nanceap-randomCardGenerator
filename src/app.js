import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarCarta() {
  const palos = ['heart', 'spade', 'club', 'diamond'];
  const simbolos = {
    heart: '♥',
    spade: '♠',
    club: '♣',
    diamond: '♦'
  };
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const paloIndex = Math.floor(Math.random() * palos.length);
  const valorIndex = Math.floor(Math.random() * valores.length);
  const palo = palos[paloIndex];
  const simbolo = simbolos[palo];
  const valor = valores[valorIndex];

  const carta = document.getElementById('carta');
  carta.className = 'card carta shadow-lg d-flex justify-content-center align-items-center fs-1 fw-bold position-relative text-black';

  const colorClass = (palo === 'heart' || palo === 'diamond') ? 'text-danger' : 'text-dark';

  carta.innerHTML = `
    <div class="palo-superior ${colorClass}">${simbolo}</div>
    ${valor}
    <div class="palo-inferior ${colorClass}">${simbolo}</div>
  `;
}

window.onload = () => {
  generarCarta();

  document.getElementById('nuevaCartaBtn').addEventListener('click', generarCarta);
};





