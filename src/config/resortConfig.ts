export interface RoomItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  capacity: string;
  bedType: string;
  viewType: string;
  size: string;
  image: string;
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
    diningOutdoor: "/images/drive_assets/dining_table.jpg",
    eveningCampfire: "/images/drive_assets/campfire.jpg"
  },

  // Rooms Data
  rooms: [
    {
      id: "velvet-mist-suite",
      name: "Velvet Mist Suite",
      subtitle: "Panoramic Mountain & Valley View",
      description: "Luxuriously crafted suite featuring expansive glass walls overlooking Vagamon's rolling misty hills, handcrafted hardwood furnishings, private balcony, and plush king bed.",
      capacity: "2 - 3 Guests",
      bedType: "1 King Bed",
      viewType: "Misty Mountain & Valley View",
      size: "550 sq. ft.",
      image: "/images/rooms/room_2.jpg",
      features: ["Private View Balcony", "Breakfast Included", "High-Speed Wi-Fi", "En-suite Luxury Bath", "Tea/Coffee Maker", "24/7 Room Service"],
      recommended: true
    },
    {
      id: "hilltop-heaven-villa",
      name: "Hilltop Heaven Villa",
      subtitle: "Private Cottage with Sunset Deck",
      description: "An exclusive standalone cottage perched elevated over the pine valley. Offers secluded privacy, deep soaking tub, private fire pit patio, and warm Kerala timber architecture.",
      capacity: "2 - 4 Guests",
      bedType: "1 King Bed + Daybed",
      viewType: "360° Hilltop & Sunset View",
      size: "750 sq. ft.",
      image: "/images/updated_assets/room_hilltop.jpg",
      features: ["Private Sunset Deck", "Soaking Bathtub", "Fireplace Lounge", "Complimentary Gourmet Breakfast", "Minibar", "Dedicated Host Service"]
    },
    {
      id: "plantation-family-suite",
      name: "Plantation Family Suite",
      subtitle: "Spacious Sanctuary for Families",
      description: "Designed for family comfort with dual interconnected luxury bedrooms, wide private veranda overlooking green tea estates, and family dining nook.",
      capacity: "4 - 6 Guests",
      bedType: "2 Queen Beds",
      viewType: "Tea Plantation & Forest View",
      size: "950 sq. ft.",
      image: "/images/rooms/room_4.jpg",
      features: ["2 Bedrooms", "Spacious Living Room", "Private Veranda", "Kid-Friendly Amenities", "Free High-Speed Wi-Fi", "Complimentary Tea Tasting"]
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
      title: "Scenic Infinity Pool",
      description: "Dive into our crystal-clear infinity pool overlooking the rolling mountains and valley fog of Vagamon.",
      iconName: "Waves",
      image: "/images/updated_assets/facility_pool.jpg",
      highlights: ["Valley Overlook", "Infinity Pool", "Lounge Chairs"]
    },
    {
      id: "tv-entertainment",
      title: "TV & Entertainment Hub",
      description: "Enjoy high-definition flat-screen TVs and premium entertainment streaming options in every guest cottage.",
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
      title: "Fully Equipped Guest Kitchen",
      description: "Prepare custom meals and local specialties in a modern, fully equipped kitchen environment.",
      iconName: "ChefHat",
      image: "/images/updated_assets/facility_kitchen.jpg",
      highlights: ["Modern Cookware", "Induction Cooktop", "Spices Provided"]
    },
    {
      id: "spacious-room",
      title: "Luxury Spacious Rooms",
      description: "Premium cottage layouts featuring extra space, warm woodwork, and sliding glass balconies.",
      iconName: "BedDouble",
      image: "/images/updated_assets/facility_spacious.jpg",
      highlights: ["King Beds", "Timber Architecture", "Veranda Outlets"]
    },
    {
      id: "program-venue",
      title: "Scenic Program Venue",
      description: "A dedicated gathering space and stone amphitheater ideal for evening campfire gatherings and special events.",
      iconName: "Flame",
      image: "/images/updated_assets/facility_venue.jpg",
      highlights: ["Evening Campfire Arena", "Starlight Seating", "Event Ready"]
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
      title: "Misty Sunrise over Velvet Haven",
      category: "resort",
      image: "/images/drive_assets/views.jpg",
      caption: "Early morning mountain fog floating through the resort grounds."
    },
    {
      id: "g2",
      title: "Resort Architecture in Forest",
      category: "resort",
      image: "/images/drive_assets/resort_lobby.jpg",
      caption: "Seamless integration of modern luxury with Vagamon natural topography."
    },
    {
      id: "g3",
      title: "Velvet Mist Suite Bedroom",
      category: "accommodation",
      image: "/images/rooms/room_5.jpg",
      caption: "Spacious luxury room with full glass windows and plush king bed."
    },
    {
      id: "g4",
      title: "Panoramic Plantation Landscape",
      category: "nature",
      image: "/images/drive_assets/scenic_misty.jpg",
      caption: "Lush green slopes surrounding Velvet Haven Resort."
    },
    {
      id: "g5",
      title: "Pine Forest Trails nearby",
      category: "nature",
      image: "/images/drive_assets/scenic_pines.jpg",
      caption: "Serene pine tree canopy paths perfect for peaceful walks."
    },
    {
      id: "g6",
      title: "Luxury Bathroom & Soaking View",
      category: "accommodation",
      image: "/images/rooms/room_6.jpg",
      caption: "Elegant interior detail crafted for deep relaxation."
    },
    {
      id: "g7",
      title: "Misty Hilltop Outlook",
      category: "nature",
      image: "/images/drive_assets/views.jpg",
      caption: "Rolling green hills shrouded in characteristic Vagamon fog."
    },
    {
      id: "g8",
      title: "Hillside Dining Pavilion",
      category: "dining",
      image: "/images/drive_assets/dining_table.jpg",
      caption: "Outdoor dining experience overlooking mountain vistas."
    },
    {
      id: "g9",
      title: "Night Fire Pit & Starlight Lounge",
      category: "dining",
      image: "/images/drive_assets/campfire.jpg",
      caption: "Cosy evening campfire gathering under the stars."
    },
    {
      id: "g10",
      title: "Luxury Balcony Overlook",
      category: "accommodation",
      image: "/images/rooms/room_7.jpg",
      caption: "Breathtaking green mountain views directly from your private bedroom seating."
    },
    {
      id: "g11",
      title: "Hilltop Cottage Lounge",
      category: "accommodation",
      image: "/images/rooms/room_8.jpg",
      caption: "Premium cottage interiors blending modern elegance with natural timber."
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

  // Guest Testimonials
  testimonials: [
    {
      id: "t1",
      quote: "Velvet Haven Resort is pure magic in Vagamon. The misty morning view from our suite balcony with hot Kerala tea was an unforgettable experience.",
      author: "Anand & Priya Nair",
      location: "Kochi, Kerala",
      rating: 5
    },
    {
      id: "t2",
      quote: "The evening campfire, serene pine trees, and warm hospitalities made our anniversary weekend truly special. High quality resort in every detail.",
      author: "Dr. Vikram Kulkarni",
      location: "Bengaluru, Karnataka",
      rating: 5
    },
    {
      id: "t3",
      quote: "Absolute peace, luxurious room architecture, and exquisite local culinary options. We are definitely returning next winter!",
      author: "Sarah & David Miller",
      location: "United Kingdom",
      rating: 5
    }
  ] as TestimonialItem[]
};
