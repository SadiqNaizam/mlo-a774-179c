import React from 'react';

/**
 * The main application header.
 * It is sticky and displays the dashboard title and the current date range.
 */
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <h1 className="text-lg font-bold tracking-[0.2em] text-foreground sm:text-xl md:text-2xl">
          WEEKLY STATUS DASHBOARD
        </h1>
        <div className="hidden items-center space-x-2 text-right md:flex md:space-x-4">
          <div className="flex items-center space-x-2">
             <span className="text-xs font-medium text-muted-foreground lg:text-sm">ENTER START DATE →</span>
             <span className="text-sm font-semibold text-foreground lg:text-lg">06/19/2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-muted-foreground lg:text-sm">THROUGH</span>
            <span className="text-sm font-semibold text-foreground lg:text-lg">06/25/2024</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
