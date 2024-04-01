export const initialState = {
    data: [
      {
        id: 1,
        poster: './images/urban.jpg',
        title: 'Urban Collective',
        desc: 'The urban collective style contains traits of boho chic and mid-century modern design and uses reclaimed wood with a distressed look, metals with a slim design, and personalized upholstery that results in a unique style with layers of texture.',
        avatar: './images/affordable.png',
        price: '520$',
      },
      {
        id: 2,
        poster: './images/retro.jpg',
        title: 'Retro Style (1950 - 1980)',
        desc: 'This style refers to furniture pieces that are not old but of the recent past. Furniture in retro style refers to those pieces that are outdated but are now back in trend. Retro furniture is sleeker and slender, as well as has bright patterns in earthly colors.',
        avatar: './images/affordable.png',
        price: '830$',
  
      },
      {
        id: 3,
        poster: './images/vintage.jpg',
        title: 'Vintage Style',
        desc: 'Vintage furniture is a term used for pieces that are at least 20 years or older and speak of the era in which they were created. However, the vintage look is not limited to old furniture. Woodworkers can recreate furniture styles belonging to another era and emit a vintage look.',
        avatar: './images/affordable.png',
        price: '460$',
  
      },
      {
        id: 4,
        poster: './images/scandinavian.jpg',
        title: 'Scandinavian Furniture Style (1930 - 1950)',
        desc: 'This furniture style is named after the Nordic countries of Scandinavia. Scandinavian furniture style was in vogue from 1930s to 1950s and is characterized by simplicity, functionality, coziness, and minimalism. The furniture pieces are made of natural wood and are utilitarian in form and function.',
        avatar: './images/affordable.png',
        price: '660$',
  
      },
      {
        id: 5,
        poster: './images/modern.jpg',
        title: 'Modern Furniture Style',
        desc: 'This furniture style was born in the 20th century, bridging artistic and functional elements, and draws inspiration from several traditional types of styles. Modern furniture is made of steel, leather, solid wood, vinyl, marble, plastic, and glass.',
        avatar: './images/affordable.png',
        price: '840$',
  
      },
      {
        id: 6,
        poster: './images/country.jpg',
        title: 'Country Style',
        desc: 'Country style furniture evokes a cozy and warm look that brings the vibe of simple rural life to the space. Muted colors as well as bright earthly ones, like red, gold, and orange, are used. It features functional furniture pieces with minimal decoration. Solid wood, wrought iron, and brass are used.',
        avatar: './images/affordable.png',
        price: '840$',
  
      },
      {
        id: 7,
        poster: './images/antique.jpg',
        title: 'Antique Style Furniture',
        desc: 'Antique furniture refers to those collectible furniture pieces that are usually a hundred years old. They showcase the styles and features of the time they were crafted. Antique furniture can be called an art form. These days, furniture is designed to give an antiquated look.',
        avatar: './images/affordable.png',
        price: '840$',
  
      },
      {
        id: 8,
        poster: './images/minimalist.jpg',
        title: 'Minimalist Style',
        desc: 'This style has a utilitarian design, mostly in rounder shapes, and is devoid of edges. Furniture in a minimalist style is simple and does not feature intricate carvings or decorations. This furniture style is found in neutral and restrained colors, such as gray, black, white, and brown.',
        avatar: './images/affordable.png',
        price: '840$',
      }
    ],
    loading: false,
    page: 1,
    perPage: 4
  
  }
  
  function reducer(state, { type, payload }) {
    switch (type) {
      case 'set-page': return {
        ...state,
        page: payload
      }
      case 'add-blog': return {
        ...state,
        data: [...state.data, payload]
      }
  
      default: return state;
  
    }
  }
  export default reducer;