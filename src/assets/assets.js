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

export const products = [
  {
    id: "1",
    name: "Lavender Dream",
    description:
      "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
    price: 100,
    image: [
      bannerImage1,
      bannerImage2,
      bannerImage3,
      product1,
      product1,
      product1,
      product1,
    ],
    features: [
      "Over 50 hours of long-lasting burn time",
      "Eco-friendly natural soy wax blend",
      "Subtle, sophisticated amber and wood fragrance",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },
  {
    id: "2",
    name: "Enchanted Forest Amber",
    description:
      "Immerse yourself in the serene embrace of an enchanted forest. This exquisite candle blends rich amber notes with hints of warm sandalwood and crisp cedar, evoking a grounding and luxurious atmosphere. Hand-poured with natural soy wax for a clean, long-lasting burn, creating a perfect ambiance for relaxation or meditation.",
    price: 120,
    image: [product1, bannerImage2, bannerImage3, bannerImage1],
    features: [
      "Over 50 hours of long-lasting burn time",
      "Eco-friendly natural soy wax blend",
      "Subtle, sophisticated amber and wood fragrance",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },
  {
    id: "3",
    name: "Vanilla Bean Magic",
    description:
      "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
    price: 100,
    image: [bannerImage2, product1, bannerImage1, bannerImage3],
    features: [
      "Over 50 hours of long-lasting burn time",
      "Eco-friendly natural soy wax blend",
      "Subtle, sophisticated amber and wood fragrance",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },
  {
    id: "4",
    name: "Citrus Sunrise",
    description:
      "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
    price: 100,
    image: [bannerImage3, bannerImage1, product1, bannerImage2],
    features: [
      "Over 50 hours of long-lasting burn time",
      "Eco-friendly natural soy wax blend",
      "Subtle, sophisticated amber and wood fragrance",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },
  {
    id: "5",
    name: "Midnight Rose",
    description:
      "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
    price: 100,
    image: [bannerImage1, product1, bannerImage3, bannerImage2],
    features: [
      "Over 50 hours of long-lasting burn time",
      "Eco-friendly natural soy wax blend",
      "Subtle, sophisticated amber and wood fragrance",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },
  {
    id: "6",
    name: "Ocean Breeze",
    description:
      "A calming blend of French lavender and vanilla bean, perfect for unwinding.",
    price: 100,
    image: [product1, bannerImage1, bannerImage2, bannerImage3],
    features: [
      "Over 50 hours of long-lasting burn time",
      "Eco-friendly natural soy wax blend",
      "Subtle, sophisticated amber and wood fragrance",
    ],
    featureIcons: [descriptionIcon, descriptionIcon, descriptionIcon],
  },
];
