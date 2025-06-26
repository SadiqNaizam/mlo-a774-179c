import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, className }) => {
  return (
    <Card className={cn("bg-card text-card-foreground", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium uppercase text-muted-foreground tracking-wider">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-5xl font-bold text-foreground">{value}</div>
      </CardContent>
    </Card>
  );
};

const StatsCardGrid: React.FC = () => {
  const statsData: StatCardProps[] = [
    { title: 'Revenue', value: '$92,463' },
    { title: 'Production Output', value: '315' },
    { title: 'Customer Satisfaction Score', value: '91%' },
    { title: 'Employee Attendance', value: '96%' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};

export default StatsCardGrid;
