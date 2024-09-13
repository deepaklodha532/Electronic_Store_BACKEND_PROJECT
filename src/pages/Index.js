
import Base from "../components/Base";
import {
  infoWithImageInRightSection,
  trendingProducts,
  infoWithImageInLeftSection,
  contactForm,
} from "./HomePageComponents";
import { useState } from "react";
function Index() {
  const [products, setProducts] = useState([
    {
      productId: "e9ca8382-9871-4b5d-9689-f8605f04acdf",
      title: "OPPO Watch",
      description: "<ul class=\"a-unordered-list a-vertical a-spacing-mini\">\n<li class=\"a-spacing-mini\"><span class=\"a-list-item\">Metal build: Discover the perfect blend of sophistication and innovation featuring a glossy metal build and a sleek dial.;1.39\" display: See every detail come to life on your wrist.</span></li>\n</ul>",
      price: 4999,
      discountedPrice: 3983,
      quantity: 44433,
      addedDate: 1725906585352,
      live: true,
      stock: true,
      productImageName: "13a19120-8cc8-4845-a138-0e0d46f0c739.jpg",
      category: {
          categoryId: "ea435e57-ace8-4f95-82c6-60d2ab44d6b1",
          title: "Watch ",
          description: "Every  watch best quality  Look and Feel  is very good ,  we will  provide you  medium    cost",
          coverImage: "https://f.media-amazon.com/images/I/8153fFLsOLL._AC_UY327_FMwebp_QL65_.jpg"
      }
  },
  {
    productId: "b75c46f8-0333-4d56-83df-7b733b4bb2cb",
    title: "Realme",
    description: "<ul class=\"a-unordered-list a-vertical a-spacing-mini\">\n<li class=\"a-spacing-mini\"><span class=\"a-list-item\">The 300% volume and Audio Booster, combined with a Dual Stereo Speaker, bring you a highly impactful cinematic auditory feast. The sound quality is finer and clearer for a more dimensional and robust effect. Immerse yourself in the atmosphere and emotions and experience even the most nuanced movements and emotional shifts of each character in films.</span></li>\n</ul>",
    price: 10000,
    discountedPrice: 9999,
    quantity: 1331,
    addedDate: 1725911857688,
    live: true,
    stock: true,
    productImageName: "26af2cf4-3210-450c-a0f7-ea2119386146.jpg",
    category: {
        categoryId: "6bdfdbdf-6085-44b9-8c53-37ebe5f6f966",
        title: "Mobiles",
        description: "Here available all branded companies product ,$100 to $10000",
        coverImage: "https://f.media-amazon.com/images/I/41c7J3SIyxL._AC_UF480,480_SR480,480_.jpg"
    }
},
{
  productId: "1da41e76-438e-4364-90a1-b683ac6eae60",
  title: "Drawing Board -3",
  description: "<h2 class=\"a-size-mini a-spacing-none a-color-base s-line-clamp-2\"><a class=\"a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal\" href=\"https://www.amazon.in/BESTOR-Writing-Colorful-Educational-Christmas/dp/B0BTT7S5VT/ref=sr_1_7?crid=3K2B5VRF3I87N&amp;dib=eyJ2IjoiMSJ9.anpuDscOOC3poFExZeNcA_WdHgJKJnq812j7OuluRDamu1vc0-yCibwIbXHaja47DMPTfs_oMI7PW6In1eKxscOCsWB-BZOzJ1Xd7NKyHTnUWbF_dZXVJdmRAGEBJRzTiwTiyPvjr5V_oQEAXyMcdC4pE4tTJs9XZ3ArZsDCKv7SVoZYCfnLHw-sBN-wWi8J8B1ukv1QrItjphEEyj9n2WOkXDlG_hq72A1Zxks7aJF01al9oIDSGj6ifyJObmEZ3NcE9X4-HXAxqvZVTujTlCbP4MO3WQhG-hitAkL7sCU.Cf-nVUzVSylcNoKiMX3_Opo7h-NsEWztSy_XrhCIgsc&amp;dib_tag=se&amp;keywords=drawing+board+electroni&amp;qid=1725909767&amp;s=computers&amp;sprefix=drawing+board+electroni%2Ccomputers%2C275&amp;sr=1-7\" target=\"_blank\" rel=\"noopener\"><span class=\"a-size-medium a-color-base a-text-normal\">BESTOR LCD Writing Tablet 10 Inch, Colorful Doodle Board Drawing Pad for Kids, Drawing Board Writing Board Drawing Tablet, Educational Christmas Boys Toys Gifts for 3 4 5 6</span></a></h2>",
  price: 399,
  discountedPrice: 268,
  quantity: 1,
  addedDate: 1725910055038,
  live: true,
  stock: true,
  productImageName: "c979a48f-b246-433d-b88c-e334576b74b8.jpg",
  category: {
      categoryId: "d5f84d50-3697-4d42-bd80-e254bc42cfdc",
      title: " Drawing Board",
      description: "8. 5 inch LCD E-Writer Electronic Writing Pad/Tablet Drawing Board (Paperless Memo Digital Tablet)",
      coverImage: "https://f.media-amazon.com/images/I/61Pg1H7U15L._AC_UL480_FMwebp_QL65_.jpg"
  }
},

{
  productId: "cfc40d65-28ad-4b03-ba44-9aa1bf1b661a",
  title: "HP Ryzon-5",
  description: "<ul class=\"a-unordered-list a-vertical a-spacing-mini\">\n<li class=\"a-spacing-mini\"><span class=\"a-list-item\">The 300% volume and Audio Booster, combined with a Dual Stereo Speaker, bring you a highly impactful cinematic auditory feast. The sound quality is finer and clearer for a more dimensional and robust effect. Immerse yourself in the atmosphere and emotions and experience even the most nuanced movements and emotional shifts of each character in films.</span></li>\n</ul>",
  price: 100000,
  discountedPrice: 100,
  quantity: 1,
  addedDate: 1725905084116,
  live: false,
  stock: true,
  productImageName: "314f83c8-607b-4366-9b4e-1270da7e8085.jpg",
  category: {
      categoryId: "e6bd538a-96fe-4172-84aa-3e5d52dbc454",
      title: "Laptops",
      description: "Here available all branded companies product ,$500 to $100000\n\n",
      coverImage: "https://f.media-amazon.com/images/I/71Zf9uUp+GL._SX522_.jpg"
  }
},
{
  productId: "9ebb1daf-2bbe-40fe-8b69-e721d4550b12",
  title: "HP Computer",
  description: "<p>Sabhi&nbsp; Pasand HP Pasand ,&nbsp; therefore we keep&nbsp; hp product on our platform&nbsp;</p>",
  price: 20000,
  discountedPrice: 15999,
  quantity: 3939,
  addedDate: 1725904448726,
  live: true,
  stock: true,
  productImageName: "56f51409-cf5f-4297-b445-3d02b691687d.jpg",
  category: {
      categoryId: "ea55f9bf-0be8-43c7-9554-6ca29262308a",
      title: "Computers",
      description: " 24.5 Inch Full HD Office Monitor - 1920 x 1080 IPS Panel, 100 Hz, Eye-Friendly Screen, Built-in Speakers, Tilt-Adjustable - HDMI 1.4b, D-Sub (VGA)",
      coverImage: "https://f.media-amazon.com/images/I/81g63yhZ+ZL._AC_UY327_FMwebp_QL65_.jpg"
  }
},

{
  productId: "1790805b-1d08-4b69-80fc-f0097eddc062",
  title: "Tecno",
  description: "<h2 class=\"a-size-mini a-spacing-none a-color-base s-line-clamp-2\"><a class=\"a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal\" href=\"https://www.amazon.in/Boult-Wireless-Earbuds-Playtime-Bluetooth/dp/B0D9KJQQJP/ref=sr_1_5?dib=eyJ2IjoiMSJ9.Sew12YCetE73lLzLONpGKIK6is4wYWdJWEPH2y9eICXx6YgOD0cuhFdECSEGr6cnzIgiq593z5n8WWOSxAX694wQ81H5-7OkSAF4eNy9t8Stl6QfZaa5NAUog-sHazoorTLVXn1yYwSkJMgDUrC_G0eWPUA3mds-L-zBfaooH2bccMb8GwFTT67E9ZhFKn7_mOPD0-80VztTGiO3cuDteQTIrETBTQntKNTRpjsahSQV4AFgbrgUfED9f-bA5OXlBiVx6F84dr-s93pYg56qzmOte_510W_drcekDXgjKVg.Bg7NOsUvcF4iQLpE7KGTG2bzRpH_eGyddbP_yrJXlwg&amp;dib_tag=se&amp;keywords=wireless+earphon&amp;qid=1725907193&amp;s=computers&amp;sr=1-5\" target=\"_blank\" rel=\"noopener\"><span class=\"a-size-medium a-color-base a-text-normal\">Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen&trade; ENC Mic, Low Latency Gaming, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, IPX5,</span></a></h2>",
  price: 3232,
  discountedPrice: 2998,
  quantity: 119,
  addedDate: 1725909687236,
  live: true,
  stock: false,
  productImageName: "6728a265-71c3-46e4-b523-c5f9e6c5efca.jpg",
  category: {
      categoryId: "bcb33547-9815-4fa6-912f-34a1acfa9499",
      title: "Wireless Earbuds ",
      description: "Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen™ ENC Mic, Low Latency Gaming, Type-C Fast",
      coverImage: "https://f.media-amazon.com/images/I/710dy4BFjLL._AC_UL480_FMwebp_QL65_.jpg"
  }
}
,

    // {
    //   addedDate: "2023-03-06T12:27:58.578Z",
    //   category: {
    //     categoryId: "string",
    //     coverImage: "string",
    //     description: "string",
    //     title: "Learn Code With Durgesh",
    //   },
    //   description: "string",
    //   discountedPrice: 5000,
    //   live: true,
    //   price: 6000,
    //   productId: "string",
    //   productImageName: "string",
    //   quantity: 0,
    //   stock: true,
    //   title: "Product title",
    // },
    // {
    //   addedDate: "2023-03-06T12:27:58.578Z",
    //   category: {
    //     categoryId: "string",
    //     coverImage: "string",
    //     description: "string",
    //     title: "Learn Code With Durgesh",
    //   },
    //   description: "string",
    //   discountedPrice: 5000,
    //   live: true,
    //   price: 6000,
    //   productId: "string",
    //   productImageName: "string",
    //   quantity: 0,
    //   stock: true,
    //   title: "Product title",
    // },
  ]);

  return (
    <Base
      title="Shop what you need"
      description={
        "Welcome to Trending Store, We provide best items as you need. "
      }
      buttonEnabled={true}
      buttonText="Start Shoping "
      buttonType="primary"
      buttonLink="/store"
    >
      <div className="my-4">{trendingProducts(products)}</div>
      <div style={{ margin: "100px 0px" }}>
        {infoWithImageInRightSection(
          "https://random.imagecdn.app/500/150",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi assumenda asperiores repudiandae accusamus itaque ratione veritatis, inventore sunt laboriosam."
        )}
      </div>
      <div style={{ margin: "100px 0px" }}>
        {infoWithImageInLeftSection(
          "https://random.imagecdn.app/500/150",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi assumenda asperiores repudiandae accusamus itaque ratione veritatis, inventore sunt laboriosam."
        )}
      </div>

      <div className="my-4">{contactForm()}</div>

      <div style={{ margin: "100px 0px" }}>
        {infoWithImageInRightSection(
          "https://random.imagecdn.app/500/150",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi assumenda asperiores repudiandae accusamus itaque ratione veritatis, inventore sunt laboriosam."
        )}
      </div>
    </Base>
  );
}
export default Index;
