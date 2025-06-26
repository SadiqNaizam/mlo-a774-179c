"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

interface CircularMetricProps {
  label: string;
  value: number;
}

const CircularMetric: React.FC<CircularMetricProps> = ({ label, value }) => {
  const data = [{ name: label, value }];

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="relative h-32 w-32">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="75%"
            outerRadius="100%"
            barSize={12}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              angleAxisId={0}
              background={{ fill: 'hsl(var(--card-foreground))' }}
              dataKey="value"
              cornerRadius={10}
              fill="hsl(195, 100%, 50%)"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-foreground">{value}</span>
        </div>
      </div>
      <p className="text-sm font-medium uppercase text-muted-foreground tracking-wider">{label}</p>
    </div>
  );
};

const CircularMetricsGrid: React.FC = () => {
  const metricsData: CircularMetricProps[] = [
    { label: 'Score #1', value: 85 },
    { label: 'Score #2', value: 73 },
    { label: 'Score #3', value: 92 },
    { label: 'Score #4', value: 54 },
    { label: 'Score #5', value: 75 },
  ];

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metricsData.map((metric) => (
            <CircularMetric key={metric.label} label={metric.label} value={metric.value} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CircularMetricsGrid;
