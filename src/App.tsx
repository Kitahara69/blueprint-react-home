import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your page components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LearningHub from "./pages/LearningHub";
import UserProfile from "./pages/UserProfile";
import UserFeedback from "./pages/UserFeedback"; // Import UserFeedback page
import LeaderboardPage from "./pages/LeaderboardPage"; // Import LeaderboardPage
import UserSettings from "./pages/UserSettings"; // Import UserSettings page
import UserAchievements from "./pages/UserAchievements"; // Import UserAchievements page
// Import the Layout component
import Layout from "./components/Layout"; // Assuming Layout.tsx is in components

// Import all your specific page components for sidebar links
// These imports are needed if they are directly rendered as route elements
//import ProfilePage from './components/ProfilePage';
//import LearnASLPage from './components/LearnASLPage';
//import AchievementsPage from './components/AchievementsPage';
//import SignBotPage from './components/SignBotPage';
//import SettingsPage from './components/SettingsPage';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* The Layout component should wrap all routes that need the Navbar and Sidebar.
            The children of this Route will be rendered inside the Layout's <Outlet />.
          */}
          <Route path="/" element={<Home />} /> {/* Index page will also get the layout */}
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/sign-bot" element={<LearningHub />} /> {/* Changed to SignBotPage */}
            <Route path="/learning-hub" element={<LearningHub />} />
            <Route path="/about-us" element={<Home />} /> {/* Assuming Home is a generic page */}
          <Route element={<Layout />}>
            
            
            {/* These pages now correctly use the Layout */}
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/learn-asl" element={<LearningHub />} />
            <Route path="/leaderboards" element={<LeaderboardPage />} />
            <Route path="/feedback" element={<UserFeedback />} />
            <Route path="/settings" element={<UserSettings />} />
            <Route path="/achievements" element={<UserAchievements />} />

            {/* Add other sidebar routes if they are not already covered 
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/learn-asl" element={<LearnASLPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            */}
            
          </Route>

          {/* The NotFound route typically does NOT use the main layout,
            so it remains outside the Layout route.
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
