import "./Menu.css";
import Navbar from "../Navbar/Navbar";
import MenuItem from "./MenuItem";
import MenuCategory from "./MenuCategory";
import React, { useState, useEffect } from "react";
import menu from "/images/menu.png";

// Future move menudata into seperate api endpoint
const menuData = {
  categories: [
    {
      title: "Bagels",
      image: "https://ebcatering.com/usercontent/product_sub_img/Bagels&ShmearNoshBox2Dozen-830x3491.jpg",
    },
    {
      title: "Donuts",
      image: "https://thefirstyearblog.com/wp-content/uploads/2023/01/Gluten-Free-Donuts-Square.png",
    },
    {
      title: "Waffles",
      image: "https://www.splenda.com/wp-content/uploads/2020/12/fluffy-belgian-waffles-2000x1000.jpg",
    },
    {
      title: "Pancakes",
      image: "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/fluffyamericanpancak_74828_16x9.jpg.webp",
    },
    {
      title: "Eggs",
      image: "https://ncegg.org/wp-content/uploads/2018/03/Cloud-Eggs-with-Ham.jpg",
    },
    {
      title: "Sandwiches",
      image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/04/04/0/FN_BLACKSTONE-BREAKFAST-SANDWICHES-H-f_s4x3.jpg",
    },
    {
      title: "Toast",
      image: "https://www.budgetbytes.com/wp-content/uploads/2023/01/French-Toast-syrup.jpg",
    },
    {
      title: "Cereals",
      image: "https://images.squarespace-cdn.com/content/v1/569a6ade9cadb6436a7df7ad/1453000837141-9SWGDF6P26G4S4F9FYTL/home-carousel-image-1.jpg?format=2500w",
    },
    {
      title: "Sides",
      image: "https://media.istockphoto.com/id/147094980/photo/breakfast-eggs.jpg?s=612x612&w=0&k=20&c=yICvFV-aMQqV4fcf7UO_LZBssQGAIYpWn0WAiiqKTFw=",
    },
    {
      title: "Smoothies",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEjvVnhIxJ2CbACSdi0IG_bB7mOjzheSZQHtJImfjn4XnPSKMMy4T7LY5xsEon3gDY00&usqp=CAU",
    },
    {
      title: "Juices",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6317BvipOK5qyGQpVu4HH56SgoHNzCfRZg&s",
    },
    {
      title: "Coffee",
      image: "https://static.toiimg.com/thumb/msid-114292064,imgsize-114146,width-400,resizemode-4/114292064.jpg",
    },
  ],
};


const Menu = () => {
  const bagelObject = menuData.categories.find((c) => c.title === "Bagels");

  // Initialize cachedData from sessionStorage or empty object
  const [cachedData, setCachedData] = useState(() => {
    const savedCache = sessionStorage.getItem("menuCache");
    return savedCache ? JSON.parse(savedCache) : {};
  });

  const [selectedCategoryName, setSelectedCategoryName] = useState("Bagels");
  const [showServerBootMessage, setShowServerBootMessage] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(() => {
    // Use cached data for Bagels or fallback to bagelObject
    return cachedData["Bagels"] || bagelObject;
  });

  const [loading, setLoading] = useState(false);

  const apiKey1 = import.meta.env.VITE_API_KEY;
  const apiKey2 = import.meta.env.VITE_API_KEY_2;
  const apiKey3 = import.meta.env.VITE_API_KEY_3;

 useEffect(() => {
  if (cachedData[selectedCategoryName]) {
    console.log("Using cached data for category:", selectedCategoryName);
    setSelectedCategory(cachedData[selectedCategoryName]);
    setLoading(false);
    return;
  }

  setLoading(true);
  setShowServerBootMessage(false); // reset on new request

  const timeout = setTimeout(() => {
    setShowServerBootMessage(true);
  }, 10000); // 10 seconds

  fetch(`https://shauns-bagel-shop-backend.onrender.com/menu/${selectedCategoryName}`, {
    method: "GET",
    headers: {
      "api-key-1": apiKey1,
      "api-key-2": apiKey2,
      "api-key-3": apiKey3,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setSelectedCategory(data);

      setCachedData((prev) => {
        const updated = {
          ...prev,
          [selectedCategoryName]: data,
        };
        sessionStorage.setItem("menuCache", JSON.stringify(updated));
        return updated;
      });
    })
    .catch((error) => console.error("Error fetching data:", error))
    .finally(() => {
      clearTimeout(timeout); // stop showing the boot message
      setLoading(false);
    });
}, [selectedCategoryName]);

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      
      <img src={menu} alt="Top Right Icon" className="fixed-icon"  style={{    filter: "invert(87%) sepia(20%) saturate(241%) hue-rotate(25deg) brightness(98%) contrast(87%)"}}/>

      <Navbar />

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
                setSelectedCategoryName(category.title);
              }}
            />
          ))}
        </div>
      </aside>

      <div className="vertical-line-seperator"></div>

      <div className="menu-items-container">
        <div style={{ marginLeft: "2vw" }}>
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


        {loading ? (
          <div
            className="menu-items"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={"/images/loading.gif"}
              alt="Loading"
              style={{ width: "5vw", height: "5vw" }}
            />
            <p style={{ fontSize: "1.5vw", marginTop: "1vw" }}>
              Loading menu items...
            </p>

            {showServerBootMessage && (
              <p style={{ fontSize: "1vw", marginTop: "0.5vw", color: "#aaa" }}>
                Waiting for server to boot...
              </p>
            )}
          </div>
        ) : (
          <div className="menu-items">
            {selectedCategory.items &&
              selectedCategory.items.map((item, index) => (
                <MenuItem
                  image={item.image}
                  name={item.name}
                  key={index}
                  description={item.description}
                  rating={item.rating}
                  price={item.price}
                />
              ))}
          </div>
        )}



      </div>
    </div>
  );
};


export default Menu;
