/*
const monsterList = document.getElementById('monster-container');
const createMonsterForm = document.getElementById('create-monster');
const loadMoreButton = document.getElementById('load-more-btn');

let page = 1;
const limit = 50;

// Function to render a single monster
function renderMonster(monster) {
  const monsterDiv = document.createElement('div');
  monsterDiv.innerHTML = `
    <h3>${monster.name}</h3>
    <p>Age: ${monster.age}</p>
    <p>Description: ${monster.description}</p>
  `;
  monsterList.appendChild(monsterDiv);
}

// Function to fetch and render monsters
function fetchMonsters() {
  const response = fetch(`http://localhost:3000/monsters`);
  const monsters = response.json();

  monsters.forEach(monster => {
    renderMonster(monster);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = parseFloat(document.getElementById('age').value);
  const description = document.getElementById('description').value;

  const monster = {
    name: name,
    age: age,
    description: description
  };

  const response = fetch(`http://localhost:3000/monsters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(monster)
  });

  if (response.ok) {
    const createdMonster = response.json();
    renderMonster(createdMonster);
    createMonsterForm.reset();
  } else {
    console.log('Failed to create monster');
  }
}

// Function to load more monsters
function loadMoreMonsters() {
  page++;
  fetchMonsters();
}

// Event listeners
createMonsterForm.addEventListener('submit', handleFormSubmit);
loadMoreButton.addEventListener('click', loadMoreMonsters);

// Initial fetch on page load
fetchMonsters(); 
*/



const monsterList = document.getElementById('monster-container');
const createMonsterForm = document.getElementById('create-monster');
const loadMoreButton = document.getElementById('load-more-btn');

let page = 1;
const limit = 50;

// Function to render a single monster
function renderMonster(monster) {
  const monsterDiv = document.createElement('div');
  monsterDiv.innerHTML = `
    <h3>${monster.name}</h3>
    <p>Age: ${monster.age}</p>
    <p>Description: ${monster.description}</p>
  `;
  monsterList.appendChild(monsterDiv);
}

// Function to fetch and render monsters
async function fetchMonsters() {
  const response = await fetch(`http://localhost:3000/monsters?_limit=${limit}&_page=${page}`);
  const monsters = await response.json();

  monsters.forEach(monster => {
    renderMonster(monster);
  });
}

async function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = parseFloat(document.getElementById('age').value);
    const description = document.getElementById('description').value;
  
    const monster = {
      name: name,
      age: age,
      description: description
    };
  
    const response = await fetch('http://localhost:3000/monsters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(monster)
    });
  
    if (response.ok) {
      const createdMonster = await response.json();
      renderMonster(createdMonster);
      createMonsterForm.reset();
    } else {
      console.log('Failed to create monster');
    }
  }
  
<button id="load-more-btn">Load More</button>

function loadMoreMonsters() {
    page++;
    fetchMonsters();
  }

  createMonsterForm.addEventListener('submit', handleFormSubmit);
loadMoreButton.addEventListener('click', loadMoreMonsters);

fetchMonsters ();
  