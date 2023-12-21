import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ProductOverView from "./components/ProductOverView";
import ProductDetail from "./components/ProductDetail";

function App() {
  // {
  //   id: uuidv4(),
  //   name: "",
  //   description: {},
  //   stock: 1000,
  //   price: ,
  //   priceWithDiscount: 0,
  //   incredibleOffers: true,
  //   dailySugesst: false,
  //   indexImgUrl: "",
  //   images: [
  //     {
  //       id: uuidv4(),
  //       original: "",
  //       thumbnail: "",
  //     },
  //     {
  //       id: uuidv4(),
  //       original: "",
  //       thumbnail: "",
  //     },
  //     {
  //       id: uuidv4(),
  //       original: "",
  //       thumbnail: "",
  //     },
  //   ],
  // },

  // {
  //   id: uuidv4(),
  //   name: "Apple Watch Ultra 2",
  //   description: `
  //   Tough 49mm titanium case with customizable Action button strikes a balance with weight, ruggedness, and corrosion resistance
  //   All-new S9 SiP powers our brightest display ever and a magical new way to use your watch without touching the screen
  //   The most accurate GPS in a sports watch in dense urban environments  footnote  1
  //   Up to 36 hours of battery life, up to 72 hours on low power settings,  footnote  2 and up to 17 hours of workout use in Low Power Mode  footnote  3
  //   Pair with three band styles specialized for outdoor adventure, water sports, and all workout types`,
  //   stock: 1000,
  //   price: 799,
  //   priceWithDiscount: 0,
  //   incredibleOffers: true,
  //   dailySugesst: false,
  //   indexImgUrl:
  //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-1-202309?wid=364&hei=333&fmt=jpeg&qlt=95&.v=1692603382757",
  //   images: [
  //     {
  //       id: uuidv4(),
  //       original:
  //         "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-2-202309?wid=364&hei=333&fmt=png-alpha&.v=1692603384610",
  //       thumbnail: "",
  //     },
  //     {
  //       id: uuidv4(),
  //       original: "",
  //       thumbnail:
  //         "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-5-202309?wid=364&hei=333&fmt=png-alpha&.v=1692603386501",
  //     },
  //   ],
  // },

  // {
  //   id: uuidv4(),
  //   name: "Apple Watch Series 9",
  //   description: `
  //   Brighter Always-On Retina display with a durable, crack-resistant front crystal
  //   Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more
  //   With advanced workout metrics and views
  //   The all-new S9 SiP powers a magical new way to use your watch without touching the screen
  //   Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection`,
  //   stock: 1000,
  //   price: 399,
  //   priceWithDiscount: 0,
  //   incredibleOffers: true,
  //   dailySugesst: false,
  //   indexImgUrl:
  //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJ93ref_VW_34FR+watch-case-45-stainless-silver-s9_VW_34FR+watch-face-45-stainless-silver-s9_VW_34FR?wid=375&hei=356&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507905569",
  //   images: [
  //     {
  //       id: uuidv4(),
  //       original:
  //         "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-digitalmat-gallery-3-202309?wid=364&hei=333&fmt=png-alpha&.v=1692847847702",
  //       thumbnail: "",
  //     },
  //     {
  //       id: uuidv4(),
  //       original:
  //         "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-digitalmat-gallery-2-202309?wid=364&hei=333&fmt=png-alpha&.v=1692847849852",
  //       thumbnail: "",
  //     },
  //   ],
  // },

  const [product, setProduct] = useState([
    {
      id: uuidv4(),
      name: "iMac",
      description: `
        Supercharged by the Apple M3 chip, so everything you do on your iMac is incredibly fast and responsive
        Immersive 24-inch 4.5K Retina display Footnote¹
        Strikingly thin all-in-one desktop in seven vibrant colors
        Look sharp and sound great with the 1080p FaceTime HD camera, three-mic array, and six-speaker sound system with Spatial Audio
        Color-matched Magic Mouse and Magic Keyboard included`,
      stock: 1000,
      price: 1299,
      priceWithDiscount: 0,
      incredibleOffers: true,
      dailySugesst: false,
      indexImgUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=364&hei=333&fmt=png-alpha&.v=1697559004117",
      images: [
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-2-202310?wid=364&hei=333&fmt=png-alpha&.v=1697559004207",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202310?wid=364&hei=333&fmt=png-alpha&.v=1697559004001",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202310?wid=364&hei=333&fmt=png-alpha&.v=1697559005165",
          thumbnail: "",
        },
      ],
    },

    {
      id: uuidv4(),
      name: "Mac mini",
      description: `
      Do more and do it faster with the next-generation M2 or M2 Pro chip
      Mac mini turns any desk into a powerful workstation, so you can create, code and collaborate
      Customize your setup using Mac mini’s two or four Thunderbolt 4 ports, two USB-A ports, HDMI, and Gigabit Ethernet
      Complete your system with Studio Display and Magic accessories`,
      stock: 1000,
      price: 599,
      priceWithDiscount: 0,
      incredibleOffers: true,
      dailySugesst: false,
      indexImgUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-4-202301?wid=364&hei=333&fmt=png-alpha&.v=1670038169062",
      images: [
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-5-202301_GEO_US?wid=364&hei=333&fmt=png-alpha&.v=1670916363771",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-2-202301?wid=364&hei=333&fmt=png-alpha&.v=1670038166655",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-3-202301?wid=364&hei=333&fmt=png-alpha&.v=1670038165453",
          thumbnail: "",
        },
      ],
    },

    {
      id: uuidv4(),
      name: "MacBook Pro",
      description: `
      With M3, M3 Pro, or M3 Max, our most advanced chips for personal computers, MacBook Pro empowers you to take on the most demanding projects
      Go all day with up to 22 hours of battery life
      Liquid Retina XDR display is the best ever in a laptop, with Extreme Dynamic Range, incredible contrast, and true-to-life colors
      Look sharp and sound clear — anywhere — with the 1080p FaceTime HD camera, three studio-quality mics, and six speakers with Spatial Audio
      Connect everything you need with up to three Thunderbolt 4 ports, an SDXC card slot, an HDMI port, a MagSafe 3 port, and a headphone jack`,
      stock: 1000,
      price: 1599,
      priceWithDiscount: 1499,
      incredibleOffers: true,
      dailySugesst: false,
      indexImgUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202310?wid=364&hei=333&fmt=png-alpha&.v=1696971522628",
      images: [
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-2-202310?wid=364&hei=333&fmt=png-alpha&.v=1697915602337",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-3-202310?wid=364&hei=333&fmt=png-alpha&.v=1696971522864",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-7-202310?wid=364&hei=333&fmt=png-alpha&.v=1696971527085",
          thumbnail: "",
        },
      ],
    },

    {
      id: uuidv4(),
      name: "MacBook Air",
      description: `
      Strikingly thin design so you can work, play, or create just about anything — anywhere
      Get more done faster with the blazing-fast Apple M2 chip
      Go all day with up to 18 hours of battery life¹
      The brilliant 13.6-inch Liquid Retina display features 500 nits of brightness, P3 wide color, and support for one billion colors²
      Look sharp and sound great with a 1080p FaceTime HD camera, three-mic array, and four-speaker sound system with Spatial Audio`,
      stock: 1000,
      price: 1099,
      priceWithDiscount: 999,
      incredibleOffers: true,
      dailySugesst: false,
      indexImgUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-1-202306?wid=364&hei=333&fmt=png-alpha&.v=1683914347188",
      images: [
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-2-202306?wid=364&hei=333&fmt=png-alpha&.v=1683914347552",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-3-202306?wid=364&hei=333&fmt=png-alpha&.v=1683914347165",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-5-202306?wid=364&hei=333&fmt=png-alpha&.v=1683914347536",
          thumbnail: "",
        },
      ],
    },

    {
      id: uuidv4(),
      name: "iPad Pro",
      description: `
      The Apple M2 chip powers a massive leap in performance for pro workflows and all-day battery life¹
      11-inch Liquid Retina display footnote ² with ProMotion, True Tone, and P3 wide color
      Pro cameras with LiDAR Scanner, and Ultra Wide front camera with Center Stage
      Wi-Fi 6E for the fastest Wi-Fi connections. And 5G for superfast downloads and high-quality streaming.³
      Compatible with Apple Pencil (2nd generation), Apple Pencil (USBC), Magic Keyboard, and Smart Keyboard Folio⁴
      `,
      stock: 1000,
      price: 799,
      priceWithDiscount: 0,
      incredibleOffers: true,
      dailySugesst: false,
      indexImgUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=364&hei=333&fmt=png-alpha&.v=1664477161220",
      images: [
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-2-202210?wid=364&hei=333&fmt=png-alpha&.v=1665083965975",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-4-202210?wid=364&hei=333&fmt=png-alpha&.v=1664477161238",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-5-202210?wid=364&hei=333&fmt=png-alpha&.v=1664477161177",
          thumbnail: "",
        },
      ],
    },

    {
      id: uuidv4(),
      name: "iPad Air",
      description: `
      Apple M1 chip powers next-level performance and all-day battery life
      10.9-inch Liquid Retina display delivers an immersive viewing experience
      12MP Ultra Wide front camera with Center Stage for more natural video calls
      Get blazing-fast 5G on cellular models and superfast Wi-Fi with Wi-Fi 6
      Compatible with Apple Pencil (2nd generation), Apple Pencil (USBC), Magic Keyboard, and Smart Keyboard Folio⁴`,
      stock: 1000,
      price: 599,
      priceWithDiscount: 0,
      incredibleOffers: true,
      dailySugesst: false,
      indexImgUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadair-digitalmat-gallery-1-202203?wid=364&hei=333&fmt=jpeg&qlt=95&.v=1644962768135",
      images: [
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadair-digitalmat-gallery-2-202203_GEO_US?wid=364&hei=333&fmt=png-alpha&.v=1645724601636",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadair-digitalmat-gallery-4-202203?wid=364&hei=333&fmt=jpeg&qlt=95&.v=1644962768511",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadair-digitalmat-gallery-5-202203?wid=364&hei=333&fmt=png-alpha&.v=1644962768260",
          thumbnail: "",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "iphone 15 Pro",
      description: `
      6.1-inch Super Retina XDR display footnote ¹ featuring ProMotion, Always-On, and Dynamic Island
      Strong and light titanium design with Action button — a fast track to your favorite feature
      48MP Main camera for super-high-resolution photos and 3x Telephoto camera
      A17 Pro chip delivers a massive leap in graphics performance, transforming mobile gaming
      USB-C connector with USB 3 for up to 20x faster transfer speeds footnote ² and new pro workflows`,
      stock: 1000,
      price: 999,
      priceWithDiscount: 0,
      incredibleOffers: true,
      dailySugesst: false,
      indexImgUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1693346851451",
      images: [
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=364&hei=333&fmt=png-alpha&.v=1693081541434",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=364&hei=333&fmt=jpeg&qlt=95&.v=1693081542280",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-5-202309?wid=364&hei=333&fmt=png-alpha&.v=1693081541860",
          thumbnail: "",
        },
      ],
    },

    {
      id: uuidv4(),
      name: "iphone 15",
      description: `
      6.1-inch durable color-infused glass and aluminum design footnote ◊ with Ceramic Shield front
      Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else
      48MP Main camera with 2x Telephoto captures breathtaking detail up close or far away
      A16 Bionic powers computational photography and smooth gaming performance with great efficiency for all-day battery life
      Connect and charge with USB-C`,

      stock: 1000,
      price: 799,
      priceWithDiscount: 699,
      incredibleOffers: true,
      dailySugesst: false,
      indexImgUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1693346853617",
      images: [
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15-digitalmat-gallery-2-202309?wid=364&hei=333&fmt=png-alpha&.v=1693011169058",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15-digitalmat-gallery-5-202309?wid=364&hei=333&fmt=png-alpha&.v=1693011169178",
          thumbnail: "",
        },
        {
          id: uuidv4(),
          original:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15-digitalmat-gallery-6-202309?wid=364&hei=333&fmt=png-alpha&.v=1693011169183",
          thumbnail: "",
        },
      ],
    },
  ]);

  const [detailedProduct, setdetailedProduct] = useState(product[0]);

  const ProductDetailsById = (id) => {
    product.map((item) => {
      if (item.id === id) {
        setdetailedProduct(item);
      }
    });
  };

  return (
    <div className="productsCard">
      <div className="overView">
        {product.map((item) => {
          return (
            <ProductOverView
              id={item.id}
              name={item.name}
              img={item.indexImgUrl}
              ProductDetailsById={ProductDetailsById}
              detailedProduct={detailedProduct}
            />
          );
        })}
      </div>
      <div className="details">
        <ProductDetail detailedProduct={detailedProduct} />
      </div>
    </div>
  );
}

export default App;
