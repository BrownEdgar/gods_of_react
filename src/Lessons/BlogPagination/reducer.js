export const initialState = {
  data: [
    {
      id: 1,
      poster: './images/newcard1.png',
      title: 'Vue.js vs React - How to Choose the Right Framework',
      desc: 'In this article, we will compare two excellent JavaScript frameworks, their pros, and cons, as well as some use cases built with each',
      avatar: './images/newgirl.jpg',
      date: 'Mar 16, 2023',
    },
    {
      id: 2,
      poster: './images/card2.png',
      title: 'What is Omnichannel eCommerce?',
      desc: 'Omnichannel eCommerce is comprehensive approach to sales that aims to provide a smooth customer experience.',
      avatar: './images/newgirl.jpg',
      date: 'May 19, 2023',

    },
    {
      id: 3,
      poster: './images/newcard3.png',
      title: 'Whats the difference between Gatsby and Next.js ',
      desc: 'In this post, we will break down the differences between Gatsby and Next.JS and which approach is appropriate for a particular use case.',
      avatar: './images/newgirl.jpg',
      date: 'Jan 3, 2023',

    },
    {
      id: 4,
      poster: './images/card4.png',
      title: 'What is Digital Customer Experience?',
      desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
      avatar: './images/newgirl.jpg',
      date: 'July 11, 2023',

    },
    {
      id: 5,
      poster: './images/card5.png',
      title: 'Authentication Patterns with Next.js',
      desc: 'We will break down the difference between server-side and client-side authentication & demo how each of these look in practice in a simple Next.j..',
      avatar: './images/newgirl.jpg',
      date: 'Sep 16, 2023',

    },
    {
      id: 6,
      poster: './images/card6.png',
      title: 'The Difference between Next.js and React?',
      desc: 'In this post, we take a look at the difference between Next.js and React and discover the pros and cons of each approach.',
      avatar: './images/newgirl.jpg',
      date: 'Jan 29, 2023',

    },
    {
      id: 7,
      poster: './images/card7.png',
      title: 'Whats the difference between Gatsby and Next.js',
      desc: 'In this post, we will break down the differences between Gatsby and Next.JS and which approach is appropriate for a particular use case.',
      avatar: './images/newgirl.jpg',
      date: 'Sep 6, 2023',

    },
    {
      id: 8,
      poster: './images/card8.png',
      title: 'What is Digital Customer Experience?',
      desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
      avatar: './images/newgirl.jpg',
      date: 'Aug 6, 2023',
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