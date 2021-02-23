export const ANAKIN_IMAGE =
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg';
export const RAY_IMAGE =
  'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

const WayImage = `https://sayingimages.com/wp-content/uploads/the-way-this-is-meme.jpg`;
export const mandoImage = `https://styles.redditmedia.com/t5_u8wq5/styles/communityIcon_62iioh7khuv51.png?width=256&s=3c4a604c15ed964e5c5d055dc8f8c3b7e89023d9`;

const defaultPosts = [
  {
    author: {
      name: 'Anakin Skywalker',
      avatar: ANAKIN_IMAGE,
      username: 'dart_vader',
    },
    content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
    image: RAY_IMAGE,
    date: '26 February',
    comment: 24,
    share: 5,
    favorite: 56,
  },
  {
    author: {
      name: 'Mandalorian',
      avatar: mandoImage,
      username: 'Mando',
    },
    content: 'I have spoken. This is the way. ',
    image: WayImage,
    date: '1 January',
    comment: 28,
    share: 8,
    favorite: 45,
  },
];
export default defaultPosts;
