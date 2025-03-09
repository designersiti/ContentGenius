import React from "react";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import SummaryCards from "./dashboard/SummaryCards";
import WebsiteOverview from "./dashboard/WebsiteOverview";
import ContentActivity from "./dashboard/ContentActivity";
import UpcomingSchedule from "./dashboard/UpcomingSchedule";
import PerformanceChart from "./dashboard/PerformanceChart";
import QuickActions from "./dashboard/QuickActions";

interface HomeProps {
  username?: string;
  userAvatar?: string;
  notificationCount?: number;
  activePath?: string;
}

const Home = ({
  username = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  notificationCount = 3,
  activePath = "/",
}: HomeProps) => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Sidebar */}
      <Sidebar activePath={activePath} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          title="Dashboard"
          username={username}
          userAvatar={userAvatar}
          notificationCount={notificationCount}
        />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Summary Cards */}
            <SummaryCards
              websites={12}
              contentPieces={248}
              scheduledPosts={36}
              performanceScore={87}
            />

            {/* Quick Actions */}
            <QuickActions />

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Website Overview */}
              <WebsiteOverview />

              {/* Content Activity */}
              <ContentActivity />

              {/* Performance Chart */}
              <PerformanceChart />

              {/* Upcoming Schedule */}
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
