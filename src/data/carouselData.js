import money1 from '../assets/money1.png'
import money2 from '../assets/money2.png'
import bugatti from '../assets/bugatti.png'

export const carouselData = [
  {
    id: 1,
    slideOptions:
      'select-none rounded flex bg-gradient-to-tl from-slate-500/60 dark:from-indigo-900/60 via-gray-400/95 dark:via-gray-900/95 to-gray-300/90   dark:to-slate-800/90 ',
    title: 'Billionaire E-Commerce',
    subtitle:
      'Simulate the wealth of the top Forbes human beings and buy the most expensive items that you can think of.',
    buttonLeft: 'More',
    buttonRight: 'Choose player',
    img1: money1,
    imgOptions1: 'absolute left-0 opacity-10',
    img2: money2,
    imgOptions2: 'absolute right-0 opacity-5 lg:opacity-80',
  },
  {
    id: 2,
    slideOptions:
      'select-none rounded flex bg-gradient-to-br dark:bg-gradient-to-tl from-slate-500/60 dark:from-indigo-900/60 via-gray-400/95 dark:via-gray-900/80 to-gray-300/90   dark:to-slate-800/90 ',
    title: 'Bugatti La Voiture Noire',
    subtitle:
      'With a price tag of $13.4 million, the one-off Bugatti La Voiture Noire is officially the most expensive new Bugatti ever made.',
    buttonLeft: 'More cars',
    buttonRight: 'Add to cart',
    img2: bugatti,
    imgOptions2:
      'absolute bottom-5 right-0 lg:right-[5%] lg:scale-125 opacity-5 md:opacity-30 lg:opacity-80',
  },
  {
    id: 3,
    slideOptions:
      'select-none rounded flex bg-gradient-to-br dark:bg-gradient-to-tl from-slate-500/60 dark:from-indigo-900/60 via-gray-400/95 dark:via-gray-900/80 to-gray-300/90   dark:to-slate-800/90 ',
    title: 'Elon Musk',
    subtitle: 'Introducing new playable character.',
    buttonLeft: 'More charaters',
    buttonRight: 'Play as Elon NOW!',
    img2: 'https://microcapdaily.com/wp-content/uploads/2022/04/Elon-Musk-PNG-Pic-Background-1068x828.png',
    imgOptions2:
      'absolute bottom-0 translate-y-[29%] right-0 lg:right-0 scale-[0.45] opacity-5 lg:opacity-80',
  },

  {
    id: 4,
    slideOptions:
      'select-none rounded flex bg-gradient-to-br dark:bg-gradient-to-tl from-slate-500/60 dark:from-indigo-900/60 via-gray-400/95 dark:via-gray-900/80 to-gray-300/90   dark:to-slate-800/90 ',
    title: 'F-22 Raptor',
    subtitle:
      'Introducing a fifth-generation stealth aircraft used by the USAF.',
    buttonLeft: 'Military planes',
    buttonRight: 'Add to cart',
    img2: 'https://images.fineartamerica.com/images/artworkimages/medium/3/a-us-air-force-f-22-raptor-fifth-generation-stealth-air-superiority-fighter-tom-hill-transparent.png',
    imgOptions2:
      'absolute -bottom-20 md:-bottom-10 md:translate-y-[10%] right-5 lg:right-20  opacity-50 lg:opacity-80',
  },
]
