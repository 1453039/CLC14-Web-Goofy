module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty;
    this.totalPrice = oldCart.totalPrice;

    this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.newprice * storedItem.qty;
        this.totalQty++;
        this.totalPrice = this.totalPrice + storedItem.item.newprice;
    }

    this.delete = function(id) {
        this.totalQty = this.totalQty - this.items[id].qty;
        this.totalPrice = this.totalPrice - this.items[id].price;
        delete this.items[id];
    }

    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };

    this.changeQty = function(id, quantity) {
        this.totalQty = this.totalQty + (quantity - this.items[id].qty);
        this.totalPrice = this.totalPrice + (this.items[id].item.newprice * (quantity - this.items[id].qty));

        this.items[id].qty = quantity;
        this.items[id].price = this.items[id].item.newprice * this.items[id].qty;
    };
};