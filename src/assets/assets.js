import favicon from "./favicon.png";
import logoHome from "./logo-homepage.svg";
import menuIcon from "./menu-icon.svg";
import bannerImage1 from "./banner-image-1.webp";
import bannerImage2 from "./banner-image-2.webp";
import bannerImage3 from "./banner-image-3.webp";
import logoIcon from "./logo-icon.svg";
import logoHomepage from "./logo-homepage.png";
import logoText from "./logo-text.svg";
import flipIcon from "./flip-icon.svg";
import descriptionIcon from "./description-icon.svg";
import InstagramIcon from "./instagram-icon.svg?react";
import MailIcon from "./mail-icon.svg?react";
import CloseIcon from "./close-icon.svg?react";
import WhatsAppIcon from "./whatsapp-icon.svg?react";
import miniBubble1 from "./mini-bubble-1.webp";
import miniBubble2 from "./mini-bubble-2.webp";
import tulip1 from "./tulip-bouquet-1.webp";
import tulip2 from "./tulip-bouquet-2.webp";
import bubble1 from "./bubble-cube-1.webp";
import bubble2 from "./bubble-cube-2.webp";
import rose1 from "./rose-bouquet-1.webp";
import rose2 from "./rose-bouquet-2.webp";
import coffee1 from "./iced-coffee-1.webp";
import coffee2 from "./iced-coffee-2.webp";
import peony1 from "./peony-jar-1.webp";
import peony2 from "./peony-jar-2.webp";
import heart1 from "./heart-glass-1.webp";
import heart2 from "./heart-glass-2.webp";
import daisyJar1 from "./daisy-jar-1.webp";
import daisyJar2 from "./daisy-jar-2.webp";
import tulipJar1 from "./tulip-bouquet-jar-1.webp";
import tulipJar2 from "./tulip-bouquet-jar-2.webp";
import daisy1 from "./daisy-1.webp";
import daisy2 from "./daisy-2.webp";
import loaderGif from "./loader.gif";
import loaderVideo from "./loader.mp4";
import loaderVideo2 from "./loader-1.mp4";

export const assets = {
  favicon,
  logoHome,
  logoHomepage,
  menuIcon,
  bannerImage1,
  bannerImage2,
  bannerImage3,
  logoIcon,
  logoText,
  flipIcon,
  descriptionIcon,
  InstagramIcon,
  WhatsAppIcon,
  MailIcon,
  CloseIcon,
  loaderGif,
  loaderVideo,
  loaderVideo2,
};

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
    price: 299,
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
    price: 149,
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
    price: 299,
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
    price: 399,
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
    price: 299,
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
    price: 249,
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
    price: 249,
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
    price: 399,
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
