class Cache {
  constructor(limit) {
    this.limit = limit || 10;
    this.data = {};
    this.order = [];
  }

  hasItem = (key) => this.order.includes(key);

  getItem = (key) => this.data[key];

  setItem = (key, item) => {
    if (this.size() === this.limit) {
      const data = {};
      this.order = this.order.slice(0, this.limit - 1);
      this.order.forEach((id) => {
        data[id] = this.data[id];
      });
      this.data = data;
    }

    this.order.unshift(key);
    this.data[key] = item;
  };

  size = () => Object.keys(this.data).length;

  cleanup = () => {
    this.data = {};
  };
}

export default Cache;
