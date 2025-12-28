
export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  category: 'Haircut' | 'Shave' | 'Styling' | 'Combo';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Interior' | 'Haircut' | 'Beard';
}
