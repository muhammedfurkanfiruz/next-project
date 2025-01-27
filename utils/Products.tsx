export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "iphone 14",
    description: "Short description",
    price: 2999,
    brand: "apple",
    category: "Phone",
    inStock: true,
    image: "/iphone.png", // Public altındaki iphone.webp görseli
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Logitech MX",
    description:
      "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
    price: 102.99,
    brand: "logitech",
    category: "Accesories",
    inStock: true,
    image: "/iphone.png", // Public altındaki iphone.webp görseli
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "lorem lorem lorem lorem lorem lorem lorem",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Berkant Kaya",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Apple iPhone 12, 64GB",
    description:
      "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day E~Shop Renewed Guarantee.",
    price: 40,
    brand: "Apple",
    category: "Phone",
    inStock: true,
    image: "/iphone.png", // Public altındaki iphone.webp görseli
    reviews: [],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "Logitech MX Master",
    description:
      "Cross computer control: Game changing capacity to navigate seamlessly on 3 computers, and copy paste text, images, and files from 1 to the other using Logitech flow.",
    price: 70,
    brand: "logitech",
    category: "Accesories",
    inStock: true,
    image: "/iphone.png", // Public altındaki iphone.webp görseli
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: "Smart Watch(Answer/Make Call)",
    description:
      "Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth.",
    price: 50,
    brand: "Nerunsa",
    category: "Watch",
    inStock: true,
    image: "/iphone.png", // Public altındaki iphone.webp görseli
    reviews: [],
  },
];
