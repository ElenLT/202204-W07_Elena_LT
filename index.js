import { arrayPerso } from './src/personajes.js';

console.log('elena'); //TODO:
console.log(arrayPerso); //TODO:

export function renderCards() {
  const characterList = document.querySelector('.characters-list');
  document.querySelector('.col').remove();

  arrayPerso.forEach((character) => {
    const characterCard = document.createElement('li');
    characterCard.classList.add('character', 'col');
    console.log(character);

    characterCard.innerHTML = `
			<div class="card character__card">
					<img
							src="./src/img/${character.img}.jpg"
							alt="Nombre y familia del personaje"
							class="character__picture card-img-top img-${character.img}"
					/>
					<div class="card-body">
							<h2 class="character__name card-title h4">
									${character.name} ${character.family}
							</h2>
							<div class="character__info thumbs">
									<ul class="list-unstyled">
											<li>Edad: ${character.age} años</li>
											<li>
													Estado: ${showStatusCharacter(character.isAlive)}
													
											</li>
									</ul>
							</div>
							<div class="character__overlay">
									${showCharacterInfo(character)}
							<div class="character__actions">
								<button id="speakButton" class="character__action btn">habla</button>
								<button id="dieButton" class="character__action btn" onclick= "${() =>
                  onClickDie(character)}" >muere</button>
							</div>
					</div>
			</div>
			<i class="emoji"></i>
	</div>
    `;
    characterList.appendChild(characterCard);
  });
}

renderCards();

function showCharacterInfo(character) {
  if (character.type === 'rey') {
    return `<ul class="list-unstyled">
                  <li>Años de reinado: ${character.años_reinado}</li>
			</ul>`;
  }
  if (character.type === 'asesor') {
    return `<ul class="list-unstyled">
                  <li>Personaje al que asesora: ${character.personaje_asesora}</li>
			</ul>`;
  }
  if (character.type === 'escudero') {
    return `<ul class="list-unstyled">
                  <li>Personaje al que sirve: ${character.personaje_sirve}
    			<li>Grado de pelotismo: ${character.pelotismo}</li>
			</ul>`;
  }
  if (character.type === 'luchador') {
    return `<ul class="list-unstyled">
                  <li>Arma: ${character.arma}
    			<li>Destreza: ${character.destreza}</li>
			</ul>`;
  }
}

function showStatusCharacter(isAlive) {
  if (isAlive) {
    return `👍`;
  }
  if (!isAlive) {
    return `👎`;
  }
}

function onClickDie(character) {
  //character.die();
  console.log('muerte');
}

//const dieButton = document.getElementById('dieButton');
//dieButton.addEventListener('click', () => onClickDie());
