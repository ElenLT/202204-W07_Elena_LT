import { Rey, Asesor, Luchador, Escudero } from './classes/index.js';

const JoffreyBaratheon = new Rey(
  'Joffrey',
  'Baratheon',
  14,
  2,
  'joffrey',
  'rey'
);

const JaimeLannister = new Luchador(
  'Jaime',
  'Lanniester',
  34,
  'espada',
  7,
  'jaime',
  'luchador'
);

const DaenerysTargaryen = new Luchador(
  'Daenerys',
  'Targaryen',
  16,
  'dragón',
  9,
  'daenerys',
  'luchador'
);

const TyrionLannister = new Asesor(
  'Tyrion',
  'Lannister',
  27,
  'Daenerys',
  'tyrion',
  'asesor'
);

const Bronn = new Escudero('Bronn', '', 32, 'Jaime', 7, 'bronn', 'escudero');

export const arrayPerso = [
  JoffreyBaratheon,
  JaimeLannister,
  DaenerysTargaryen,
  TyrionLannister,
  Bronn,
];

console.log(arrayPerso);
