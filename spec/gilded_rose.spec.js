const { Shop, Item } = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {
  it("should decrease quality and sellIn for normal items", () => {
    const items = [new Item("Elixir of the Mongoose", 5, 7)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(6);
  });

  it("should not let quality go below 0", () => {
    const items = [new Item("Elixir", 0, 0)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should degrade twice as fast after sellIn < 0", () => {
    const items = [new Item("Elixir", 0, 10)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("Aged Brie increases in quality over time", () => {
    const items = [new Item("Aged Brie", 2, 0)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("Aged Brie increases by 2 after expiration", () => {
    const items = [new Item("Aged Brie", 0, 0)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("Quality never exceeds 50 (Brie)", () => {
    const items = [new Item("Aged Brie", 5, 50)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("Sulfuras never changes", () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  it("Backstage pass increases by 2 when 10 days or less", () => {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  it("Backstage pass increases by 3 when 5 days or less", () => {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(23);
  });

  it("Backstage pass drops to 0 after concert", () => {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Conjured items degrade twice as fast", () => {
    const items = [new Item("Conjured Mana Cake", 3, 6)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  it("Conjured items degrade 4 when sellIn < 0", () => {
    const items = [new Item("Conjured Mana Cake", 0, 6)];
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(2);
  });
});

