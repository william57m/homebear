import { Lightbulb, Blinds, Thermometer, Music, Shield, LayoutDashboard } from 'lucide-react';
import alarmImage from '@/images/services/alarm2.png';
import audioImage from '@/images/services/audio.jpg';
import dashboardImage from '@/images/services/dashboard.png';
import climateImage from '@/images/services/climate.jpg';
import blindsImage from '@/images/services/blinds.png';
import lightsImage from '@/images/services/lights.jpg';

export const servicesData = [
  {
    id: 'climate-control',
    title: "Climate Control",
    icon: Thermometer,
    shortDescription: "Maintain the perfect temperature year-round with intelligent thermostats that adapt to your lifestyle and optimize energy usage.",
    fullDescription: "Achieve ultimate comfort with intelligent climate control that senses your routine and adapts to your lifestyle for peak efficiency. Our systems ensure personalized temperature settings and optimal comfort throughout your home. Plus, with global access, you can effortlessly monitor and adjust your home's climate from anywhere, guaranteeing you always return to the perfect temperature.",
    benefits: [
      "Cost Reduction: Significantly lower heating and cooling bills.",
      "Remote Access: Control your thermostat from anywhere.",
      "Adaptive Intelligence: The system senses your routine and adapts to your lifestyle for peak efficiency and comfort.",
      "Voice Control Integration: Easily adjust temperatures using your voice."
    ],
    features: ["Efficient, Cost-Saving Climate Management", "Energy-Smart Window & Door Detection", "Adaptive Temperature Automation", "Real-Time Monitoring & Insights", "Geofencing"],
    image: climateImage
  },
  {
    id: 'smart-lighting',
    title: "Smart Lighting",
    icon: Lightbulb,
    shortDescription: "Control your home's ambiance with intelligent lighting systems. Set schedules, adjust brightness, and create perfect moods for any occasion.",
    fullDescription: "Transform your home with advanced smart lighting solutions that deliver perfect ambiance for every moment. From simulating a natural sunrise to setting a cozy movie scene or enhancing security while you're away, our systems offer complete creative control. Experience a truly cohesive and responsive environment through seamless integration with all your other smart devices.",
    benefits: [
      "Enhanced Energy Efficiency: Automatically turn off lights in empty rooms.",
      "Improved Security: Vacation mode mimics your presence when you're away.",
      "Wellness: Circadian rhythm lighting helps regulate your sleep cycle.",
      "Convenience: Voice control and automation mean never flipping a switch again."
    ],
    features: ["Voice control integration", "Presence detection / Automated schedules", "Color temperature adjustment", "Motion sensing", "Scene creation"],
    image: lightsImage
  },
  {
    id: 'security-systems',
    title: "Security Systems",
    icon: Shield,
    shortDescription: "Protect what matters most with intelligent security. Monitor your home from anywhere with smart cameras, sensors, and real-time alerts, and enjoy keyless entry.",
    fullDescription: "Rest easy knowing your home is protected by a state-of-the-art smart security system. From video doorbells, smart locks offering keyless access, and comprehensive perimeter monitoring, our solutions keep you connected to your home 24/7. Receive instant alerts on your phone if suspicious activity is detected, and check live video feeds from anywhere in the world.",
    benefits: [
      "Intelligent Detection: Smart cameras with Person Detection ensure you are alerted only to meaningful activity, reducing false alarms.",
      "Convenient Access & Keyless Entry: Easily grant temporary access to guests or service workers remotely, eliminating the need for physical keys.",
      "Peace of Mind: Constant monitoring of your property.",
      "Insurance Discounts: Many insurers offer lower rates for monitored homes."
    ],
    features: ["Integrated smart locks", "Instant security notifications", "Smart person detection", "Video history", "Comprehensive sensing: Door, window, and presence"],
    image: alarmImage
  },
  {
    id: 'automated-blinds',
    title: "Automated Blinds",
    icon: Blinds,
    shortDescription: "Experience effortless living with intelligent motorized blinds that respond dynamically to sunlight and personal settings. Perfect lighting for waking up, perfect shade for privacy, all automatically managed.",
    fullDescription: "Simplify your daily routine and enhance your home's ambiance with intelligent motorized blinds. These systems automatically adjust to the shifting sunlight and your customized preferences, providing perfect lighting for waking up and ideal shade for privacy without requiring manual interaction.",
    benefits: [
      "Energy Efficiency: By proactively controlling sunlight exposure, the blinds help regulate indoor temperature, potentially reducing cooling costs.",
      "Increased Security: Schedule blinds to open and close while you are away, giving the appearance that the home is occupied.",
      "Simplified Routine and Privacy: Use gentle, natural light to wake up easily and manage instant privacy exactly when you need it with simple digital controls.",
      "Effortless Convenience: Automate your environment completely, meaning you never have to manually adjust blinds again—simply set it and forget it."
    ],
    features: ["Dynamic Light Adjustment", "Personalized Scheduling", "One-Tap Privacy", "Gentle Wake-Up", "Voice Control Compatible"],
    image: blindsImage
  },
  {
    id: 'multi-room-audio',
    title: "Multi-Room Audio",
    icon: Music,
    shortDescription: "Seamless audio integration throughout your home. Effortlessly stream your favorite music, podcasts, and more in every room, all managed from one intelligent system.",
    fullDescription: "Fill your home with music. Our intelligent multi-room audio solutions allow you to effortlessly play different songs in different zones or stream the same playlist throughout the entire house for a party. Easily controlled from your phone or tablet, our systems provide comprehensive management for a rich and personalized listening experience across your entire home.",
    benefits: [
      "Ultimate Flexibility (Multi-Zone): Create distinct audio zones, allowing different music to be played simultaneously for parents, kids, or guests.",
      "Streamlined Control: Enjoy total control over all your music sources, volume, and zones using one intuitive app on your phone or tablet.",
      "Effortless Integration: Seamlessly connect and manage all the components of your multi-room audio system from a unified platform.",
      "Ambiance Automation: Integrate music playback into your smart home routines, such as automatically starting a relaxation playlist when your smart lighting dims in the evening."
    ],
    features: ["Whole-home audio sync", "Voice commands", "Multi-User Control", "Streaming service integration", "Party mode"],
    image: audioImage
  },
  {
    id: 'custom-dashboard',
    title: "Custom Dashboard",
    icon: LayoutDashboard,
    shortDescription: "See the right information, get the right control. We build personalized smart home dashboards that automatically adapt to your routine throughout the day.",
    fullDescription: "Take control of your smart home with a dashboard designed specifically for you. Unlike generic apps, our custom dashboards are tailored to your family's specific needs and routines. We aggregate data from all your devices, weather, calendars, energy monitors, security cameras etc. into a beautiful, easy-to-read interface. It evolves with your day, showing morning traffic and news when you wake up, and security status and lock controls when you go to bed.",
    benefits: [
      "Clarity: Eliminate app fatigue by centralizing all controls.",
      "Personalization: Interfaces designed around your specific family routines.",
      "Routine Integration: Trigger complex scenes like 'Good Morning' or 'Leaving' automatically based on your established routines and actions.",
      "Insight: Visualize energy usage and home health data clearly."
    ],
    features: ["Personalized layout", "Adaptive display modes", "Real-time data visualization", "Touchscreen wall controllers", "Multi-user profiles"],
    image: dashboardImage
  }
];