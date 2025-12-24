const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  addItem(id, quantity = 1) {
    const existing = this.items.find(item => item.id === id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      const product = getProductById(id);
      if (product) {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity
        });
      }
    }
    this.save();
    this.updateCartBadge();
    this.showNotification('Товар добавлен в корзину');
  },

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.save();
    this.updateCartBadge();
  },

  updateQuantity(id, quantity) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.save();
      this.updateCartBadge();
    }
  },

  save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  },

  updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (!badge) return; // ⚠️ защищаем от ошибки
    const total = this.items.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = total > 0 ? total : '';
  },

  showNotification(message) {
    let notification = document.querySelector('.cart-notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.className = 'cart-notification';
      document.body.appendChild(notification);
    }
    notification.textContent = message;
    notification.classList.remove('show');
    void notification.offsetWidth;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
  },

  // === ИНИЦИАЛИЗАЦИЯ ===
  init() {
    const saved = localStorage.getItem('cart');
    this.items = saved ? JSON.parse(saved) : [];
    this.updateCartBadge();
  }
};