import logo from "./Logo.png";
import favicon from "./favicon.png";
import logoHome from "./logo-homepage.svg";
import menuIcon from "./menu-icon.svg";
import bannerImage1 from "./banner-image-1.webp";
import bannerImage2 from "./banner-image-2.webp";
import bannerImage3 from "./banner-image-3.webp";
import logoIcon from "./logo-icon.svg";
import logoText from "./logo-text.svg";
import product1 from "./product1.jpg";
import flipIcon from "./flip-icon.svg";
import descriptionIcon from "./description-icon.svg";
import miniBubble1 from "./mini-bubble-1.jpg";
import miniBubble2 from "./mini-bubble-2.jpg";
import tulip1 from "./tulip-bouquet-1.jpg";
import tulip2 from "./tulip-bouquet-2.jpg";
import bubble1 from "./bubble-cube-1.jpg";
import bubble2 from "./bubble-cube-2.jpg";
import rose1 from "./rose-bouquet-1.jpg";
import rose2 from "./rose-bouquet-2.jpg";
import coffee1 from "./iced-coffee-1.jpg";
import coffee2 from "./iced-coffee-2.jpg";
import peony1 from "./peony-jar-1.jpg";
import peony2 from "./peony-jar-2.jpg";
import heart1 from "./heart-glass-1.jpg";
import heart2 from "./heart-glass-2.jpg";
import daisyJar1 from "./daisy-jar-1.jpg";
import daisyJar2 from "./daisy-jar-2.jpg";
import tulipJar1 from "./tulip-bouquet-jar-1.jpg";
import tulipJar2 from "./tulip-bouquet-jar-2.jpg";
import daisy1 from "./daisy-1.jpg";
import daisy2 from "./daisy-2.jpg";

export const assets = {
  logo,
  favicon,
  logoHome,
  menuIcon,
  bannerImage1,
  bannerImage2,
  bannerImage3,
  logoIcon,
  logoText,
  product1,
  flipIcon,
  descriptionIcon,
};

