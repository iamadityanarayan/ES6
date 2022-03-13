const player = {
  name: 'Adityanarayan Tiwari',
  club: 'Indian Winner',
  address: {
    city: "Los Angeles"
  }
};

const {name, club, address: {city}} = player;

console.log(`${name} lives in ${city}`);
