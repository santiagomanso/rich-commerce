import img01 from '../assets/categories/resized/01.png'
import img02 from '../assets/categories/resized/02.png'
import img03 from '../assets/categories/resized/03.png'
import img04 from '../assets/categories/resized/04.png'
import img05 from '../assets/categories/resized/05.png'
import img06 from '../assets/categories/resized/06.png'
import img07 from '../assets/categories/resized/07.png'
import img08 from '../assets/categories/resized/08.png'
import img09 from '../assets/categories/resized/09.png'
import img10 from '../assets/categories/resized/10.png'
import img11 from '../assets/categories/resized/11.png'
import img12 from '../assets/categories/resized/12.png'

export const categories_list = [
  {
    category_id: 1,
    img: img01,
    name: {
      en: 'Aircraft Carriers',
      es: 'Portaaviones',
      de: 'Flugzeugträger',
    },
    desc: {
      en: 'Bombers - Fighters ready (+16) tax free!',
      es: 'Bombarderos - Cazas (16+) Libre de impuestos!',
      de: 'Bomber - Kampfflugzeuge (+16) steuerfrei!',
    },
    adult: true,
    new: false,
    row: 'row-span-1',
    col: 'col-span-1',
  },
  {
    category_id: 2,
    img: img02,
    name: {
      en: 'Exclusive Private Jets',
      de: 'Exklusive Privatjets',
      es: 'Aviones Privados Exclusivos',
    },
    desc: {
      en: 'Fast and supersonic where you need to be',
      es: 'Rapido y supersónicos donde necesites',
      de: 'Schnell und mit Überschall',
    },
    adult: false,
    new: false,
    row: 'row-span-1',
    col: 'col-span-1',
  },
  {
    category_id: 3,
    img: img03,
    name: {
      en: 'Superb Cars',
      es: 'Autos de alta gama',
      de: 'Hervorragende Autos',
    },
    desc: {
      en: 'Style of a top 1% of the population',
      es: 'Estilo del top %1 de la poblacion',
      de: 'Ganz im Stil der obersten 1%',
    },
    adult: false,
    new: false,
    row: 'row-span-1',
    col: '',
  },
  {
    category_id: 4,
    img: img04,
    name: {
      en: 'Mansions',
      es: 'Mansiones',
      de: 'Villen',
    },
    desc: {
      en: 'Pure status Quo',
      es: 'Puro estatus Quo',
      de: 'Reiner Status Quo',
    },
    adult: false,
    new: false,
    row: '',
    col: '',
  },
  {
    category_id: 5,
    img: img05,
    name: {
      en: 'Concerts - Talks',
      es: 'Conciertos - Charlas',
      de: 'Konzerte - Gespräche',
    },
    desc: {
      en: 'For the new Private Island you just bought',
      es: 'Para su nueva isla, que acaba de comprar',
      de: 'Direkt auf Ihre Insel geliefert',
    },
    adult: false,
    new: true,
    row: 'row-span-1',
    col: 'col-span-1',
  },
  {
    category_id: 6,
    img: img06,
    name: {
      en: 'Private Islands',
      es: 'Islas privadas',
      de: 'Private Inseln',
    },
    desc: {
      en: 'Exclusive and casted away from everyone else',
      es: 'Privadas y apartadas de todo el mundo.',
      de: 'Exklusiv und losgelöst vom Rest der Welt',
    },
    adult: false,
    new: true,
    row: '',
    col: '',
  },
  {
    category_id: 7,
    img: img07,
    name: {
      en: 'Yatchs',
      es: 'Yates',
      de: 'Yatchs',
    },
    desc: {
      en: 'Explore The oceans the right way',
      es: 'Explore los oceanos de la mejor forma',
      de: 'die Ozeane auf die richtige Weise erforschen',
    },
    adult: false,
    new: false,
    row: '',
    col: '',
  },
  {
    category_id: 8,
    img: img08,
    name: {
      en: 'Space Rockets',
      es: 'Cohetes espaciales',
      de: 'Weltraumraketen',
    },
    desc: {
      en: 'If you feel a bit tired of this planet',
      es: 'Si se encuentra un aburrido de este planeta',
      de: 'Wenn Sie diesen Planeten ein wenig leid sind',
    },
    adult: false,
    new: false,
    row: 'row-span-1',
    col: 'col-span-1',
  },
  {
    category_id: 9,
    img: img09,
    name: {
      en: 'Military Jets',
      es: 'Aviones Militares',
      de: 'Militärjets',
    },
    desc: {
      en: 'Air-air / air-land we got em all',
      es: 'Aire-aire / aire-tierra, tenemos todo',
      de: 'Luft-Luft/Luft-Land - Wir haben sie Alle',
    },
    adult: true,
    new: false,
    row: 'row-span-1',
    col: 'col-span-1',
  },
  {
    category_id: 10,
    img: img10,
    name: { en: 'Sports Clubs', es: 'Clubes importantes', de: 'Sportvereine' },
    desc: {
      en: 'Wimbledon? Chicago bulls? we got them.',
      es: 'Wimbledon? Chicago bulls? estan aqui',
      de: 'Wimbledon? Chicago Bulls? Wir haben sie.',
    },
    adult: false,
    new: true,
    row: 'row-span-1',
    col: '',
  },
  {
    category_id: 11,
    img: img11,
    name: {
      en: 'Intercontinental ballistic missiles',
      es: 'Mililes Balisticos Intercontinentales',
      de: 'Ballistische Interkontinentalrakete',
    },
    desc: {
      en: 'Obliterate your foes with the latest nuke!',
      es: 'Borralos de la misma realidad',
      de: 'Löscht sie aus vom Angesicht der Erde',
    },
    adult: true,
    new: false,
    row: 'row-span-1',
    col: 'col-span-1',
  },
  {
    category_id: 12,
    img: img12,
    name: {
      en: 'Cruise Ships',
      es: 'Cruceros',
      de: 'Kreuzfahrtschiffe',
    },
    desc: {
      en: 'Party with all your friends',
      es: 'Festeja con todas tus amistades',
      de: 'Party mit all deinen Freunden',
    },
    adult: false,
    new: false,
    row: 'row-span-1',
    col: 'col-span-1',
  },
]
