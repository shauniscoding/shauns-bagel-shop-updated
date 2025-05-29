import "./Menu.css";
import MenuItem from "./MenuItem";
import MenuCategory from "./MenuCategory";
import React, { useState } from "react";

const menuData = {
  categories: [
    {
      title: "Bagels",
      slogan: "Freshly baked, chewy, and perfect for any time of day",
      image:
        "https://ebcatering.com/usercontent/product_sub_img/Bagels&ShmearNoshBox2Dozen-830x3491.jpg",
      items: [
        {
          name: "Classic Everything Bagel",
          description:
            "Loaded with sesame, poppy seeds, garlic, onion, and salt.",
          image:
            "https://colonelde.com/cdn/shop/files/SouthoftheBorderBeefRoast_3_1024x1024.png?v=1704148121",
          rating: 4.7,
          price: 1.99,
        },
        {
          name: "Cinnamon Raisin Bagel",
          description: "Sweet bagel with cinnamon swirls and plump raisins.",
          image:
            "https://foodovercomfort.com/wp-content/uploads/2024/04/sourdough-cinnamon-raisin-bagels-1.jpg",
          rating: 4.5,
          price: 2.29,
        },
      ],
    },
    {
      title: "Donuts",
      slogan: "Freshly made, fluffy, and perfectly sweet",
      image:
        "https://thefirstyearblog.com/wp-content/uploads/2023/01/Gluten-Free-Donuts-Square.png",
      items: [
        {
          name: "Cinnamon Sugar",
          description:
            "A classic donut coated generously with cinnamon and sugar.",
          image:
            "https://www.beyondthechickencoop.com/wp-content/uploads/2024/04/Cinnamon-Sugar-Cake-Donuts.jpg",
          rating: 4.6,
          price: 2.49,
        },
        {
          name: "Maple Bacon",
          description: "Sweet maple glaze topped with crispy bacon bits.",
          image:
            "https://images.squarespace-cdn.com/content/v1/5a9b45661137a61f8f83b732/1547596568405-YW0OIL3G54FYU22OZ7LB/IMG_4404.jpg",
          rating: 4.8,
          price: 3.99,
        },
        {
          name: "Strawberry Frosted",
          description: "Sweet strawberry icing with rainbow sprinkles.",
          image:
            "https://bakingmischief.com/wp-content/uploads/2016/05/strawberry-glazed-sencha-green-tea-doughnuts-2.jpg",
          rating: 4.5,
          price: 3.19,
        },
        {
          name: "Boston Cream",
          description: "Filled with vanilla custard and topped with chocolate.",
          image:
            "https://thebananadiaries.com/wp-content/uploads/2023/08/vegan-boston-cream-donuts_6421.jpg",
          rating: 4.8,
          price: 3.49,
        },
        {
          name: "Glazed Classic",
          description: "Light and airy with a sweet sugar glaze.",
          image:
            "https://www.sprinkleofthis.com/wp-content/uploads/2020/03/DSC_9390.jpg",
          rating: 4.6,
          price: 2.49,
        },
        {
          name: "Red Velvet",
          description:
            "Rich red velvet donut topped with cream cheese frosting.",
          image:
            "https://gingersnapsbakingaffairs.com/wp-content/uploads/2024/01/red-velvet-donuts-plated-1200px.jpg",
          rating: 4.7,
          price: 3.29,
        },
        {
          name: "Lemon Glazed",
          description: "Zesty lemon glaze over a soft, fluffy donut.",
          image:
            "https://stephaniessweets.com/wp-content/uploads/2023/05/IMG_3220.jpg",
          rating: 4.4,
          price: 2.89,
        },
        {
          name: "Blueberry Basil",
          description: "Fresh blueberry glaze infused with hints of basil.",
          image:
            "https://bromabakery.com/wp-content/uploads/2013/05/MG_3292-2.jpg",
          rating: 4.5,
          price: 3.19,
        },
        {
          name: "Salted Caramel",
          description: "Rich caramel glaze sprinkled with sea salt flakes.",
          image:
            "https://maisonmarmite.com/wp-content/uploads/2024/02/donuts-salt-caramel-sale-max-00.jpg",
          rating: 4.6,
          price: 3.39,
        },
        {
          name: "Cookies & Cream",
          description: "Vanilla icing topped with crushed chocolate cookies.",
          image:
            "https://bakerbynature.com/wp-content/uploads/2016/03/IMG_7694-7-3.jpg",
          rating: 4.7,
          price: 3.49,
        },
      ],
    },
    {
      title: "Waffles",
      slogan: "Golden, crispy on the outside, soft and fluffy inside",
      image:
        "https://www.splenda.com/wp-content/uploads/2020/12/fluffy-belgian-waffles-2000x1000.jpg",
      items: [
        {
          name: "Classic Belgian Waffle",
          description: "Light and crispy Belgian waffle with maple syrup.",
          image: "https://example.com/images/classic-belgian-waffle.jpg",
          rating: 4.7,
          price: 4.99,
        },
        {
          name: "Chocolate Chip Waffle",
          description: "Waffle filled with melted chocolate chips.",
          image: "https://example.com/images/choc-chip-waffle.jpg",
          rating: 4.5,
          price: 5.29,
        },
      ],
    },
    {
      title: "Pancakes",
      slogan: "Fluffy stacks served warm with your favorite toppings",
      image:
        "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/fluffyamericanpancak_74828_16x9.jpg.webp",
      items: [
        {
          name: "Buttermilk Pancakes",
          description: "Classic buttermilk pancakes with butter and syrup.",
          image: "https://example.com/images/buttermilk-pancakes.jpg",
          rating: 4.8,
          price: 4.49,
        },
        {
          name: "Blueberry Pancakes",
          description: "Fluffy pancakes bursting with fresh blueberries.",
          image: "https://example.com/images/blueberry-pancakes.jpg",
          rating: 4.7,
          price: 4.99,
        },
      ],
    },
    {
      title: "Eggs",
      slogan: "Farm fresh eggs cooked just the way you like",
      image:
        "https://ncegg.org/wp-content/uploads/2018/03/Cloud-Eggs-with-Ham.jpg",
      items: [
        {
          name: "Classic Scrambled Eggs",
          description: "Soft and creamy scrambled eggs with a hint of butter.",
          image: "https://example.com/images/scrambled-eggs.jpg",
          rating: 4.6,
          price: 3.99,
        },
        {
          name: "Cloud Eggs",
          description:
            "Whipped egg whites baked to fluffy perfection with yolk centers.",
          image: "https://example.com/images/cloud-eggs.jpg",
          rating: 4.8,
          price: 5.49,
        },
      ],
    },
  ],
};

