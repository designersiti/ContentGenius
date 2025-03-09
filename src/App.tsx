import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import WebsiteManagement from "./components/websites/WebsiteManagement";
import ContentGeneration from "./components/content/ContentGeneration";
import SchedulingSystem from "./components/schedule/SchedulingSystem";
import ContentLibrary from "./components/library/ContentLibrary";
import AnalyticsDashboard from "./components/analytics/AnalyticsDashboard";
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
