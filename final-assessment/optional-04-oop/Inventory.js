/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  
  constructor(items = []) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    const indexItem = this.items.findIndex(item => item.id === id);

    if(indexItem === -1) return;

    this.items.splice(indexItem, 1);
  }

  listItems() {
    if (this.items.length === 0) return "";

    return this.items.map( item =>
      item.displayDetails()
    ).join("\n");
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;