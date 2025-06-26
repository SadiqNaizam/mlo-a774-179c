import React from 'react';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout provides the core structure for the application,
 * including a sticky header and a main content area.
 * It's designed to wrap page-level components.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className={cn("flex-1", className)}>
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