const Menu = () => {
  const bagelObject = menuData.categories.find((c) => c.title === "Bagels");
  const [selectedCategory, setSelectedCategory] = useState(bagelObject);

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <aside className="menu-container">
        <h1 style={{ fontSize: "2.4vw" }}>Our Menu</h1>
        <div className="menu-categories-container">
          {menuData.categories.map((category, index) => (
            <MenuCategory
              category={category.title}
              image={category.image}
              key={index}
              onClick={() => {
                console.log("Category clicked:", category.title);
                const selected = menuData.categories.find(
                  (c) => c.title === category.title
                );
                console.log(selected);
                setSelectedCategory(selected);
              }}
            />
          ))}
        </div>
      </aside>

      <div className="vertical-line-seperator"></div>

      <div className="menu-items-container">
        <div
          style={{
            marginLeft: "2vw",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "3vw",
                height: "0.25vw",
                backgroundColor: "#D9CAA0",
                marginRight: "0px",
              }}
            ></div>
            <h1
              style={{
                fontSize: "2.4vw",
                marginBottom: "0px",
                marginTop: "0px",
                marginLeft: "0px",
              }}
            >
              {selectedCategory.title}
            </h1>
          </div>
          <p style={{ marginTop: "0px", marginLeft: "5.5vw", fontSize: "1vw" }}>
            {selectedCategory.slogan}
          </p>
        </div>

        <div className="menu-items">
          {selectedCategory.items.map((item, index) => (
            <MenuItem
              image={item.image}
              name={item.name}
              key={index}
              description={item.description}
              rating={item.rating}
              price={item.price}
            />
          ))}

          {/* Add more MenuItem components as needed */}
        </div>
      </div>
    </div>
  );
};
export default Menu;
