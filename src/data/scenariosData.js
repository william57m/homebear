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
    icon: Sun,
    title: "Good Morning",
    description: "Your day begins effortlessly. As morning arrives, lights gently wake you with a sunrise simulation, while your dashboard displays personalized information like weather, traffic, and your calendar for the day ahead.",
    details: [
      "Gradual sunrise simulation with smart lights",
      "Displays real-time traffic on dashboard",
      "Reads calendar and weather updates",
      "Adjusts routine based on schedule"
    ],
    image: scenarioMorningRoutine
  },
  {
    icon: Leaf,
    title: "All-Day Climate Control",
    description: "Throughout the day, your home maintains perfect comfort while minimizing energy waste. Intelligent window, door, and presence detection ensures your climate system adapts automatically to what's happening in every room.",
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
    title: "Away from Home",
    description: "When you leave for work or a trip, your home seamlessly transitions to away mode. It simulates your presence with intelligent lighting patterns and keeps you informed of anything unusual while you're gone.",
    details: [
      "Random lighting patterns simulate presence",
      "Automated blinds that open and close naturally throughout the day",
      "Water leak sensors / smoke detector monitor all areas",
      "Temperature monitoring to prevent freezing or overheating"
    ],
    image: scenarioAwayMode
  },
  {
    icon: Home,
    title: "Welcome Home",
    description: "As you return home in the evening, your house greets you warmly. Geofencing detects your arrival, lighting up the pathway and entryway while adjusting the temperature to your preferred comfort level.",
    details: [
      "Turns on pathway and entry lights",
      "Adjusts thermostat to comfort settings",
      "Unlocks door when you arrive",
      "Disarms security system automatically"
    ],
    image: scenarioWelcome
  },
  {
    icon: Film,
    title: "Movie Night",
    description: "It's time to unwind. Start a movie on your TV, and your home instantly creates the perfect cinema atmosphere—dimming lights, lowering shades, and minimizing distractions.",
    details: [
      "Dims lights or turns off completely",
      "Lowers blackout shades automatically",
      "Adjusts TV picture settings for cinema",
      "Pauses notifications on smart devices"
    ],
    image: scenarioMovie
  },
  {
    icon: Moon,
    title: "Good Night",
    description: "As your day winds down, simply place your phone on your nightstand. Your home recognizes it's time for bed and prepares everything for a peaceful night's rest.",
    details: [
      "Dims lights progressively over 5 minutes",
      "Sets thermostat to sleeping temperature",
      "Automatically locks all doors",
      "Arms security system in night mode",
    ],
    image: scenarioBedtime
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
