import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const ORDER_STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'refunded', label: 'Refunded' },
];

export const mockLocations = [
  {
    locationName: 'Warehouse A',
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    zip: '62701',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse B',
    street: '456 Elm St',
    city: 'Chicago',
    state: 'IL',
    zip: '60611',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse C',
    street: '789 Oak St',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90001',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse D',
    street: '101 Pine St',
    city: 'Austin',
    state: 'TX',
    zip: '73301',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse E',
    street: '202 Birch St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse F',
    street: '303 Cedar St',
    city: 'Boston',
    state: 'MA',
    zip: '02115',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse G',
    street: '404 Maple St',
    city: 'Dallas',
    state: 'TX',
    zip: '75201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse H',
    street: '505 Oak St',
    city: 'Seattle',
    state: 'WA',
    zip: '98101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse I',
    street: '606 Pine St',
    city: 'Denver',
    state: 'CO',
    zip: '80202',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse J',
    street: '707 Cedar St',
    city: 'Miami',
    state: 'FL',
    zip: '33101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse K',
    street: '808 Birch St',
    city: 'Portland',
    state: 'OR',
    zip: '97201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse L',
    street: '909 Oak St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse M',
    street: '1010 Pine St',
    city: 'Washington',
    state: 'DC',
    zip: '20001',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse N',
    street: '1111 Cedar St',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85001',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse O',
    street: '1212 Maple St',
    city: 'Houston',
    state: 'TX',
    zip: '77001',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse P',
    street: '1313 Oak St',
    city: 'Atlanta',
    state: 'GA',
    zip: '30301',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse Q',
    street: '1414 Pine St',
    city: 'Nashville',
    state: 'TN',
    zip: '37201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse R',
    street: '1515 Birch St',
    city: 'Detroit',
    state: 'MI',
    zip: '48201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse S',
    street: '1616 Oak St',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse T',
    street: '1717 Cedar St',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse U',
    street: '1818 Maple St',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse V',
    street: '1919 Oak St',
    city: 'Indianapolis',
    state: 'IN',
    zip: '46201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse W',
    street: '2020 Pine St',
    city: 'Cleveland',
    state: 'OH',
    zip: '44101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse X',
    street: '2121 Cedar St',
    city: 'Kansas City',
    state: 'MO',
    zip: '64101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse Y',
    street: '2222 Maple St',
    city: 'Omaha',
    state: 'NE',
    zip: '68101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse Z',
    street: '2323 Oak St',
    city: 'Tucson',
    state: 'AZ',
    zip: '85701',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AA',
    street: '2424 Pine St',
    city: 'New Orleans',
    state: 'LA',
    zip: '70112',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AB',
    street: '2525 Birch St',
    city: 'Charlotte',
    state: 'NC',
    zip: '28201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AC',
    street: '2626 Oak St',
    city: 'St. Louis',
    state: 'MO',
    zip: '63101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AD',
    street: '2727 Cedar St',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89101',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AE',
    street: '2828 Maple St',
    city: 'Orlando',
    state: 'FL',
    zip: '32801',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AF',
    street: '2929 Oak St',
    city: 'Pittsburgh',
    state: 'PA',
    zip: '15201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AG',
    street: '3030 Pine St',
    city: 'Buffalo',
    state: 'NY',
    zip: '14201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AH',
    street: '3131 Cedar St',
    city: 'Raleigh',
    state: 'NC',
    zip: '27601',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AI',
    street: '3232 Oak St',
    city: 'Columbus',
    state: 'OH',
    zip: '43201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AJ',
    street: '3333 Maple St',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AK',
    street: '3434 Pine St',
    city: 'Madison',
    state: 'WI',
    zip: '53701',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
  {
    locationName: 'Warehouse AL',
    street: '3535 Birch St',
    city: 'Birmingham',
    state: 'AL',
    zip: '35201',
    country: 'USA',
    stock: Math.floor(Math.random() * 1000) + 1,
  },
];

const ITEMS = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  sku: `16H9UR${index}`,
  quantity: index + 1,
  name: _mock.productName(index),
  coverUrl: _mock.image.product(index),
  price: _mock.number.price(index),
}));

export const _orders = [...Array(20)].map((_, index) =>
{
  // const shipping = 10;

  // const discount = 10;

  // const taxes = 10;

  const items = (index % 2 && ITEMS.slice(0, 1)) || (index % 3 && ITEMS.slice(1, 3)) || ITEMS;

  const totalQuantity = items.reduce((accumulator, item) => accumulator + item.quantity, 0);

  const available = items.reduce((accumulator, item) => accumulator/2 + item.quantity, 0)
  const inventoryType = index%2 === 0 ? 'out of stock': 'low stock';
  // const subtotal = items.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);

  // const totalAmount = subtotal - shipping - discount + taxes;

  // const customer = {
  //   id: _mock.id(index),
  //   name: _mock.fullName(index),
  //   email: _mock.email(index),
  //   avatarUrl: _mock.image.avatar(index),
  //   ipAddress: '192.158.1.38',
  // };

  // const delivery = { shipBy: 'DHL', speedy: 'Standard', trackingNumber: 'SPX037739199373' };

  // const history = {
  //   orderTime: _mock.time(1),
  //   paymentTime: _mock.time(2),
  //   deliveryTime: _mock.time(3),
  //   completionTime: _mock.time(4),
  //   timeline: [
  //     { title: 'Delivery successful', time: _mock.time(1) },
  //     { title: 'Transporting to [2]', time: _mock.time(2) },
  //     { title: 'Transporting to [1]', time: _mock.time(3) },
  //     { title: 'The shipping unit has picked up the goods', time: _mock.time(4) },
  //     { title: 'Order has been created', time: _mock.time(5) },
  //   ],
  // };

  return(
    {
    id: _mock.id(index),
    orderNumber: `#601${index}`,
    createdAt: _mock.time(index),
    // taxes,
    // items,
    // history,
    // subtotal,
    // shipping,
    // discount,
    // customer,
    // delivery,
    // totalAmount,
    // totalQuantity,
    // shippingAddress: {
    //   fullAddress: '19034 Verna Unions Apt. 164 - Honolulu, RI / 87535',
    //   phoneNumber: '365-374-4961',
    // },
    // payment: { cardType: 'mastercard', cardNumber: '**** **** **** 5678' },
    // status:
    //   (index % 2 && 'completed') ||
    //   (index % 3 && 'pending') ||
    //   (index % 4 && 'cancelled') ||
    //   'refunded',
    locationName: mockLocations[index % mockLocations.length].locationName,
    street: mockLocations[index % mockLocations.length].street,
    city: mockLocations[index % mockLocations.length].city,
    state: mockLocations[index % mockLocations.length].state,
    zip: mockLocations[index % mockLocations.length].zip,
    country: mockLocations[index % mockLocations.length].country,
    available,
    quantity: totalQuantity,
    inventoryType,

  })
}
);
