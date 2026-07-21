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

  // Experiences Data - "What You Can Do in Vagamon" Guide
  experiences: [
    // Category 1: High-Thrill Activities
    {
      id: "paragliding",
      title: "Paragliding over Vagamon Hills",
      category: "thrill",
      shortDesc: "Soar above Vagamon’s rolling green hills and valleys with an unforgettable tandem paragliding experience.",
      fullDesc: "Soar above Vagamon’s rolling green hills and valleys with an unforgettable tandem paragliding experience. Certified pilots guide you smoothly over emerald mountain ridges and pine groves.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
      tag: "High-Thrill Activity"
    },
    {
      id: "vagamon-adventure-park",
      title: "Vagamon Adventure Park",
      category: "thrill",
      shortDesc: "Experience exciting adventures including ziplining, sky cycling, giant swings, and rock climbing.",
      fullDesc: "Experience exciting adventures including ziplining, sky cycling, giant swings, rock climbing, and other high-energy activities in the lush green mountain park of Vagamon.",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      tag: "Mountain Adventure"
    },
    {
      id: "uluppooni-jeep-safari",
      title: "Uluppooni Off-Road Jeep Safari",
      category: "thrill",
      shortDesc: "Take an off-road journey through rugged green terrain, hidden waterfalls, and forest trails around Uluppooni.",
      fullDesc: "Take an off-road journey through rugged green terrain, hidden waterfalls, forest trails, and scenic viewpoints around Uluppooni in an open-top 4x4 mountain jeep.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      tag: "Off-Road Safari"
    },

    // Category 2: Nature & Sightseeing
    {
      id: "vagamon-pine-forest",
      title: "Vagamon Pine Forest",
      category: "nature",
      shortDesc: "Walk beneath towering pine trees and explore one of Vagamon’s most peaceful and scenic natural landscapes.",
      fullDesc: "Walk beneath towering pine trees and explore one of Vagamon’s most peaceful and scenic natural landscapes, surrounded by dense green pine canopies and mountain mist.",
      image: "https://i.ibb.co/jvN1Q7wS/Screenshot-2026-07-21-124133.png",
      tag: "Nature & Sightseeing"
    },
    {
      id: "vagamon-meadows",
      title: "Vagamon Meadows",
      category: "nature",
      shortDesc: "Relax and wander through the wide green meadows surrounded by the peaceful beauty of Vagamon’s rolling hills.",
      fullDesc: "Relax and wander through the wide green meadows surrounded by the peaceful beauty of Vagamon’s rolling hills, offering endless greenery and gentle mountain breezes.",
      image: "https://i.ibb.co/2YmdQCp2/Screenshot-2026-07-21-124848.png",
      tag: "Nature & Sightseeing"
    },
    {
      id: "marmala-waterfalls",
      title: "Marmala Waterfalls",
      category: "nature",
      shortDesc: "Discover a beautiful forest waterfall surrounded by lush greenery and a peaceful natural atmosphere.",
      fullDesc: "Discover a beautiful forest waterfall surrounded by lush greenery, natural rock pools, and a peaceful forest atmosphere tucked away in Vagamon's green valleys.",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
      tag: "Forest Waterfall"
    },
    {
      id: "vagamon-lake",
      title: "Vagamon Lake",
      category: "nature",
      shortDesc: "Enjoy the calm beauty of a scenic lake surrounded by green hills and peaceful landscapes.",
      fullDesc: "Enjoy the calm beauty of a scenic lake surrounded by green hills, lush gardens, and peaceful mountain reflection views.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      tag: "Nature & Sightseeing"
    },

    // Category 3: Trekking & Spiritual Trails
    {
      id: "thangal-para",
      title: "Thangal Para",
      category: "trekking",
      shortDesc: "Explore the distinctive rock formations and enjoy breathtaking panoramic views across the green Vagamon valleys.",
      fullDesc: "Explore the distinctive rock formations and enjoy breathtaking panoramic views across the green Vagamon valleys from Thangal Para's elevated mountain ridge.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      tag: "Trekking Trail"
    },
    {
      id: "murugan-mala",
      title: "Murugan Mala",
      category: "trekking",
      shortDesc: "Follow the peaceful hill trail and discover panoramic views across Vagamon’s lush green surroundings.",
      fullDesc: "Follow the peaceful hill trail and discover panoramic views across Vagamon’s lush green surroundings on the serene ascent to Murugan Mala.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      tag: "Spiritual Trail"
    },
    {
      id: "kurisumala",
      title: "Kurisumala Hills",
      category: "trekking",
      shortDesc: "Experience peaceful hill trails, spiritual surroundings, and beautiful sunrise or sunset views across the Vagamon landscape.",
      fullDesc: "Experience peaceful hill trails, spiritual monastery surroundings, Swiss dairy cattle pastures, and beautiful sunrise or sunset views across the green Vagamon landscape.",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
      tag: "Spiritual Trail"
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
