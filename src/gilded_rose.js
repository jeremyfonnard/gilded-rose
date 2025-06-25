class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class Shop {
    constructor(items = []) {
      this.items = items;
    }
  
    updateQuality() {
      for (let item of this.items) {
        switch (true) {
          case item.name === 'Sulfuras, Hand of Ragnaros':
            // Légendaire : ne change jamais
            break;
  
          case item.name === 'Aged Brie':
            this._updateAgedBrie(item);
            break;
  
          case item.name.startsWith('Backstage passes'):
            this._updateBackstagePass(item);
            break;
  
          case item.name.startsWith('Conjured'):
            this._updateConjuredItem(item);
            break;
  
          default:
            this._updateNormalItem(item);
        }
      }
  
      return this.items;
    }
  
    _decreaseSellIn(item) {
      item.sellIn -= 1;
    }
  
    _increaseQuality(item, amount = 1) {
      item.quality = Math.min(50, item.quality + amount);
    }
  
    _decreaseQuality(item, amount = 1) {
      item.quality = Math.max(0, item.quality - amount);
    }
  
    _updateNormalItem(item) {
      this._decreaseQuality(item, item.sellIn <= 0 ? 2 : 1);
      this._decreaseSellIn(item);
    }
  
    _updateConjuredItem(item) {
      this._decreaseQuality(item, item.sellIn <= 0 ? 4 : 2);
      this._decreaseSellIn(item);
    }
  
    _updateAgedBrie(item) {
      this._increaseQuality(item, item.sellIn <= 0 ? 2 : 1);
      this._decreaseSellIn(item);
    }
  
    _updateBackstagePass(item) {
      if (item.sellIn <= 0) {
        item.quality = 0;
      } else if (item.sellIn <= 5) {
        this._increaseQuality(item, 3);
      } else if (item.sellIn <= 10) {
        this._increaseQuality(item, 2);
      } else {
        this._increaseQuality(item);
      }
      this._decreaseSellIn(item);
    }
  }
  
  module.exports = {
    Item,
    Shop
  };
  