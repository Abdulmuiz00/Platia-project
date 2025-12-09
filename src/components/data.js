import assets from "../assets/assets";
import dessert4 from "../assets/restaurant/dessert-4.webp";
import dessert9 from "../assets/restaurant/dessert-9.webp";

export const foodData = {
  appetizers: [
    {
      id: 1,
      name: "Prosciutto-Wrapped Asparagus",
      tag: "V",
      price: "$12.50",
      description: "Vivamus tempor magna et tempus elementum. Sed consequat libero vel mauris cursus.",
      img:assets.starter1,
    },
    {
      id: 2,
      name: "Seared Scallops with Cauliflower",
      tag: "SF",
      price: "$14.95",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac",
      img: assets.starter3,
    },
  ],
  Entrees: [
    {
      id: 1,
      name: "Herb-Crusted Rack of Lamb",
      tag: "CHEF's CHOICE",
      price: "$28.00",
      description: "Mauris auctor nulla et felis tempor, eu consectetur ante vulputate non.",
      img: assets.main2,
    },
    {
      id: 2,
      name: "Quinoa Stuffed Bell Peppers",
      tag: "GF",
      price: "$18.00",
      description: "Donec vel nunc non erat vehicula cursus. Integer pharetra mauris vel lorem.",
      img: assets.main6,
    },
  ],
  sweet_treats: [
    {
      id: 1,
      name: "Salted Caramel Cheesecake",
      tag: "SIGNATURE",
      price: "$11.25",
      description:
        "Cras fermentum odio eu feugiat luctus. Aliquam erat volutpat sed bibendum.",
      img:  dessert4 ,
    },
    {
      id: 2,
      name: "Dark Chocolate Avocado Mousse",
      tag: "SIGNATURE",
      price: "$9.50",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
      img: dessert9 ,
    },
  ],
  Beverages: [
    {
      id: 1,
      name: "Elderflower Gin Fizz",
      tag: "18+",
      price: "$15.00",
      description: "Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.",
      img: assets.drink2,
    },
    {
      id: 2,
      name: "Tropical Green Smoothie",
      tag: "FRESH",
      price: "$8.75",
      description: "Ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris.",
      img: assets.drink6,
    },
  ],
};
