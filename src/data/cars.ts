export const carsData = Array.from({ length: 25 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Car Model ${i + 1}`,
  brand: ["Toyota", "Honda", "Ford", "BMW", "Tesla"][i % 5],
  price: Math.floor(Math.random() * 30000) + 20000,
  images: [
    "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023",
  ],
  colors: ["Red", "Black", "White", "Silver", "Blue"].slice(0, 3),
  description: `This is a detailed description of Car Model ${i + 1}. It offers excellent performance, comfort, and style.`,
}));
