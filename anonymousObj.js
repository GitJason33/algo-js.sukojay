// goal: optimize the array of flowers to less code

// 105 lines of code for 21 items
const flowers = [
  // 0 -> 8
  { // 1.1
    source: "flower 1.jpg",
    description: "White",
    code: "Code: PTY0667",
  },
  { // 1.2
    source: "flower 2.jpg",
    description: "Silver plated",
    code: "Code: WBT024",
  },
  { // 1.3
    source: "flower 3.jpg",
    description: "Pearl",
    code: "Code: HF24",
  },
  { // 1.4
    source: "flower 4.jpg",
    description: "Crystal rhinestone",
    code: "Code: FBY03295",
  },
  { // 1.5
    source: "flower 6.jpg",
    description: "White",
    code: "Code: WBT043",
  },
  { // 1.6
    source: "flower 7.jpg",
    description: "White",
    code: "Code: WBT044",
  },
  { // 1.7
    source: "flower 8.jpg",
    description: "White",
    code: "Code: WBT060",
  },
  { // 1.8
    source: "flower 10.jpg",
    description: "Crystal diamond",
    code: "Code: T4177",
  },
  { // 1.9
    source: "flower 11.jpg",
    description: "Silver Pearl crystal",
    code: "Code: PTY0669",
  },
  // 9 -> 17
  { // 2.1
    source: "flower 12.jpg",
    description: "pearl crystal feather",
    code: "Code: HF03",
  },
  { // 2.2
    source: "flower 13.jpg",
    description: "Crystal feather",
    code: "Code: PTY0668-1",
  },
  { // 2.3
    source: "flower 14.jpg",
    description: "Silver feather",
    code: "Code: PTY0266-3",
  },
  { // 2.4
    source: "flower 15.jpg",
    description: "Silver crystal",
    code: "Code: PTY0261",
  },
  { // 2.5
    source: "flower 16.jpg",
    description: "Natural",
    code: "Code: WBT051",
  },
  { // 2.6
    source: "flower 17.jpg",
    description: "Pearl Silver",
    code: "Code: WBT041",
  },
  {// 2.7
    source: "flower 18.jpg",
    description: "Silver plated",
    code: "Code: PTY0671",
  },
  { // 2.8
    source: "flower 21.jpg",
    description: "Gold plated",
    code: "Code: PTY0672",
  },
  { // 2.9
    source: "flower 22.jpg",
    description: "Crystal diamond",
    code: "Code: PTY0668-2",
  },
  // 18 -> 21
  { // 3.1
    source: "flower 23.jpg",
    description: "Silver Bouquets",
    code: "Code: PTY0266-5",
  },
  { // 3.2
    source: "flower 24.jpg",
    description: "White crystal",
    code: "Code: WBT034",
  },
  { // 3.3
    source: "flower 25.jpeg",
    description: "White red silk diamond",
    code: "Code: FBY0394",
  },
];
console.log(flowers.length);

// 10 lines
class Item{
  static _itemCount = 0;
  constructor(source, description, code){
    this.source = source;
    this.description = description;
    this.code = code;

    Item._itemCount++;
  }
  get itemCount(){ return this._itemCount; } 
  toHTML() { return `<span>${this.description}<br/>Code: ${this.code}</span>`; }
}

// 21 lines of code for 21 items plus 10 for the class
let optimized = [
  // page 1
  new Item("flower 1.jpg", "White", "PTY0667"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  // page 2
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  // page 3
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024"),
  new Item("flower 2.jpg", "Silver plated", "WBT024")
];

