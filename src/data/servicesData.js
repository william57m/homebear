import { Lightbulb, Blinds, Thermometer, Music, Shield, LayoutDashboard } from 'lucide-react';

export const servicesData = [
  {
    id: 'smart-lighting',
    title: "Smart Lighting",
    icon: Lightbulb,
    shortDescription: "Control your home's ambiance with intelligent lighting systems. Set schedules, adjust brightness, and create perfect moods for any occasion.",
    fullDescription: "Transform the way you experience your home with our advanced smart lighting solutions. Whether you want to simulate a sunrise to wake up naturally, create a cozy atmosphere for movie night, or ensure your home looks occupied while you're away, our systems give you complete control. Our lighting solutions integrate seamlessly with other smart home devices to provide a cohesive and responsive environment.",
    benefits: [
      "Enhanced Energy Efficiency: Automatically turn off lights in empty rooms.",
      "Improved Security: Vacation mode mimics your presence when you're away.",
      "Wellness: Circadian rhythm lighting helps regulate your sleep cycle.",
      "Convenience: Voice control and automation mean never flipping a switch again."
    ],
    features: ["Voice control integration", "Automated schedules", "Color temperature adjustment", "Motion sensing", "Scene creation"]
  },
  {
    id: 'automated-blinds',
    title: "Automated Blinds",
    icon: Blinds,
    shortDescription: "Smart motorized blinds that adjust to natural light, temperature, and your preferences. Wake up to natural sunlight or enjoy privacy with a tap.",
    fullDescription: "Experience the perfect blend of natural light and privacy with our automated shading solutions. Our motorized blinds and shades adjust automatically throughout the day to optimize sunlight, manage room temperature, and protect your interiors from UV damage. Seamlessly integrated with your smart home system, they can close automatically when you leave or open gently with your morning alarm.",
    benefits: [
      "Energy Savings: Insulate your home automatically during peak temperatures.",
      "UV Protection: Protect furniture and artwork from fading.",
      "Privacy: One-touch privacy for your entire home.",
      "Convenience: Eliminate the hassle of manually adjusting hard-to-reach windows."
    ],
    features: ["Solar tracking", "Remote app control", "Timer settings", "Silent motors", "Fabric variety"]
  },
  {
    id: 'climate-control',
    title: "Climate Control",
    icon: Thermometer,
    shortDescription: "Maintain the perfect temperature year-round with intelligent HVAC systems that learn your preferences and optimize energy usage.",
    fullDescription: "Achieve ultimate comfort with smart climate control that learns your habits and adapts to your lifestyle. Our systems allow for room-by-room zoning, ensuring that everyone in the family is comfortable. Monitor and adjust your home's temperature from anywhere in the world, ensuring you never come home to a house that's too hot or too cold.",
    benefits: [
      "Cost Reduction: significantly lower heating and cooling bills.",
      "Remote Access: Control your thermostat from your smartphone.",
      "Learning Capability: The system learns your schedule automatically.",
      "Zoned Comfort: Eliminate hot and cold spots in your home."
    ],
    features: ["Learning thermostat", "Multi-zone control", "Humidity monitoring", "Air quality sensors", "Geofencing"]
  },
  {
    id: 'multi-room-audio',
    title: "Multi-Room Audio",
    icon: Music,
    shortDescription: "Seamless audio throughout your home. Stream your favorite music, podcasts, and more in every room with crystal-clear sound quality.",
    fullDescription: "Fill your home with music. Our multi-room audio solutions allow you to play different songs in different rooms or stream the same playlist throughout the entire house for a party. Controlled easily from your phone or tablet, our high-fidelity audio systems are designed to be heard, not seen, with discreet architectural speakers that blend into your decor.",
    benefits: [
      "Entertainment: Instant access to millions of songs via streaming services.",
      "Aesthetics: Invisible or discreet speakers preserve your interior design.",
      "Flexibility: distinct audio zones for parents, kids, and guests.",
      "Simplicity: One app controls all your music sources."
    ],
    features: ["Whole-home audio sync", "Voice commands", "High-resolution audio support", "Streaming service integration", "Party mode"]
  },
  {
    id: 'security-systems',
    title: "Security Systems",
    icon: Shield,
    shortDescription: "Protect what matters most with intelligent security. Monitor your home from anywhere with smart cameras, sensors, and real-time alerts.",
    fullDescription: "Rest easy knowing your home is protected by a state-of-the-art smart security system. From video doorbells and smart locks to comprehensive perimeter monitoring, our solutions keep you connected to your home 24/7. Receive instant alerts on your phone if suspicious activity is detected, and check live video feeds from anywhere in the world.",
    benefits: [
      "Peace of Mind: Constant monitoring of your property.",
      "Deterrence: Visible cameras and smart lighting deter potential intruders.",
      "Insurance Discounts: Many insurers offer lower rates for monitored homes.",
      "Access Control: Grant temporary access to guests or service workers remotely."
    ],
    features: ["24/7 professional monitoring", "Mobile alerts", "Smart person detection", "Video history", "Integrated smart locks"]
  },
  {
    id: 'custom-dashboard',
    title: "Custom Dashboard",
    icon: LayoutDashboard,
    shortDescription: "Build a personalized dashboard that shows exactly what matters to you at every moment of the day. Whether it's displaying traffic conditions in the morning, highlighting energy usage in the afternoon, or surfacing quick actions when you get home, your dashboard adapts to your routine. See the right information and the most relevant controls—right when you need them.",
    fullDescription: "Take control of your smart home with a dashboard designed specifically for you. Unlike generic apps, our custom dashboards are tailored to your family's specific needs and routines. We aggregate data from all your devices—weather stations, calendars, energy monitors, and security cameras—into a beautiful, easy-to-read interface. It evolves with your day, showing morning traffic and news when you wake up, and security status and lock controls when you go to bed.",
    benefits: [
      "Clarity: Eliminate app fatigue by centralizing all controls.",
      "Personalization: Interfaces designed around your specific family routines.",
      "Efficiency: One-tap scenes for 'Good Morning', 'Leaving', or 'Movie Time'.",
      "Insight: Visualize energy usage and home health data clearly."
    ],
    features: ["Personalized layout", "Real-time data visualization", "Adaptive display modes", "Touchscreen wall controllers", "Multi-user profiles"]
  }
];