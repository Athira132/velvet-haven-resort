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
  category: 'nature' | 'relaxation' | 'outdoor' | 'romantic' | 'family';
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
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919846000000",
  whatsappDisplayNumber: import.meta.env.VITE_WHATSAPP_DISPLAY_NUMBER || "+91 98460 00000",
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || "+91 98460 00000",
  contactPhoneAlt: import.meta.env.VITE_CONTACT_PHONE_ALT || "+91 98460 00001",
  email: import.meta.env.VITE_EMAIL || "velvethavenresort@gmail.com",
  
  // Location & Map settings
  mapUrl: import.meta.env.VITE_MAP_URL || "https://maps.app.goo.gl/8vNvgiym9pJrfnoMA",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62916.14138128362!2d76.86608518335017!3d9.68652431766627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0704407bc4d623%3A0xf657805ecae2d19!2sVagamon%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Core visual assets provided by user
  images: {
    logo: "https://i.ibb.co/27DmhGfZ/Untitled-design-2-removebg-preview.png",
    hero1: "https://i.ibb.co/GvMnbvMS/Chat-GPT-Image-Jul-21-2026-01-26-57-PM.png",
    hero2: "https://i.ibb.co/KpjgGDJN/Untitled-design-3.png",
    roomMain: "https://i.ibb.co/m5myhvKx/Screenshot-2026-07-21-124142.png",
    resortPanorama: "https://i.ibb.co/ccnRyzQ2/Screenshot-2026-07-21-124623.png",
    landscapeSurroundings: "https://i.ibb.co/jvN1Q7wS/Screenshot-2026-07-21-124133.png",
    suiteInterior: "https://i.ibb.co/ZbxxgSv/Screenshot-2026-07-21-124955.png",
    mistyHills: "https://i.ibb.co/2YmdQCp2/Screenshot-2026-07-21-124848.png",
    diningOutdoor: "https://i.ibb.co/wZbsBgjM/Screenshot-2026-07-21-124928.png",
    eveningCampfire: "https://i.ibb.co/PGHRfZjJ/Screenshot-2026-07-21-124818.png"
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
      image: "https://i.ibb.co/m5myhvKx/Screenshot-2026-07-21-124142.png",
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
      image: "https://i.ibb.co/ZbxxgSv/Screenshot-2026-07-21-124955.png",
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
      image: "https://i.ibb.co/ccnRyzQ2/Screenshot-2026-07-21-124623.png",
      features: ["2 Bedrooms", "Spacious Living Room", "Private Veranda", "Kid-Friendly Amenities", "Free High-Speed Wi-Fi", "Complimentary Tea Tasting"]
    }
  ] as RoomItem[],

  // Experiences Data
  experiences: [
    {
      id: "vagamon-paragliding",
      title: "Paragliding over Vagamon Ridges",
      category: "adventure",
      shortDesc: "Soar over Vagamon's emerald green mountain peaks and misty valleys.",
      fullDesc: "Experience the thrill of tandem paragliding off Vagamon's famous high-altitude launch ridges. Glide smoothly through mountain thermals with certified pilots taking in 360-degree aerial views of rolling tea estates and pine valleys.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
      tag: "Tandem Paragliding"
    },
    {
      id: "mountain-jeep-safari",
      title: "Off-Road Mountain Jeep Safari",
      category: "adventure",
      shortDesc: "Traverse rugged mountain trails, hidden waterfalls, and secret ridge viewpoints.",
      fullDesc: "Embark on an exhilarating 4x4 open-top jeep safari through Vagamon's rugged mountain terrain. Discover hidden waterfalls, secluded tea estates, and high-altitude ridge viewpoints accessible only by off-road vehicles.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      tag: "4x4 Jeep Safari"
    },
    {
      id: "pine-forest-walks",
      title: "Guided Pine Forest & Valley Trails",
      category: "nature",
      shortDesc: "Wander through tall fragrant pine groves enveloped in soft mountain mist.",
      fullDesc: "Immerse your senses in Vagamon's iconic pine forests. Guided morning treks lead you through tranquil canopy paths with views of hidden mountain streams and lush valleys.",
      image: "https://i.ibb.co/jvN1Q7wS/Screenshot-2026-07-21-124133.png",
      tag: "Pine Canopy Trail"
    },
    {
      id: "sunset-meadows",
      title: "Vagamon Meadows & Rolling Grasslands",
      category: "nature",
      shortDesc: "Witness golden hour hues over endless green rolling hills.",
      fullDesc: "Experience Vagamon's world-famous rolling meadows at dusk. We arrange private high-tea hampers for couples and families to enjoy spectacular sunset panoramas over lush green hillscapes.",
      image: "https://i.ibb.co/2YmdQCp2/Screenshot-2026-07-21-124848.png",
      tag: "Scenic Hill View"
    },
    {
      id: "tea-estate-tour",
      title: "Tea Plantation Walks & Estate Tasting",
      category: "nature",
      shortDesc: "Stroll through emerald tea gardens and learn the art of traditional tea plucking.",
      fullDesc: "Take a guided walking tour through surrounding heritage tea plantations. Learn about organic tea cultivation, try your hand at leaf plucking alongside local estate tea pickers, and conclude with a fresh estate tea tasting session.",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1200&q=80",
      tag: "Tea Plantation"
    },
    {
      id: "kurisumala-trekking",
      title: "Kurisumala Hill & Monastery Trekking",
      category: "adventure",
      shortDesc: "Ascend sacred Kurisumala Ashram peaks surrounded by alpine dairy farms.",
      fullDesc: "Embark on a refreshing morning hike to Kurisumala hill. Pass by peaceful monastery grounds, grazing Swiss dairy cattle, and reach mountain ridges where cool mountain breeze carries complete peace.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      tag: "Hill Trek"
    },
    {
      id: "waterfall-excursion",
      title: "Mountain Stream & Waterfall Trails",
      category: "relaxation",
      shortDesc: "Discover secluded natural streams and crystal-clear mountain cascades in the woods.",
      fullDesc: "Follow hidden forest paths to serene mountain cascades and natural rock pools. Relax by the cool flowing water, listen to forest birdsong, and enjoy a private streamside hamper prepared by our resort hosts.",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
      tag: "Waterfall Cascade"
    },
    {
      id: "starlight-campfire",
      title: "Starlight Campfire & Acoustic Evenings",
      category: "relaxation",
      shortDesc: "Warm firelight, crisp mountain air, and fresh grilled local delicacies under starry skies.",
      fullDesc: "As twilight settles over the hills, gather around our central stone fire pit. Enjoy live acoustic melodies, freshly roasted barbecue, and warm conversation under clear hill-station skies.",
      image: "https://i.ibb.co/PGHRfZjJ/Screenshot-2026-07-21-124818.png",
      tag: "Evening Ritual"
    },
    {
      id: "plantation-dining",
      title: "Traditional Kerala Gourmet Dining",
      category: "family",
      shortDesc: "Authentic Malabar & Central Travancore culinary creations prepared with fresh organic produce.",
      fullDesc: "Savor traditional Kerala dishes served on fresh banana leaves alongside modern international cuisine crafted by our master resort chefs in an open-air mountain-view dining pavilion.",
      image: "https://i.ibb.co/wZbsBgjM/Screenshot-2026-07-21-124928.png",
      tag: "Culinary Pavilion"
    }
  ] as ExperienceItem[],

  // Facilities Data
  facilities: [
    {
      id: "hilltop-restaurant",
      title: "Panoramic Hillside Restaurant",
      description: "Open-air and glass-walled dining serving authentic Kerala flavors, fresh farm-to-table salads, and international comfort cuisine with mountain backdrop views.",
      iconName: "Utensils",
      image: "https://i.ibb.co/wZbsBgjM/Screenshot-2026-07-21-124928.png",
      highlights: ["Fresh Farm Ingredients", "Kerala Speciality Menu", "Indoor & Deck Seating", "Buffet & A la Carte"]
    },
    {
      id: "infinity-deck",
      title: "Misty Valley View Deck & Pool",
      description: "An architectural deck perched over the valley, offering comfortable lounge sunbeds, infinity pool view, and morning yoga space amidst the fog.",
      iconName: "Waves",
      image: "https://i.ibb.co/GvMnbvMS/Chat-GPT-Image-Jul-21-2026-01-26-57-PM.png",
      highlights: ["Valley Overlook", "Morning Yoga Mat Setup", "Sunset Viewing Lounge", "Refreshment Bar"]
    },
    {
      id: "campfire-arena",
      title: "Evening Campfire & Outdoor Lounge",
      description: "Dedicated stone amphitheater fire pit with plush outdoor seating for unforgettable nights under starry Vagamon skies.",
      iconName: "Flame",
      image: "https://i.ibb.co/PGHRfZjJ/Screenshot-2026-07-21-124818.png",
      highlights: ["Nightly Fire Lighting", "Barbecue On Request", "Music & Ambient Lighting", "Family-Friendly"]
    },
    {
      id: "resort-amenities",
      title: "Modern Comforts & Guest Care",
      description: "High-speed Wi-Fi across the resort, secure private parking, 24/7 power backup, concierge excursion assistance, and daily housekeeping.",
      iconName: "ShieldCheck",
      image: "https://i.ibb.co/ZbxxgSv/Screenshot-2026-07-21-124955.png",
      highlights: ["High-Speed Fiber Wi-Fi", "Free Secured Parking", "24/7 Generator Backup", "Doctor on Call"]
    }
  ] as FacilityItem[],

  // Gallery Items
  gallery: [
    {
      id: "g1",
      title: "Misty Sunrise over Velvet Haven",
      category: "resort",
      image: "https://i.ibb.co/GvMnbvMS/Chat-GPT-Image-Jul-21-2026-01-26-57-PM.png",
      caption: "Early morning mountain fog floating through the resort grounds."
    },
    {
      id: "g2",
      title: "Resort Architecture in Forest",
      category: "resort",
      image: "https://i.ibb.co/KpjgGDJN/Untitled-design-3.png",
      caption: "Seamless integration of modern luxury with Vagamon natural topography."
    },
    {
      id: "g3",
      title: "Velvet Mist Suite Bedroom",
      category: "accommodation",
      image: "https://i.ibb.co/m5myhvKx/Screenshot-2026-07-21-124142.png",
      caption: "Spacious luxury room with full glass windows and plush king bed."
    },
    {
      id: "g4",
      title: "Panoramic Plantation Landscape",
      category: "nature",
      image: "https://i.ibb.co/ccnRyzQ2/Screenshot-2026-07-21-124623.png",
      caption: "Lush green slopes surrounding Velvet Haven Resort."
    },
    {
      id: "g5",
      title: "Pine Forest Trails nearby",
      category: "nature",
      image: "https://i.ibb.co/jvN1Q7wS/Screenshot-2026-07-21-124133.png",
      caption: "Serene pine tree canopy paths perfect for peaceful walks."
    },
    {
      id: "g6",
      title: "Luxury Bathroom & Soaking View",
      category: "accommodation",
      image: "https://i.ibb.co/ZbxxgSv/Screenshot-2026-07-21-124955.png",
      caption: "Elegant interior detail crafted for deep relaxation."
    },
    {
      id: "g7",
      title: "Misty Hilltop Outlook",
      category: "nature",
      image: "https://i.ibb.co/2YmdQCp2/Screenshot-2026-07-21-124848.png",
      caption: "Rolling green hills shrouded in characteristic Vagamon fog."
    },
    {
      id: "g8",
      title: "Hillside Dining Pavilion",
      category: "dining",
      image: "https://i.ibb.co/wZbsBgjM/Screenshot-2026-07-21-124928.png",
      caption: "Outdoor dining experience overlooking mountain vistas."
    },
    {
      id: "g9",
      title: "Night Fire Pit & Starlight Lounge",
      category: "dining",
      image: "https://i.ibb.co/PGHRfZjJ/Screenshot-2026-07-21-124818.png",
      caption: "Cosy evening campfire gathering under the stars."
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
