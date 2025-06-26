"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';

const trafficData = [
    { date: '06/19/2024', "Website Visits": 88, "Page Views": 35 },
    { date: '06/20/2024', "Website Visits": 115, "Page Views": 45 },
    { date: '06/21/2024', "Website Visits": 80, "Page Views": 18 },
    { date: '06/22/2024', "Website Visits": 125, "Page Views": 55 },
    { date: '06/23/2024', "Website Visits": 105, "Page Views": 40 },
    { date: '06/24/2024', "Website Visits": 70, "Page Views": 15 },
    { date: '06/25/2024', "Website Visits": 95, "Page Views": 32 },
];

const WebsiteTrafficChart: React.FC = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-sm font-medium uppercase text-muted-foreground tracking-wider">Website Traffic</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={trafficData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--card-foreground))" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="hsl(var(--card-foreground))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(val) => val.substring(0, 5)} 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
              />
              <Legend wrapperStyle={{paddingTop: '20px'}} iconType="line"/>
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="Website Visits" 
                stroke="hsl(var(--card-foreground))" 
                fillOpacity={1} 
                fill="url(#colorVisits)"
                strokeWidth={2}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="Page Views" 
                stroke="hsl(195, 100%, 50%)" 
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: 'hsl(195, 100%, 50%)' }}
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebsiteTrafficChart;
