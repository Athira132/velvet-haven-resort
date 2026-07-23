export interface RoomItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  viewType: string;
  image: string;
  images: string[];
  features: string[];
  recommended?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: 'thrill' | 'nature' | 'trekking' | 'relaxation' | 'outdoor' | 'romantic' | 'family';
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'resort' | 'accommodation' | 'dining' | 'nature';
  image: string;
  caption: string;
}

export const RESORT_CONFIG = {
  name: "Velvet Haven Resort",
  tagline: "Escape to the Hills. Stay in the Moment.",
  location: "Vagamon, Idukki District, Kerala, India",
  pinCode: "685503",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://velvethavenresort.com",
  
  // Easily configurable contact settings (overridable via Vercel Environment Variables)
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919895858983",
  whatsappDisplayNumber: import.meta.env.VITE_WHATSAPP_DISPLAY_NUMBER || "+91 98958 58983",
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || "+91 98958 58983",
  contactPhoneAlt: import.meta.env.VITE_CONTACT_PHONE_ALT || "+91 98958 58983",
  email: import.meta.env.VITE_EMAIL || "velvethavenresort@gmail.com",
  
  // Location & Map settings
  mapUrl: import.meta.env.VITE_MAP_URL || "https://maps.app.goo.gl/8vNvgiym9pJrfnoMA",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62916.14138128362!2d76.86608518335017!3d9.68652431766627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0704407bc4d623%3A0xf657805ecae2d19!2sVagamon%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Core visual assets provided by user
  images: {
    logo: "https://i.ibb.co/27DmhGfZ/Untitled-design-2-removebg-preview.png",
    hero1: "/images/day_hero.jpg",
    hero2: "/images/night_hero.png",
    roomMain: "/images/rooms/room_1.jpg",
    resortPanorama: "/images/drive_assets/scenic_misty.jpg",
    landscapeSurroundings: "/images/drive_assets/scenic_pines.jpg",
    suiteInterior: "/images/updated_assets/room_hilltop.jpg",
    mistyHills: "/images/drive_assets/views.jpg",
    diningOutdoor: "/images/drive_assets/dining_table.jpg"
  },

  // Rooms Data
  rooms: [
    {
      id: "velvet-mist-suite",
      name: "Velvet Mist Suite",
      subtitle: "Panoramic Mountain & Valley View",
      description: "Luxuriously crafted suite featuring expansive glass walls overlooking Vagamon's rolling misty hills, handcrafted hardwood furnishings, private balcony, and plush furnishings.",
      viewType: "Misty Mountain & Valley View",
      image: "https://lh3.googleusercontent.com/d/1_E_w5Vt4t3pM8xH8h_upKhdvvhkxB2-v",
      images: [
        "https://lh3.googleusercontent.com/d/1_E_w5Vt4t3pM8xH8h_upKhdvvhkxB2-v",
        "https://lh3.googleusercontent.com/d/1fJZ4e7v-Ek73aHc96sU-6ru-FZJDmHD_",
        "https://lh3.googleusercontent.com/d/1dvREhIzBakYDZj_SX-Dz-rKKnqJTEvp-",
        "https://lh3.googleusercontent.com/d/1aI2gxj3J2V0ZHD-Yd-hukLb5vv1GYYBp",
        "https://lh3.googleusercontent.com/d/1YNhYc0HwPVob-zbED3_TbwUQqjKvnb6J",
        "https://lh3.googleusercontent.com/d/1ETBbRZuBqdQlOw20skJKengvdGfWD3S1"
      ],
      features: ["Private View Balcony", "High-Speed Wi-Fi", "En-suite Luxury Bath", "Tea/Coffee Maker", "24/7 Room Service"],
      recommended: true
    },
    {
      id: "plantation-family-suite",
      name: "Plantation Family Suite",
      subtitle: "Spacious Sanctuary for Families",
      description: "Designed for family comfort with dual interconnected luxury suites, wide private veranda overlooking green tea estates, and family dining nook.",
      viewType: "Tea Plantation & Forest View",
      image: "https://lh3.googleusercontent.com/d/1hitp4QfeL69iT9MgqkzxJY_2G1xGqt9b",
      images: [
        "https://lh3.googleusercontent.com/d/1hitp4QfeL69iT9MgqkzxJY_2G1xGqt9b",
        "https://lh3.googleusercontent.com/d/15fkZFqvbW6caUeijuY2WLNCD1SGHqxwK",
        "https://lh3.googleusercontent.com/d/1Qu-r4pwncUAW8zhluGUwt1-XdtTsOVoI"
      ],
      features: ["Spacious Dual-Room Layout", "Spacious Living Room", "Private Veranda", "Kid-Friendly Amenities", "Free High-Speed Wi-Fi"]
    },
    {
      id: "standard-cottage",
      name: "Standard Cottage",
      subtitle: "Cosy Mountain Retreat",
      description: "An elegant, standalone cottage nestled in the misty hillside of Vagamon. Ideal for couples seeking a tranquil getaway, featuring a private veranda to enjoy the serene mountain breeze and plantation views.",
      viewType: "Pine Valley & Garden View",
      image: "https://lh3.googleusercontent.com/d/1j18dlEpOuruWDpX7qu9ioYkJqGHA7iZG",
      images: [
        "https://lh3.googleusercontent.com/d/1j18dlEpOuruWDpX7qu9ioYkJqGHA7iZG",
        "https://lh3.googleusercontent.com/d/1RarfoLGwGbGriXWCpPVgLYilerG7Md7H",
        "https://lh3.googleusercontent.com/d/1-8jFGBkjqNQ0x54AZ_gYAOBdcOhx8gCD",
        "https://lh3.googleusercontent.com/d/1HS_mh-5Yp7_rK5R_GzoXcMdXwMNIhVPZ",
        "https://lh3.googleusercontent.com/d/1dRfayvL_UKIa84YMXKN-B1HE99OXJPMY",
        "https://lh3.googleusercontent.com/d/1rgiNccqAEcmVj9BRZ4fzl3CRR5iDHcpG"
      ],
      features: ["Private Veranda", "Free High-Speed Wi-Fi", "Tea/Coffee Maker"]
    }
  ] as RoomItem[],

  // Experiences Data - "What You Can Do in Vagamon" Guide (Strictly 6 Locations in Idukki District, Kerala)
  experiences: [
    {
      id: "thangal-para",
      title: "Thangal Para",
      category: "nature",
      shortDesc: "Explore the distinctive rock formations and enjoy breathtaking panoramic views across the green Vagamon valleys in Idukki district, Kerala.",
      fullDesc: "Explore the distinctive rock formations and enjoy breathtaking panoramic views across the green Vagamon valleys from Thangal Para's elevated mountain ridge in Idukki district.",
      image: "https://i.ibb.co/39Yvh2gB/Screenshot-2026-07-21-124848.png",
      tag: "Idukki Destination"
    },
    {
      id: "murugan-mala",
      title: "Murugan Mala",
      category: "nature",
      shortDesc: "Follow the peaceful hill trail and discover panoramic views across Vagamon’s lush green surroundings in Idukki district, Kerala.",
      fullDesc: "Follow the peaceful hill trail and discover panoramic views across Vagamon’s lush green surroundings on the serene ascent to Murugan Mala in Idukki, Kerala.",
      image: "https://i.ibb.co/H6KwDgK/Screenshot-2026-07-21-124955.png",
      tag: "Idukki Destination"
    },
    {
      id: "kurish-mala",
      title: "Kurish Mala",
      category: "nature",
      shortDesc: "Experience peaceful hill trails, spiritual surroundings, and beautiful sunrise or sunset views across the Vagamon landscape in Idukki, Kerala.",
      fullDesc: "Experience peaceful hill trails, spiritual monastery surroundings, Swiss dairy pastures, and beautiful sunrise or sunset views across the Vagamon hillscape in Idukki district.",
      image: "https://i.ibb.co/Gf9MvCTm/Screenshot-2026-07-21-124142.png",
      tag: "Idukki Destination"
    },
    {
      id: "vagamon-pine-forest",
      title: "Vagamon Pine Forest",
      category: "nature",
      shortDesc: "Walk beneath towering pine trees and explore one of Vagamon’s most peaceful and scenic natural landscapes in Idukki district, Kerala.",
      fullDesc: "Walk beneath towering pine trees and explore one of Vagamon’s most peaceful and scenic natural landscapes, surrounded by dense green pine canopies in Idukki, Kerala.",
      image: "https://i.ibb.co/sv5cyhM5/Screenshot-2026-07-21-124133.png",
      tag: "Idukki Destination"
    },
    {
      id: "vagamon-meadows",
      title: "Vagamon Meadows",
      category: "nature",
      shortDesc: "Relax and wander through the wide green meadows surrounded by the peaceful beauty of Vagamon’s rolling hills in Idukki, Kerala.",
      fullDesc: "Relax and wander through the wide green meadows surrounded by the peaceful beauty of Vagamon’s rolling hills, offering endless greenery in Idukki district.",
      image: "https://i.ibb.co/tw6bQD2q/Screenshot-2026-07-21-124848.png",
      tag: "Idukki Destination"
    },
    {
      id: "vagamon-lake",
      title: "Vagamon Lake",
      category: "nature",
      shortDesc: "Enjoy the calm beauty of a scenic lake surrounded by green hills and peaceful landscapes in Vagamon, Idukki district, Kerala.",
      fullDesc: "Enjoy the calm beauty of a scenic lake surrounded by green hills, lush gardens, and peaceful mountain reflection views in Vagamon, Idukki district.",
      image: "https://i.ibb.co/JwW3rKwp/Screenshot-2026-07-21-124928.png",
      tag: "Idukki Destination"
    }
  ] as ExperienceItem[],

  // Facilities Data
  facilities: [
    {
      id: "pool-facility",
      title: "Scenic Swimming Pool",
      description: "Dive into our crystal-clear swimming pool overlooking the rolling mountains and valley fog of Vagamon.",
      iconName: "Waves",
      image: "/images/updated_assets/facility_pool.jpg",
      highlights: ["Valley Overlook", "Swimming Pool", "Lounge Chairs"]
    },
    {
      id: "tv-entertainment",
      title: "TV & Entertainment Hub",
      description: "Enjoy high-definition flat-screen TVs and premium entertainment streaming options in every cottage.",
      iconName: "Tv",
      image: "/images/updated_assets/facility_tv.jpg",
      highlights: ["HD Flat Screen", "Satellite TV Channels", "Premium Comfort"]
    },
    {
      id: "dining-facility",
      title: "Fine Hillside Dining",
      description: "Authentic multi-cuisine Kerala and international dishes served fresh in a premium open-air restaurant setup.",
      iconName: "Utensils",
      image: "/images/updated_assets/facility_dining.jpg",
      highlights: ["Local Kerala Cuisine", "Buffet Options", "Spectacular Views"]
    },
    {
      id: "kitchen-facility",
      title: "Cottage Pantry",
      description: "A convenient space with a fridge and dining area for your stay.",
      iconName: "ChefHat",
      image: "/images/updated_assets/facility_kitchen.jpg",
      highlights: ["Refrigerator", "Dining Area", "Convenient Pantry"]
    },
    {
      id: "spacious-room",
      title: "Luxury Spacious Rooms",
      description: "Premium cottage layouts featuring extra space, warm woodwork, and sliding glass balconies.",
      iconName: "Layout",
      image: "/images/updated_assets/facility_spacious.jpg",
      highlights: ["Timber Architecture", "Veranda Outlets", "Mountain Views"]
    },
    {
      id: "program-venue",
      title: "Scenic Program Venue",
      description: "A dedicated gathering space and stone amphitheater ideal for evening gatherings and special events.",
      iconName: "Compass",
      image: "/images/updated_assets/facility_venue.jpg",
      highlights: ["Open-Air Amphitheater", "Starlight Seating", "Event Ready"]
    },
    {
      id: "bathroom-facility",
      title: "En-suite Luxury Bathrooms",
      description: "Sophisticated modern bathrooms fitted with deep soaking tubs, rain showers, and premium organic toiletries.",
      iconName: "Bath",
      image: "/images/updated_assets/facility_bathroom.jpg",
      highlights: ["Deep Soaking Tubs", "Rain Showerhead", "Organic Toiletries"]
    }
  ] as FacilityItem[],

  // Gallery Items
  gallery: [
    {
      id: "g1",
      title: "Velvet Haven Resort Day View",
      category: "resort",
      image: "/images/day_hero.jpg",
      caption: "Velvet Haven Resort nested in the sunlit upper slopes of Vagamon, Kerala."
    },
    {
      id: "g3",
      title: "Velvet Haven Resort Room Lobby",
      category: "resort",
      image: "/images/rooms/room_1.jpg",
      caption: "Luxury entrance lobby integrating natural wood paneling with modern finishes."
    },
    {
      id: "g4",
      title: "Panoramic Vagamon Mist View",
      category: "nature",
      image: "/images/drive_assets/scenic_misty.jpg",
      caption: "Sweeping panoramic views of characteristic morning mist rolling over green valleys."
    },
    {
      id: "g5",
      title: "Misty Pine Canopy Trails",
      category: "nature",
      image: "/images/drive_assets/scenic_pines.jpg",
      caption: "Soaring evergreen pine trees nearby the resort grounds in Idukki, Kerala."
    },
    {
      id: "g6",
      title: "Hilltop Suite Interior",
      category: "accommodation",
      image: "/images/updated_assets/room_hilltop.jpg",
      caption: "Cozy modern wood-finished bedroom details inside the hilltop resort suite."
    },
    {
      id: "g7",
      title: "Rolling Misty Hills Outlook",
      category: "nature",
      image: "/images/drive_assets/views.jpg",
      caption: "Endless view of green meadows and valley ridges shrouded in Vagamon fog."
    },
    {
      id: "g8",
      title: "Hillside Dining Pavilion",
      category: "dining",
      image: "/images/drive_assets/dining_table.jpg",
      caption: "Hillside outdoor dining setup overlooking spectacular mountain peaks."
    },
    {
      id: "g9",
      title: "Modern Hill Station Lobby",
      category: "resort",
      image: "/images/drive_assets/resort_lobby.jpg",
      caption: "Premium reception area designed with glass elements and organic details."
    },
    {
      id: "g10",
      title: "Fine Hillside Dining Venue",
      category: "dining",
      image: "/images/updated_assets/facility_dining.jpg",
      caption: "Premium multi-cuisine restaurant serving traditional Travancore dishes."
    },
    {
      id: "g11",
      title: "Cottage Pantry Space",
      category: "resort",
      image: "/images/updated_assets/facility_kitchen.jpg",
      caption: "A convenient pantry space with a refrigerator and dining area for guests."
    },
    {
      id: "g12",
      title: "Premium Cottage Design",
      category: "accommodation",
      image: "/images/updated_assets/facility_spacious.jpg",
      caption: "Spacious timber cottage layout showing slide-out glass doors."
    },
    {
      id: "g13",
      title: "Scenic Amphitheater Venue",
      category: "resort",
      image: "/images/updated_assets/facility_venue.jpg",
      caption: "Stone amphitheater and outdoor gathering space for events."
    },
    {
      id: "g14",
      title: "En-suite Luxury Bath",
      category: "accommodation",
      image: "/images/updated_assets/facility_bathroom.jpg",
      caption: "Modern bathroom layout featuring a deep soaking tub and rain shower."
    },
    {
      id: "g15",
      title: "Luxury Balcony Overlook",
      category: "accommodation",
      image: "/images/updated_assets/gallery_overlook.jpg",
      caption: "Panoramic view of evergreen valley hills directly from private room seating."
    },
    {
      id: "g16",
      title: "Hilltop Cottage Lounge",
      category: "accommodation",
      image: "/images/rooms/room_8.jpg",
      caption: "Hilltop cottage lounge layout blending organic materials and modern fixtures."
    },
    {
      id: "g17",
      title: "Cottage Valley View Seating",
      category: "accommodation",
      image: "/images/rooms/room_3.jpg",
      caption: "Breathtaking mountain outlook through wide sliding glass panels."
    },
    {
      id: "g18",
      title: "Luxury Bath and Soaking Tub",
      category: "accommodation",
      image: "/images/rooms/room_6.jpg",
      caption: "Deep soaking tub detail set against elegant dark tiles for relaxation."
    },
    {
      id: "g19",
      title: "Valleys Shrouded in Mist",
      category: "nature",
      image: "/images/why_guests_choose/views.jpg",
      caption: "Morning mist drifting over the green rolling meadows of Vagamon."
    },
    {
      id: "g20",
      title: "Travancore Culinary Options",
      category: "dining",
      image: "/images/why_guests_choose/culinary.jpg",
      caption: "Fresh organic Kerala dishes served hot in our mountain dining area."
    },
    {
      id: "g21",
      title: "Kerala Host Services",
      category: "resort",
      image: "/images/why_guests_choose/hospitality.jpg",
      caption: "Warm, personalized guest care and travel coordination services."
    },
    {
      id: "g22",
      title: "Velvet Mist Suite Balcony",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1_E_w5Vt4t3pM8xH8h_upKhdvvhkxB2-v",
      caption: "Panoramic morning views of Vagamon pine valleys from the Velvet Mist Suite balcony."
    },
    {
      id: "g23",
      title: "Velvet Mist Suite Seating",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1fJZ4e7v-Ek73aHc96sU-6ru-FZJDmHD_",
      caption: "Premium handcrafted wooden seating area overlooking Vagamon rolling hills."
    },
    {
      id: "g24",
      title: "Velvet Mist Suite Bedroom",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1dvREhIzBakYDZj_SX-Dz-rKKnqJTEvp-",
      caption: "Spacious luxury suite bedroom with full-length glass panels in Vagamon, Kerala."
    },
    {
      id: "g25",
      title: "Velvet Mist Suite View",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1aI2gxj3J2V0ZHD-Yd-hukLb5vv1GYYBp",
      caption: "Breathtaking misty valley vistas from the Velvet Mist Suite private balcony."
    },
    {
      id: "g26",
      title: "Velvet Mist Suite Entrance",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1YNhYc0HwPVob-zbED3_TbwUQqjKvnb6J",
      caption: "Elegant suite entry matching modern luxury with Kerala hill station aesthetics."
    },
    {
      id: "g27",
      title: "Velvet Mist Suite Bathroom",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1ETBbRZuBqdQlOw20skJKengvdGfWD3S1",
      caption: "Premium en-suite bathroom with luxury details and modern fixtures."
    },
    {
      id: "g28",
      title: "Plantation Family Suite Entrance",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1hitp4QfeL69iT9MgqkzxJY_2G1xGqt9b",
      caption: "Private entrance to the spacious Plantation Family Suite in Vagamon, Kerala."
    },
    {
      id: "g29",
      title: "Plantation Family Suite Veranda",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/15fkZFqvbW6caUeijuY2WLNCD1SGHqxwK",
      caption: "Wide private veranda looking out to green tea plantations and valley slopes."
    },
    {
      id: "g30",
      title: "Plantation Family Suite Interior",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1Qu-r4pwncUAW8zhluGUwt1-XdtTsOVoI",
      caption: "Interconnected dual-room suite layout designed for premium family comfort."
    },
    {
      id: "g31",
      title: "Standard Cottage Exterior",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1j18dlEpOuruWDpX7qu9ioYkJqGHA7iZG",
      caption: "Charming standalone cottage surrounded by lush pine valley views in Vagamon."
    },
    {
      id: "g32",
      title: "Standard Cottage Veranda",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1RarfoLGwGbGriXWCpPVgLYilerG7Md7H",
      caption: "Cozy private veranda seating to enjoy the cool mountain breeze and gardens."
    },
    {
      id: "g33",
      title: "Standard Cottage Bedroom",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1-8jFGBkjqNQ0x54AZ_gYAOBdcOhx8gCD",
      caption: "Warm wooden interiors and minimalist design in our Standard Cottage retreat."
    },
    {
      id: "g34",
      title: "Standard Cottage View",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1HS_mh-5Yp7_rK5R_GzoXcMdXwMNIhVPZ",
      caption: "Peaceful pine valley and landscape gardens surrounding the cottage retreat."
    },
    {
      id: "g35",
      title: "Standard Cottage Seating",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1dRfayvL_UKIa84YMXKN-B1HE99OXJPMY",
      caption: "Comfy suite relaxation nook with valley vistas in Vagamon, Kerala."
    },
    {
      id: "g36",
      title: "Standard Cottage Detail",
      category: "accommodation",
      image: "https://lh3.googleusercontent.com/d/1rgiNccqAEcmVj9BRZ4fzl3CRR5iDHcpG",
      caption: "Thoughtfully crafted local timber furniture details in the hillside cottage."
    },
    {
      id: "g2",
      title: "Velvet Haven Resort Night View",
      category: "resort",
      image: "/images/night_hero.png",
      caption: "Serene mountain skyline view of our hillside sanctuary under starry night skies."
    }
  ] as GalleryItem[],

  // Location Highlights
  nearbyAttractions: [
    { name: "Vagamon Pine Forest", distance: "3.5 km", desc: "Famous majestic pine grove ideal for peaceful strolls and photography." },
    { name: "Vagamon Kurisumala Ashram", distance: "5.0 km", desc: "Serene monastery atop hill surrounded by dairy farm pastures." },
    { name: "Vagamon Lake & Boating", distance: "4.2 km", desc: "Calm water body offering paddle boating surrounded by green hills." },
    { name: "Vagamon Meadows (Green Meadows)", distance: "4.8 km", desc: "Sprawling grass hills with rolling terrain and scenic viewpoints." },
    { name: "Marmala Waterfall", distance: "18 km", desc: "Enchanting 130ft waterfall tucked inside dense forest trails." },
    { name: "Ulipooni Wildlife Sanctuary", distance: "9 km", desc: "Quiet lake and reserve ideal for peaceful bird watching and nature walks." }
  ],

  // Travel Distances
  travelInfo: [
    { label: "Cochin International Airport (COK)", distance: "98 km (~2.5 hours drive)" },
    { label: "Kottayam Railway Station", distance: "64 km (~1.5 hours drive)" },
    { label: "Ernakulam Town / Junction", distance: "102 km (~3 hours drive)" },
    { label: "Thiruvananthapuram (Trivandrum)", distance: "195 km (~4.5 hours drive)" }
  ],

  // Visitor Testimonials
  testimonials: [
    {
      id: "t1",
      quote: "Velvet Haven Resort is pure magic in Vagamon. The misty morning view from our suite balcony with hot Kerala tea was an unforgettable experience.",
      author: "Ananya Menon",
      location: "Kochi, Kerala",
      rating: 5
    },
    {
      id: "t2",
      quote: "The serene pine trees, fresh mountain breeze, and warm hospitality made our anniversary weekend truly special. High quality resort in every detail.",
      author: "Rahul Nair",
      location: "Bengaluru, Karnataka",
      rating: 5
    },
    {
      id: "t3",
      quote: "Absolute peace, luxurious room architecture, and exquisite local culinary options. We are definitely returning next winter!",
      author: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5
    }
  ] as TestimonialItem[]
};