// export const products = [
//   {
//     id: "1",
//     name: "Lavender Dream",
//     description:
//       "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
//     price: 100,
//     image: [
//       bannerImage1,
//       bannerImage2,
//       bannerImage3,
//       product1,
//       product1,
//       product1,
//       product1,
//     ],
//     features: [
//       "Over 50 hours of long-lasting burn time",
//       "Eco-friendly natural soy wax blend",
//       "Subtle, sophisticated amber and wood fragrance",
//     ],
//     featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
//   },
//   {
//     id: "2",
//     name: "Enchanted Forest Amber",
//     description:
//       "Immerse yourself in the serene embrace of an enchanted forest. This exquisite candle blends rich amber notes with hints of warm sandalwood and crisp cedar, evoking a grounding and luxurious atmosphere. Hand-poured with natural soy wax for a clean, long-lasting burn, creating a perfect ambiance for relaxation or meditation.",
//     price: 120,
//     image: [product1, bannerImage2, bannerImage3, bannerImage1],
//     features: [
//       "Over 50 hours of long-lasting burn time",
//       "Eco-friendly natural soy wax blend",
//       "Subtle, sophisticated amber and wood fragrance",
//     ],
//     featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
//   },
//   {
//     id: "3",
//     name: "Vanilla Bean Magic",
//     description:
//       "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
//     price: 100,
//     image: [bannerImage2, product1, bannerImage1, bannerImage3],
//     features: [
//       "Over 50 hours of long-lasting burn time",
//       "Eco-friendly natural soy wax blend",
//       "Subtle, sophisticated amber and wood fragrance",
//     ],
//     featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
//   },
//   {
//     id: "4",
//     name: "Citrus Sunrise",
//     description:
//       "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
//     price: 100,
//     image: [bannerImage3, bannerImage1, product1, bannerImage2],
//     features: [
//       "Over 50 hours of long-lasting burn time",
//       "Eco-friendly natural soy wax blend",
//       "Subtle, sophisticated amber and wood fragrance",
//     ],
//     featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
//   },
//   {
//     id: "5",
//     name: "Midnight Rose",
//     description:
//       "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
//     price: 100,
//     image: [bannerImage1, product1, bannerImage3, bannerImage2],
//     features: [
//       "Over 50 hours of long-lasting burn time",
//       "Eco-friendly natural soy wax blend",
//       "Subtle, sophisticated amber and wood fragrance",
//     ],
//     featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
//   },
//   {
//     id: "6",
//     name: "Ocean Breeze",
//     description:
//       "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
//     price: 100,
//     image: [product1, bannerImage1, bannerImage2, bannerImage3],
//     features: [
//       "Over 50 hours of long-lasting burn time",
//       "Eco-friendly natural soy wax blend",
//       "Subtle, sophisticated amber and wood fragrance",
//     ],
//     featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
//   },
// ];
export const products = [
  {
    id: "1",
    name: "Mini Bubble Candle",
    description:
      "Aesthetic bubble cube candle crafted from natural soy wax. Adds charm and soft fragrance to your space—perfect for décor, relaxation, and gifting.",
    price: 79,
    minOrder: 2,
    category: "Decorative",
    image: [miniBubble1, miniBubble2],
    features: [
      "100% natural soy wax",
      "Smokeless clean burn",
      "Ideal for spa, yoga & relaxation",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },
  {
    id: "2",
    name: "Tulip Bouquet Candle",
    description:
      "A floral masterpiece inspired by fresh tulips, blended with green notes and morning dew. Elegant, refreshing, and perfect for gifting.",
    price: 399,
    category: "Floral",
    image: [tulip1, tulip2],
    features: [
      "Fresh floral fragrance",
      "Handcrafted bouquet design",
      "Perfect for décor & gifting",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },

  {
    id: "3",
    name: "Bubble Cube Candle",
    description:
      "Handmade bubble cube candle infused with natural fragrances. A perfect mix of minimal design and soothing aroma.",
    price: 199,
    category: "Decorative",
    image: [bubble1, bubble2],
    features: [
      "Plant-based essential oils",
      "Clean & even burn",
      "Modern aesthetic design",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },

  {
    id: "4",
    name: "Rose Bouquet Candle",
    description:
      "A handcrafted rose bouquet candle that blends beauty and fragrance. Creates a romantic and cozy ambiance.",
    price: 399,
    category: "Floral",
    image: [rose1, rose2],
    features: [
      "Soft rose fragrance",
      "Perfect for romantic décor",
      "Elegant handcrafted design",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },

  {
    id: "5",
    name: "Iced Coffee Candle",
    description:
      "Rich caramel coffee fragrance that recreates the aroma of a creamy iced coffee. Perfect for cozy vibes.",
    price: 499,
    category: "Gourmet",
    image: [coffee1, coffee2],
    features: [
      "Caramel coffee scent",
      "Unique drink-style design",
      "Long-lasting aroma",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },

  {
    id: "6",
    name: "Peony Jar Candle",
    description:
      "Elegant jar candle with delicate peony fragrance. Adds sophistication and serenity to your home.",
    price: 399,
    category: "Jar",
    image: [peony1, peony2],
    features: [
      "Premium fragrance oils",
      "Glass jar aesthetic",
      "Relaxing floral scent",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },

  {
    id: "7",
    name: "Heart Candle Jar",
    description:
      "Romantic heart-shaped candle designed for special moments like date nights and gifting.",
    price: 250,
    category: "Romantic",
    image: [heart1, heart2],
    features: ["Romantic ambiance", "Long-lasting burn", "Perfect gift option"],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },

  {
    id: "8",
    name: "Daisy Jar Candle",
    description:
      "Fresh and uplifting daisy fragrance that brightens any space. A perfect blend of beauty and calmness.",
    price: 299,
    category: "Jar",
    image: [daisyJar1, daisyJar2],
    features: [
      "Fresh floral scent",
      "Decor-friendly design",
      "Handcrafted finish",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },

  {
    id: "9",
    name: "Tulip Jar Candle",
    description:
      "Premium tulip jar candle with soothing fragrance. Ideal for décor, gifting, and festive ambiance.",
    price: 450,
    category: "Jar",
    image: [tulipJar1, tulipJar2],
    features: [
      "Clean soy wax burn",
      "Elegant tulip design",
      "Environment-friendly",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },

  {
    id: "10",
    name: "Daisy Scented Candle",
    description:
      "Compact daisy candle with a light floral scent. Perfect for bulk décor and gifting.",
    price: 69,
    minOrder: 2,
    category: "Mini",
    image: [daisy1, daisy2],
    features: [
      "Affordable & aesthetic",
      "Soft floral fragrance",
      "Great for bulk orders",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },
];
