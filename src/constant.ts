import NewArrival1 from '@/public/new-arrivals/new-arrival1.png'
import NewArrival2 from '@/public/new-arrivals/new-arrival2.png'
import NewArrival3 from '@/public/new-arrivals/new-arrival3.png'
import NewArrival4 from '@/public/new-arrivals/new-arrival4.png'
import TopSelling1 from '@/public/top-selling/top-selling1.png'
import TopSelling2 from '@/public/top-selling/top-selling2.png'
import TopSelling3 from '@/public/top-selling/top-selling3.png'
import TopSelling4 from '@/public/top-selling/top-selling4.png'

export const NewArrivalProducts = [
  {
    id: 1,
    productName: 'T-shirt with Tape Details',
    image: NewArrival1,
    rating: 4.5,
    currentPrice: 120,
    isOnPromo: false,
    previousPrice: 0,
    discount: 0
  },
  {
    id: 2,
    productName: 'Skinny Fit Jeans',
    image: NewArrival2,
    rating: 3.5,
    currentPrice: 208,
    isOnPromo: true,
    previousPrice: 260,
    discount: 20
  },
  {
    id: 3,
    productName: 'Checkered Shirt',
    image: NewArrival3,
    rating: 4.5,
    currentPrice: 180,
    isOnPromo: false,
    previousPrice: 0,
    discount: 0
  },
  {
    id: 4,
    productName: 'Sleeve Striped T-Shirt',
    image: NewArrival4,
    rating: 4.5,
    currentPrice: 112,
    isOnPromo: true,
    previousPrice: 160,
    discount: 30
  },
]
export const TopSellingProducts = [
  {
    id: 1,
    productName: 'Vertical Striped Shirt',
    image: TopSelling1,
    rating: 5,
    currentPrice: 185.6,
    isOnPromo: true,
    previousPrice: 232,
    discount: 20
  },
  {
    id: 2,
    productName: 'Courage Graphic T-shirt',
    image: TopSelling2,
    rating: 4,
    currentPrice: 145,
    isOnPromo: false,
    previousPrice: 0,
    discount: 0
  },
  {
    id: 3,
    productName: 'Loose Fit Bermuda Shorts',
    image: TopSelling3,
    rating: 3,
    currentPrice: 80,
    isOnPromo: false,
    previousPrice: 0,
    discount: 0
  },
  {
    id: 4,
    productName: 'Faded Skinny Jeans',
    image: TopSelling4,
    rating: 4.5,
    currentPrice: 210,
    isOnPromo: false,
    previousPrice: 0,
    discount: 0
  },
]

export const customersTestimonies = [

    {
      id: 1,
      name: "Jane Doe",
      review: "I absolutely love the variety of styles available on this site! The quality is top-notch, and the shipping was super fast. I've already recommended it to all my friends!"
    },
    {
      id: 2,
      name: "David Kim",
      review: `: "I bought a suit for a special event, and it was perfect. The fabric felt luxurious, and the fit was spot-on. I received so many compliments that night. I'll definitely be coming back for more.`
    },
    {
      id: 3,
      name: "Emily Johnson",
      review: "The eco-friendly clothing options are fantastic! It's so refreshing to find a store that cares about sustainability. Plus, the prices are very reasonable."
    },
    {
      id: 4,
      name: "Michael Brown",
      review: "I ordered a suit for a wedding, and it was perfect. The fabric felt great, and it looked amazing. I got so many compliments! Highly recommend this store."
    },
    {
      id: 5,
      name: "Sarah Davis",
      review: "I've been a loyal customer for years, and I'm always impressed with the new arrivals. The website is easy to navigate, and the checkout process is seamless. Keep up the great work!"
    }

]

export const TshirtDetails = {
    id: 1,
    productName: "ONE LIFE GRAPHIC T-SHIRT",
    overAllRating: 4.5,
    currentPrice: 180,
    isOnPromo: true,
    previousPrice: 300,
    discount: 40,
    description: `This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    colors: [
      {
        name: 'brown',
        code: '#4F4631'
      },
      {
        name: 'dark-green',
        code: '#314F4A'
      },
      {
        name: 'dark-blue',
        code: '#31344F'
      },
    ],
    sizes: ['small', 'medium', 'large', 'x-large'],
    productReview: {
      totalReviews: 451,
      reviews:[
        {
          id: 1,
          rating: 4.5,
          name: 'Samantha D.',
          comment: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: 'August 14, 2023'
        },
        {
          id: 2,
          rating: 4,
          name: 'Alex M.',
          comment: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
          date: 'August 15, 2023'
        },
        {
          id: 3,
          rating: 3.5,
          name: 'Ethan R.',
          comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt",
          date: 'August 16, 2023'
        },
        {
          id: 4,
          rating: 4,
          name: 'Olivia P.',
          comment: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
          date: 'August 17, 2023'
        },
        {
          id: 5,
          rating: 4,
          name: 'Liam K.',
          comment: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
          date: 'August 18, 2023'
        },
        {
          id: 5,
          rating: 4.5,
          name: 'Ava H.',
          comment: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
          date: 'August 19, 2023'
        },
      ]
    }
  }
