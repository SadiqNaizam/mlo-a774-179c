import React from 'react';
import CircularMetricsGrid from '@/components/Dashboard/CircularMetricsGrid';
import ProductSalesBarChart from '@/components/Dashboard/ProductSalesBarChart';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import TopHeader from '@/components/Dashboard/TopHeader';
import TotalProductsSold from '@/components/Dashboard/TotalProductsSold';
import WebsiteTrafficChart from '@/components/Dashboard/WebsiteTrafficChart';

/**
 * The main dashboard page for viewing weekly status reports.
 * It assembles various data visualization components into a cohesive layout.
 */
const IndexPage: React.FC = () => {
  return (
    // Assuming the 'dark' class is applied to a higher-level element (e.g., <html>)
    // to enable Tailwind's dark mode, as configured in tailwind.config.ts.
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="p-6">
        <TopHeader />

        <section className="mt-6">
          <StatsCardGrid />
        </section>

        <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* These two components will appear side-by-side on large screens */}
          <ProductSalesBarChart />
          <TotalProductsSold />

          {/* These components have 'lg:col-span-2' in their own implementation, */}
          {/* so they will span the full width of this grid on large screens. */}
          <WebsiteTrafficChart />
          <CircularMetricsGrid />
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
