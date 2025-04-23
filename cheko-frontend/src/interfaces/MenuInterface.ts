interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    calorie: number;
    category: string;
    lat: number;
    lng: number;
    counter?:number
  }
  
export default MenuItem