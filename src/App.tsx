import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import WebsiteManagement from "./components/websites/WebsiteManagement";
import ContentGeneration from "./components/content/ContentGeneration";
import SchedulingSystem from "./components/schedule/SchedulingSystem";
import ContentLibrary from "./components/library/ContentLibrary";
import AnalyticsDashboard from "./components/analytics/AnalyticsDashboard";
import Account from "./components/settings/Account";
import Preferences from "./components/settings/Preferences";
import ApiKeys from "./components/settings/ApiKeys";
import Profile from "./components/account/Profile";
import Billing from "./components/account/Billing";
import Subscription from "./components/account/Subscription";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import ForgotPassword from "./components/auth/ForgotPassword";
import Register from "./components/auth/Register";
import NotificationsPage from "./components/notifications/NotificationsPage";
import HelpSupport from "./components/help/HelpSupport";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<WebsiteManagement />} />
          <Route path="/content" element={<ContentGeneration />} />
          <Route path="/schedule" element={<SchedulingSystem />} />
          <Route path="/library" element={<ContentLibrary />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />

          {/* Settings Routes */}
          <Route path="/settings" element={<Account />} />
          <Route path="/settings/account" element={<Account />} />
          <Route path="/settings/preferences" element={<Preferences />} />
          <Route path="/settings/api-keys" element={<ApiKeys />} />

          {/* Account Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/subscription" element={<Subscription />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          {/* Other Routes */}
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/help" element={<HelpSupport />} />

          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
