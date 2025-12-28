
import { Service, Testimonial, GalleryItem } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: "Classic Gentleman's Cut",
    price: "$40",
    duration: "30 min",
    description: "A precision cut tailored to your head shape and hair type, finished with a straight razor neck shave.",
    category: 'Haircut'
  },
  {
    id: '2',
    name: "Zero Fade / Skin Fade",
    price: "$50",
    duration: "45 min",
    description: "Expertly blended fade from skin to desired length on top. Precision at its finest.",
    category: 'Haircut'
  },
  {
    id: '3',
    name: "Beard Sculpt & Line-up",
    price: "$30",
    duration: "20 min",
    description: "Professional beard trimming, shaping, and edging with straight razor finishing.",
    category: 'Shave'
  },
  {
    id: '4',
    name: "Royal Hot Towel Shave",
    price: "$45",
    duration: "40 min",
    description: "Traditional straight razor shave with premium oils, hot towels, and post-shave balm.",
    category: 'Shave'
  },
  {
    id: '5',
    name: "Senior Citizen / Kids Cut",
    price: "$30",
    duration: "30 min",
    description: "Quality cuts for the young gentlemen and our respected seniors.",
    category: 'Haircut'
  },
  {
    id: '6',
    name: "The M7 Full Service",
    price: "$85",
    duration: "75 min",
    description: "The ultimate experience: Skin fade, beard sculpt, hot towel shave, and hair wash.",
    category: 'Combo'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "James Wilson",
    text: "Best fade I've ever had in Canberra. The attention to detail is unmatched. M7 is the real deal.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: '2',
    name: "David Smith",
    text: "Professional atmosphere and incredibly skilled barbers. The hot towel shave is a must-try experience.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: '3',
    name: "Michael Chen",
    text: "Finally found a barber who understands exactly what I want. Great chat and even better service.",
    rating: 5,
    date: "3 days ago"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800', title: 'The Modern Fade', category: 'Haircut' },
  { id: '2', url: 'https://images.unsplash.com/photo-1621605815841-aa88c82b0248?auto=format&fit=crop&q=80&w=800', title: 'Traditional Shave', category: 'Beard' },
  { id: '3', url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800', title: 'Our Interior', category: 'Interior' },
  { id: '4', url: 'https://images.unsplash.com/photo-1599351431247-f5094037950d?auto=format&fit=crop&q=80&w=800', title: 'Textured Crop', category: 'Haircut' },
  { id: '5', url: 'https://images.unsplash.com/photo-1512690118299-a65117849c6d?auto=format&fit=crop&q=80&w=800', title: 'Beard Styling', category: 'Beard' },
  { id: '6', url: 'https://images.unsplash.com/photo-1593702295094-172c5421c134?auto=format&fit=crop&q=80&w=800', title: 'The Work Station', category: 'Interior' }
];

export const CONTACT_INFO = {
  phone: "+61450786666",
  phoneFormatted: "0450 786 666",
  address: "Shop 1, 12/16 Hardwick Cres, Holt ACT 2615, Australia",
  instagram: "https://instagram.com/m7_barbers?igsh=MXA3NWgzeHFhaXFvbQ==&utm_source=qr",
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ]
};
