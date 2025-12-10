import { Moon, Leaf, Film, Sun, Home, ShieldCheck, Sparkles } from 'lucide-react';
import scenarioAwayMode from '@/images/scenario-away-mode.png';
import scenarioBedtime from '@/images/scenario-bedtime.png';
import scenarioClimateControl from '@/images/scenario-climate-control.png';
import scenarioMorningRoutine from '@/images/scenario-morning-routine.png';
import scenarioMore from '@/images/scenario-more.png';
import scenarioMovie from '@/images/scenario-movie.png';
import scenarioWelcome from '@/images/scenario-welcome.png';

export const scenarios = [
  {
    icon: Leaf,
    title: "Smart Climate Control",
    description: "Keep your home comfortable while reducing unnecessary energy use. With intelligent window, door, and presence detection, your climate system adapts automatically to what's happening in your home.",
    details: [
      "Monitors open and closed windows and doors",
      "Detects presence to adjust heating and cooling only when needed",
      "Optimizes temperature based on occupancy patterns",
      "Tracks energy savings and overall efficiency"
    ],
    image: scenarioClimateControl // "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  {
    icon: ShieldCheck,
    title: "Away mode",
    description: "Heading out for a weekend or an extended trip? Your home simulates your presence and notifies you of anything abnormal.",
    details: [
      "Random lighting patterns simulate presence",
      "Automated blinds that open and close naturally throughout the day",
      "Water leak sensors / smoke detector monitor all areas",
      "Temperature monitoring to prevent freezing or overheating"
    ],
    image: scenarioAwayMode
  },
  {
    icon: Moon,
    title: "Bedtime",
    description: "Place your phone on a specific spot like your night table and your home knows you're going to sleep.",
    details: [
      "Dims lights progressively over 5 minutes",
      "Sets thermostat to sleeping temperature",
      "Automatically locks all doors",
      "Arms security system in night mode",
    ],
    image: scenarioBedtime
  },
  {
    icon: Film,
    title: "Movie mode",
    description: "Start a movie on your TV, and your home sets the mood instantly",
    details: [
      "Dims lights or turns off completely",
      "Lowers blackout shades automatically",
      "Adjusts TV picture settings for cinema",
      "Pauses notifications on smart devices"
    ],
    image: scenarioMovie
  },
  {
    icon: Sun,
    title: "Morning routine",
    description: "Start your day right. Let your lights gently wake you while your dashboard immediately delivers personalized, useful information like weather, traffic, and more.",
    details: [
      "Gradual sunrise simulation with smart lights",
      "Displays real-time traffic on dashboard",
      "Reads calendar and weather updates",
      "Adjusts routine based on schedule"
    ],
    image: scenarioMorningRoutine
  },
  {
    icon: Home,
    title: "Welcome home scenes",
    description: "Never walk into a dark house. Geofencing detects your arrival, turning on entryway lights and adjusting the temperature to your preference.",
    details: [
      "Turns on pathway and entry lights",
      "Adjusts thermostat to comfort settings",
      "Unlocks door when you arrive",
      "Disarms security system automatically"
    ],
    image: scenarioWelcome
  },
  {
    icon: Sparkles,
    title: "And much more...",
    description: "These scenarios are just the beginning. Every routine, habit, and preference in your home can be automated and tailored to you, creating comfort, safety, and convenience that feels natural.",
    details: [
      "Custom automations for your unique lifestyle",
      "Seamless integration with all your smart devices",
      "Voice control and mobile app management",
      "Continuous updates with new features"
    ],
    image: scenarioMore
  }
];
