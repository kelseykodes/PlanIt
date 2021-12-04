// QUICK NOTES: 
// Here is where we set up our Decorations model, for when we are ready to connect to our TBD database. 
// deco = decoration

const { Decoration } = require('../decorations/decoration');
//**Kelsey make sure you changed required path when merged to main branch**/

const decoData = [
  {
    deco_name: 'Party Invitations',
    price: 10.99,
    category_id: 1,
  },
  {
    product_name: 'Tablecloths',
    price: 8.99,
    category_id: 2,
  },
  {
    product_name: 'Streamers',
    price: 5.99,
    category_id: 3,
  },
  {
    product_name: 'Balloons',
    price: 11.99,
    category_id: 4,
  },
  {
    product_name: 'Centerpieces',
    price: 14.99,
    category_id: 5,
  },
];

const seedProducts = () => Decoration.bulkCreate(decoData);
module.exports = seedProducts;
