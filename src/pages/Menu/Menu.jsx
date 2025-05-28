import "./Menu.css";
import MenuItem from "./MenuItem";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <aside
        className="menu-container"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "17vw",
          height: "100vh",
          borderRight: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "1vw",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "2.4vw" }}>Our Menu</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1vw",
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            scrollbarWidth: "none", // for Firefox
            msOverflowStyle: "none", // for IE and Edge
            boxSizing: "border-box",
          }}
        >
          <MenuCategory
            image="https://www.splenda.com/wp-content/uploads/2020/12/fluffy-belgian-waffles-2000x1000.jpg"
            category="Waffles"
          />
          <MenuCategory
            image="https://ebcatering.com/usercontent/product_sub_img/Bagels&ShmearNoshBox2Dozen-830x3491.jpg"
            category="Bagels"
          />
          <MenuCategory
            image="https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/fluffyamericanpancak_74828_16x9.jpg.webp"
            category="Pancakes"
          />
          <MenuCategory
            image="https://ncegg.org/wp-content/uploads/2018/03/Cloud-Eggs-with-Ham.jpg"
            category="Eggs"
          />
        </div>
      </aside>

      <div
        style={{
          backgroundColor: "#D9CAA0",
          width: "5px",
          height: "92vh",
          position: "fixed",
          left: "17vw",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></div>

      <div
        className="menu-items-container"
        style={{
          width: "100%",
          height: "95%",
          // backgroundColor: "red",
          position: "fixed",
          left: "18vw",
          marginTop: "2vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            // backgroundColor: "green",
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
              Donuts
            </h1>
          </div>
          <p style={{ marginTop: "0px", marginLeft: "5.5vw", fontSize: "1vw" }}>
            Freshly made, fluffy, and perfectly sweet
          </p>
        </div>

        <div
          className="menu-items"
          style={{
            width: "81%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // exactly 2 items per row
            gap: "1vw",
            padding: "1vw",
            boxSizing: "border-box",
            overflowY: "auto", // makes it vertically scrollable
          }}
        >
          <MenuItem
            image="https://www.beyondthechickencoop.com/wp-content/uploads/2024/04/Cinnamon-Sugar-Cake-Donuts.jpg"
            name="Cinnamon Sugar"
            description="A classic donut coated generously with cinnamon and sugar."
            rating={4.6}
            price={2.49}
          />

          <MenuItem
            image="https://images.squarespace-cdn.com/content/v1/5a9b45661137a61f8f83b732/1547596568405-YW0OIL3G54FYU22OZ7LB/IMG_4404.jpg"
            name="Maple Bacon"
            description="Sweet maple glaze topped with crispy bacon bits."
            rating={4.8}
            price={3.99}
          />

          <MenuItem
            image="https://bakingmischief.com/wp-content/uploads/2016/05/strawberry-glazed-sencha-green-tea-doughnuts-2.jpg"
            name="Strawberry Frosted"
            description="Sweet strawberry icing with rainbow sprinkles."
            rating={4.5}
            price={3.19}
          />

          <MenuItem
            image="https://thebananadiaries.com/wp-content/uploads/2023/08/vegan-boston-cream-donuts_6421.jpg"
            name="Boston Cream"
            description="Filled with vanilla custard and topped with chocolate."
            rating={4.8}
            price={3.49}
          />

          <MenuItem
            image="https://www.sprinkleofthis.com/wp-content/uploads/2020/03/DSC_9390.jpg"
            name="Glazed Classic"
            description="Light and airy with a sweet sugar glaze."
            rating={4.6}
            price={2.49}
          />

          <MenuItem
            image="https://gingersnapsbakingaffairs.com/wp-content/uploads/2024/01/red-velvet-donuts-plated-1200px.jpg"
            name="Red Velvet"
            description="Rich red velvet donut topped with cream cheese frosting."
            rating={4.7}
            price={3.29}
          />

          <MenuItem
            image="https://stephaniessweets.com/wp-content/uploads/2023/05/IMG_3220.jpg"
            name="Lemon Glazed"
            description="Zesty lemon glaze over a soft, fluffy donut."
            rating={4.4}
            price={2.89}
          />

          <MenuItem
            image="https://bromabakery.com/wp-content/uploads/2013/05/MG_3292-2.jpg"
            name="Blueberry Basil"
            description="Fresh blueberry glaze infused with hints of basil."
            rating={4.5}
            price={3.19}
          />

          <MenuItem
            image="https://maisonmarmite.com/wp-content/uploads/2024/02/donuts-salt-caramel-sale-max-00.jpg"
            name="Salted Caramel"
            description="Rich caramel glaze sprinkled with sea salt flakes."
            rating={4.6}
            price={3.39}
          />

          <MenuItem
            image="https://bakerbynature.com/wp-content/uploads/2016/03/IMG_7694-7-3.jpg"
            name="Cookies & Cream"
            description="Vanilla icing topped with crushed chocolate cookies."
            rating={4.7}
            price={3.49}
          />

          {/* Add more MenuItem components as needed */}
        </div>
      </div>
    </div>
  );
};
export default Menu;
