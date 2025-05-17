// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
const orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  const order = new Order(generateUniqueId(), customerName, items, totalPrice, 'Menunggu') ;

  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  
  // If order not found (with parameter id). Dont do more
  if (!order) return;

  order.status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .flatMap((order) => order.items)
    .reduce((acc, item) => acc + item.price, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const indexOrder = orders.findIndex(order => order.id === id);

  if(indexOrder === -1) return;

  orders.splice(indexOrder, 1);
}

class Order {
  constructor(id, customerName, items, totalPrice, status) {
    this.id = id;
    this.customerName = customerName;
    this.items = items;
    this.totalPrice = totalPrice;
    this.status = status;
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };