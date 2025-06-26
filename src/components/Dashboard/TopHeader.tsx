import React from 'react';

const TopHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold tracking-[0.2em] text-foreground">
        WEEKLY STATUS DASHBOARD
      </h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-muted-foreground">ENTER START DATE →</span>
        <span className="text-lg font-semibold text-foreground">06/19/2024</span>
        <span className="text-sm font-medium text-muted-foreground">THROUGH</span>
        <span className="text-lg font-semibold text-foreground">06/25/2024</span>
      </div>
    </header>
  );
};

export default TopHeader;
