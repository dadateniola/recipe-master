// User data
export const users = [
  {
    pfp: '/users/orange.jpg',
    name: 'Alice Johnson',
    recipes: 25,
    showcase: [
      '/showcase/showcase (1).jpg',
      '/showcase/showcase (2).jpg',
      '/showcase/showcase (3).jpg',
    ],
  },
  {
    pfp: '/users/purple.jpg',
    name: 'Bob Smith',
    recipes: 40,
    showcase: [
      '/showcase/showcase (4).jpg',
      '/showcase/showcase (5).jpg',
      '/showcase/showcase (6).jpg',
    ],
  },
  {
    pfp: '/users/teal.jpg',
    name: 'Carol White',
    recipes: 15,
    showcase: [
      '/showcase/showcase (7).jpg',
      '/showcase/showcase (8).jpg',
      '/showcase/showcase (9).jpg',
    ],
  },
  {
    pfp: '/users/yellow.jpg',
    name: 'David Brown',
    recipes: 65,
    showcase: [
      '/showcase/showcase (10).jpg',
      '/showcase/showcase (11).jpg',
      '/showcase/showcase (12).jpg',
    ],
  },
  {
    pfp: '/users/brown.jpg',
    name: 'Emma Wilson',
    recipes: 30,
    showcase: [
      '/showcase/showcase (13).jpg',
      '/showcase/showcase (14).jpg',
      '/showcase/showcase (15).jpg',
    ],
  },
  // Add more users here...
];

//Recipe data
export const recipes = [
  {
    img: users[0].showcase[0],
    pfp: users[0].pfp,
    name: 'Spaghetti Carbonara',
    time: 30,
  },
  {
    img: users[1].showcase[1],
    pfp: users[1].pfp,
    name: 'Chocolate Cake',
    time: 60,
  },
  {
    img: users[2].showcase[2],
    pfp: users[2].pfp,
    name: 'Vegetable Stir-Fry',
    time: 25,
  },
  {
    img: users[3].showcase[0],
    pfp: users[3].pfp,
    name: 'Grilled Salmon',
    time: 20,
  },
  {
    img: users[4].showcase[1],
    pfp: users[4].pfp,
    name: 'Chicken Parmesan',
    time: 45,
  },
  // Add more recipe cards here...
];