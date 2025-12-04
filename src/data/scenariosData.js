import { Moon, LogOut, Leaf, Film, Sun, Home, ShieldCheck } from 'lucide-react';

export const scenarios = [
  {
    icon: Leaf,
    title: "Smart Climate Control",
    description: "Keep your home comfortable while reducing unnecessary energy use. With intelligent window, door, and presence detection, your climate system adapts automatically to what's happening in your home.",
    details: [
      "Monitors open and closed windows and doors",
      "Detects presence to adjust heating and cooling only when needed",
      "Pauses HVAC when windows or doors are opened",
      "Sends alerts to close openings when energy is being wasted",
      "Resumes climate control automatically once everything is closed",
      "Optimizes temperature based on occupancy patterns",
      "Tracks energy savings and overall efficiency"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  {
    icon: ShieldCheck,
    title: "Away mode",
    description: "Heading out for a weekend or an extended trip? Your home simulates your presence and notifies you of anything abnormal.",
    details: [
      "Random lighting patterns simulate presence",
      "Automated blinds and curtains that open and close naturally throughout the day",
      "Water leak sensors monitor all areas",
      "Smoke and CO detector integration",
      "Temperature monitoring to prevent freezing or overheating",
      "24/7 instant alerts to your phone"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
  },
  {
    icon: Moon,
    title: "Bedtime",
    description: "Place your phone on a specific spot like your night table and your home knows you're going to sleep.",
    details: [
      "Closes motorized blinds and curtains",
      "Dims lights progressively over 5 minutes",
      "Sets thermostat to sleeping temperature",
      "Automatically locks all doors",
      "Arms security system in night mode",
    ],
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80"
  },
  {
    icon: Film,
    title: "Movie mode",
    description: "Start a movie on your TV, and your home sets the mood instantly",
    details: [
      "Dims lights to 10% or turns off completely",
      "Lowers blackout shades automatically",
      "Activates surround sound system",
      "Adjusts TV picture settings for cinema",
      "Pauses notifications on smart devices"
    ],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80"
  },
  {
    icon: Sun,
    title: "Morning routine",
    description: "Start your day right. As your lights gently brighten, your dashboard displays current traffic conditions for your commute while coffee starts brewing.",
    details: [
      "Gradual sunrise simulation with smart lights",
      "Displays real-time traffic on dashboard",
      "Starts coffee maker at preset time",
      "Reads calendar and weather updates",
      "Adjusts routine based on schedule"
    ],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
  },
  {
    icon: Home,
    title: "Welcome-home scenes",
    description: "Never walk into a dark house. Geofencing detects your arrival, turning on entryway lights and adjusting the temperature to your preference.",
    details: [
      "Geofencing detects when you're nearby",
      "Turns on pathway and entry lights",
      "Adjusts thermostat to comfort settings",
      "Unlocks door when you arrive",
      "Disarms security system automatically"
    ],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
  }
];
