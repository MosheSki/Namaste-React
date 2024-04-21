import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 *  - Cart
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, Tags, Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, tags, rating, estimate } = resData?.venue;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="logo" src={resData.image.url} />
      <h3>{name}</h3>
      <h4>"{tags.join(", ")}"</h4>
      <h4>{rating.score}⭐</h4>
      <h4>estimate delivery: {estimate}min</h4>
    </div>
  );
};

const resList = [
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: ["street_food", "burgers"],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "j9EnNETt;:T7;:8PTtcPbeh4ndh4",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/6466261649e7ea7fa00ff0e7/dc5cb436-f57e-11ed-9ffb-b26e129e6381_c3a676bc_73aa_11ed_9bb0_3ef69a472362_5f9a501e_7169_11ed_b524_76ae382c7cdd_____________wolt.jpg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "6466261649e7ea7fa00ff0e7",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "jbAmlbhrGph4;qd5XaGGPcLcTbPb",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 0,
        },
        {
          id: "rating",
          value: 328,
        },
        {
          id: "delivery-estimate",
          value: 26,
        },
        {
          id: "distance",
          value: 56,
        },
        {
          id: "preparation-estimate",
          value: 556,
        },
      ],
    },
    telemetry_venue_badges: [],
    template: "venue-large",
    title: "MeatBar Burger | Ibn Gvirol",
    track_id: "venue-meatbar-burger-ibn-gvirol",
    venue: {
      address: "אבן גבירול 67, תל אביב",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 30,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "25-35",
      },
      estimate_range: "25-35",
      franchise: "",
      icon: "bike",
      id: "6466261649e7ea7fa00ff0e7",
      location: [34.7811299, 32.0792696],
      name: "MeatBar Burger | Ibn Gvirol",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [],
      rating: {
        rating: 3,
        score: 8.6,
      },
      short_description: "Premium Burgers by MeatBar",
      show_wolt_plus: false,
      slug: "meatbar-burger-ibn-gvirol",
      tags: ["hamburger", "street food"],
    },
  },
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: ["vegan", "asian", "japanese", "soup", "sushi"],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "j2xmRrT401h401WX;;R3ju8PiW;K",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/5c92064e38bff3000b58f5ca/b536a002-99c4-11ee-904d-8e1566199940_wolt_6.12_yael_bonfis1159.jpg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "5c92064e38bff3000b58f5ca",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "j3uS1b;:ntPsXJcRTdqY0APt;JcQ",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 1,
        },
        {
          id: "rating",
          value: 186,
        },
        {
          id: "delivery-estimate",
          value: 156,
        },
        {
          id: "distance",
          value: 139,
        },
        {
          id: "preparation-estimate",
          value: 147,
        },
      ],
    },
    telemetry_venue_badges: [],
    template: "venue-large",
    title: "Shi-Shi | שי-שי",
    track_id: "venue-shi-shi",
    venue: {
      address: "אבן גבירול 33",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 35,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "30-40",
      },
      estimate_range: "30-40",
      franchise: "",
      icon: "bike",
      id: "5c92064e38bff3000b58f5ca",
      location: [34.78152394294739, 32.07526923552217],
      name: "Shi-Shi | שי-שי",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [],
      rating: {
        rating: 3,
        score: 8.8,
      },
      short_description: "Talk & Roll | Fine Asian Street Food",
      show_wolt_plus: false,
      slug: "shi-shi",
      tags: ["sushi", "asian", "soup"],
    },
  },
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: [
            "vegetarian",
            "asian",
            "japanese",
            "noodles",
            "thai",
            "sushi",
          ],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "j3w79Bd4;t8iXLh4drnd00TaPa;;",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/64ddf07f9ccd4f1430bb0ac2/dfc504d0-3ce5-11ee-8532-82d6d5f567fc_6e5fb4d8_3b60_11ee_a320_0aa1a3e77f9a_9325efdc_39c4_11ee_8f4c_8e8affe12086_725a80b8_31d3_11ee_bd17_cad10f2bbc22___________.jpg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "64ddf07f9ccd4f1430bb0ac2",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "j2IF9U;i3fVt0vfL00Xd00Pt4xcy",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 2,
        },
        {
          id: "rating",
          value: 710,
        },
        {
          id: "delivery-estimate",
          value: 363,
        },
        {
          id: "distance",
          value: 92,
        },
        {
          id: "preparation-estimate",
          value: 557,
        },
      ],
    },
    telemetry_venue_badges: [],
    template: "venue-large",
    title: "Giraffe | Ibn Gabirol",
    track_id: "venue-giraffe-ibn-gabirol",
    venue: {
      address: "אבן גבירול 49, תל אביב",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 40,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "35-45",
      },
      estimate_range: "35-45",
      franchise: "",
      icon: "bike",
      id: "64ddf07f9ccd4f1430bb0ac2",
      location: [34.78121378611945, 32.07710882930954],
      name: "Giraffe | Ibn Gabirol",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [],
      rating: {
        rating: 3,
        score: 8,
      },
      short_description: "Noodles | Sushi Bar\n",
      show_wolt_plus: false,
      slug: "giraffe-ibn-gabirol",
      tags: ["asian", "japanese", "sushi"],
    },
  },
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: ["american", "street_food", "burgers", "bbq"],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "jaIqes8ylGh5X:Flh3yGX;pkGmFB",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/65c0c8ea746e0e8683217dff/7b5e3bd4-c41b-11ee-8019-3a6d7c16a81c_0a29f714_7ed4_11ee_95c2_969b7c081b0f_wolt_06.11_._yael_bonfis1420.jpg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "65c0c8ea746e0e8683217dff",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "j8G8W04hmIX6;;EOlkmYP;PtB4h5",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 3,
        },
        {
          id: "rating",
          value: 711,
        },
        {
          id: "delivery-estimate",
          value: 27,
        },
        {
          id: "distance",
          value: 140,
        },
        {
          id: "preparation-estimate",
          value: 558,
        },
      ],
    },
    telemetry_venue_badges: [],
    template: "venue-large",
    title: "M32 | Tel Aviv",
    track_id: "venue-m32-tel-aviv",
    venue: {
      address: "מאיר יערי 19",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 30,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "25-35",
      },
      estimate_range: "25-35",
      franchise: "",
      icon: "bike",
      id: "65c0c8ea746e0e8683217dff",
      location: [34.7880139, 32.1000382],
      name: "M32 | Tel Aviv",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [],
      rating: {
        rating: 3,
        score: 8,
      },
      short_description: "The Best Burger In Town!\n",
      show_wolt_plus: false,
      slug: "m32-tel-aviv",
      tags: ["street food", "burger", "bbq"],
    },
  },
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: ["gluten-free", "street_food", "burgers", "kids-meals"],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "j0yCJi;B0O01004TbJ;:007vZd4i",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/5bf185777d99cb000b2a85b3/8f6819d8-73ae-11ed-8d97-aa475ae0985a______.jpeg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "5bf185777d99cb000b2a85b3",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "j5C7ps;smXd6;Hd4LslH0intHsJD",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 4,
        },
        {
          id: "rating",
          value: 620,
        },
        {
          id: "delivery-estimate",
          value: 157,
        },
        {
          id: "distance",
          value: 57,
        },
        {
          id: "preparation-estimate",
          value: 229,
        },
      ],
    },
    telemetry_venue_badges: [],
    template: "venue-large",
    title: "HaMosad",
    track_id: "venue-hamosad",
    venue: {
      address: "אבן גבירול 67, תל אביב",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 35,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "30-40",
      },
      estimate_range: "30-40",
      franchise: "",
      icon: "bike",
      id: "5bf185777d99cb000b2a85b3",
      location: [34.7811299, 32.0792696],
      name: "HaMosad",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [],
      rating: {
        rating: 3,
        score: 8.2,
      },
      short_description: "The Special Hamburger Institution",
      show_wolt_plus: false,
      slug: "hamosad",
      tags: ["burger", "kids", "street food"],
    },
  },
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: [
            "street_food",
            "salad",
            "vegan",
            "breakfast",
            "gluten-free",
            "sandwich",
          ],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "j5FT1lTJIQWSX7p4TaTt;dPtllMQ",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/5d637a1c10314b0d7f26c30a/a0bc4c42-05f1-11ee-9190-1adf0ba4096d_cae83358_7c55_11ed_bb4e_6ac07effbb1f_list2__1_.jpg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "5d637a1c10314b0d7f26c30a",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "j5FT9m:QWA8ID;5liVXcXdTtdlXl",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 5,
        },
        {
          id: "rating",
          value: 91,
        },
        {
          id: "delivery-estimate",
          value: 28,
        },
        {
          id: "distance",
          value: 93,
        },
        {
          id: "preparation-estimate",
          value: 31,
        },
      ],
    },
    telemetry_venue_badges: [],
    template: "venue-large",
    title: "Under The Tree | Ben Yehuda",
    track_id: "venue-under-the-tree",
    venue: {
      address: "202 בן יהודה",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 30,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "25-35",
      },
      estimate_range: "25-35",
      franchise: "",
      icon: "bike",
      id: "5d637a1c10314b0d7f26c30a",
      location: [34.77417469024658, 32.090263762239836],
      name: "Under The Tree | Ben Yehuda",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [],
      rating: {
        rating: 3,
        score: 9,
      },
      short_description: "Happy Food & Good Vibes ❤️",
      show_wolt_plus: false,
      slug: "under-the-tree",
      tags: ["breakfast", "salad", "sandwich"],
    },
  },
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: ["italian", "salad", "street_food", "pasta"],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "j7MXqPTc;;8zp2Tuh4jdX;Tth4Pc",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/5c332e779a4d65000b1a7b02/28b02f80-e0b9-11ea-833a-a6b6833e04fd_2.jpg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "5c332e779a4d65000b1a7b02",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "j9NXeD4hX;Nj;HTKSSgyruiGkxJl",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 6,
        },
        {
          id: "rating",
          value: 92,
        },
        {
          id: "delivery-estimate",
          value: 3,
        },
        {
          id: "distance",
          value: 6,
        },
        {
          id: "preparation-estimate",
          value: 32,
        },
      ],
    },
    telemetry_venue_badges: [],
    template: "venue-large",
    title: "PASTA VIA | Ibn Gabirol",
    track_id: "venue-pasta-e-via",
    venue: {
      address: "אבן גבירול 142",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 25,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "20-30",
      },
      estimate_range: "20-30",
      franchise: "",
      icon: "bike",
      id: "5c332e779a4d65000b1a7b02",
      location: [34.78267192840576, 32.08880486964858],
      name: "PASTA VIA | Ibn Gabirol",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [],
      rating: {
        rating: 3,
        score: 9,
      },
      short_description: "Italian Pasta Deli",
      show_wolt_plus: false,
      slug: "pasta-e-via",
      tags: ["pasta", "italian", "street food"],
    },
  },
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: ["vegan", "gluten-free", "pasta", "pizza", "italian"],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "j7EE9I4iT;MynuL6NH4PjcPbRGd4",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/6224779e04ad3c418ba6ba41/fcf35088-0db1-11ee-a1e6-2eb644be93b3_yaelitz_2.jpg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "6224779e04ad3c418ba6ba41",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "j5Dmtb;40jX7;JSXllh40AlkVW95",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 7,
        },
        {
          id: "rating",
          value: 93,
        },
        {
          id: "delivery-estimate",
          value: 29,
        },
        {
          id: "distance",
          value: 17,
        },
        {
          id: "preparation-estimate",
          value: 230,
        },
      ],
    },
    telemetry_venue_badges: [],
    template: "venue-large",
    title: "Amore Mio",
    track_id: "venue-amore-mio",
    venue: {
      address: "אבן גבירול 100, תל אביב",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 30,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "25-35",
      },
      estimate_range: "25-35",
      franchise: "",
      icon: "bike",
      id: "6224779e04ad3c418ba6ba41",
      location: [34.7815637, 32.0835373],
      name: "Amore Mio",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [],
      rating: {
        rating: 3,
        score: 9,
      },
      short_description: "Italian restaurant in Tel Aviv City Center",
      show_wolt_plus: false,
      slug: "amore-mio",
      tags: ["italian", "pasta", "vegan"],
    },
  },
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: ["hummus", "street_food"],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "j3FUNG0h;k01Xq8yTvgPjtl48iXJ",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/5ddbaafdb347a52a0e4807ec/bdaa55b2-102b-11ee-ac41-7e2908aa7306___2.jpg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "5ddbaafdb347a52a0e4807ec",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "j7EUFJTbOA;J;ZXtgOh3buJ4SBTt",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 8,
        },
        {
          id: "rating",
          value: 187,
        },
        {
          id: "delivery-estimate",
          value: 30,
        },
        {
          id: "distance",
          value: 11,
        },
        {
          id: "preparation-estimate",
          value: 231,
        },
      ],
    },
    telemetry_venue_badges: ["promotions"],
    template: "venue-large",
    title: "Congress Basel",
    track_id: "venue-congress-basel",
    venue: {
      address: "אבן גבירול 137",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 30,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "25-35",
      },
      estimate_range: "25-35",
      franchise: "",
      icon: "bike",
      id: "5ddbaafdb347a52a0e4807ec",
      location: [34.7822569, 32.089243],
      name: "Congress Basel",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [
        {
          icon: "coupon-fill",
          text: "₪0 delivery fee",
          variant: "discount",
        },
      ],
      rating: {
        rating: 3,
        score: 8.8,
      },
      short_description: "Shawarma, Sport and Home Food",
      show_wolt_plus: false,
      slug: "congress-basel",
      tags: ["street food", "shawarma"],
    },
  },
  {
    filtering: {
      filters: [
        {
          id: "primary",
          values: ["sushi", "asian", "japanese"],
        },
        {
          id: "price-range",
          values: ["price-range-2"],
        },
        {
          id: "wolt-plus",
          values: [],
        },
      ],
    },
    image: {
      blurhash: "j1rCxA;;02cO;:;:4hcy0LDtTb8j",
      url: "https://prod-wolt-venue-images-cdn.wolt.com/5dfb3985024e8886d0302765/9a558a28-353c-11ea-bbd6-0a586468f22e_DSC00382.jpg",
    },
    link: {
      selected_delivery_method: "homedelivery",
      target: "5dfb3985024e8886d0302765",
      target_sort: "delivers-to",
      target_title: "",
      title: "",
      type: "venue-id",
      venue_mainimage_blurhash: "j3x6Nv:N0C4G;;UPiZ8Q0shJ;k;;",
    },
    sorting: {
      sortables: [
        {
          id: "delivery-price",
          value: 9,
        },
        {
          id: "rating",
          value: 188,
        },
        {
          id: "delivery-estimate",
          value: 158,
        },
        {
          id: "distance",
          value: 23,
        },
        {
          id: "preparation-estimate",
          value: 401,
        },
      ],
    },
    telemetry_venue_badges: [],
    template: "venue-large",
    title: "Ze Sushi | Bazel",
    track_id: "venue-ze-sushi-bazel",
    venue: {
      address: "אשתורי הפרחי 14 תל אביב",
      badges: [],
      badges_v2: [],
      categories: [],
      city: "",
      country: "ISR",
      currency: "ILS",
      delivers: true,
      delivery_price: "₪0.00",
      delivery_price_highlight: true,
      delivery_price_int: 0,
      estimate: 35,
      estimate_box: {
        subtitle: "min",
        template: "estimate",
        title: "30-40",
      },
      estimate_range: "30-40",
      franchise: "",
      icon: "bike",
      id: "5dfb3985024e8886d0302765",
      location: [34.7803716, 32.0899335],
      name: "Ze Sushi | Bazel",
      online: true,
      price_range: 2,
      product_line: "restaurant",
      promotions: [],
      rating: {
        rating: 3,
        score: 8.8,
      },
      short_description: "Fine Sushi Delivery",
      show_wolt_plus: false,
      slug: "ze-sushi-bazel",
      tags: ["asian", "japanese", "sushi"],
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.venue.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
