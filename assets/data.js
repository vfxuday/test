// Exports the data as a global variable
// Later on course we will learn how to fetch is from server
// using an AJAX request
// This data is provided as a sample for you to work with. While running 
// test cases we will override this element to check correctness of your solution
// Do not refer to this variable directly inside any function.

const productList = [
  {
    id: 1,
    name: 'PlayStation 5',
    description: 'Next generation PlayStation from Sony packing the latest AMD Zen CPUs',
    image: 'assets/images/ps5.jpeg',
    price: 39999,
    memory: '8 GB',
    storage: '2 TB',
    colors: ['blue', 'black', 'red']
  },
  {
    id: 2,
    name: 'PlayStation 4',
    description: 'Last generation PlayStation from Sony with older generation Intel CPUs',
    image: 'assets/images/ps4.jpeg',
    price: 29999,
    memory: '4 GB',
    storage: '1 TB',
    colors: ['yellow', 'black', 'red']
  },
  {
    id: 3,
    name: 'X-Box One',
    description: 'Current generation X-Box from Microsoft with latest AMD Zen CPUs',
    image: 'assets/images/xbox.jpeg',
    price: 35999,
    memory: '6 GB',
    storage: '1 TB',
    colors: ['blue', 'black', 'green']
  },
  {
    id: 4,
    name: 'MacBook Pro',
    description: 'M1 powered MacBooks for professionals',
    image: 'assets/images/macbook-pro.jpeg',
    price: 69999,
    memory: '6 GB',
    storage: '1 TB',
    colors: ['blue', 'yellow', 'red']
  },
  {
    id: 5,
    name: 'IPhone 12',
    description: 'A13 bionic based 5G ready smartphones from Apple',
    image: 'assets/images/iphone.jpeg',
    price: 65999,
    memory: '4 GB',
    storage: '128 GB',
    colors: ['red', 'yellow', 'blue']
  },
  {
    id: 6,
    name: 'IPhone SE',
    description: 'The same A13 bionic in a smaller form factor',
    image: 'assets/images/iphone-se.jpeg',
    price: 45999,
    memory: '4 GB',
    storage: '128 GB',
    colors: ['red', 'yellow', 'blue']
  },
];
window.productList = productList;