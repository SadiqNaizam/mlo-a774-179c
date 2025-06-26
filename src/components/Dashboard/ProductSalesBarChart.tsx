"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const salesData = [
  { name: 'Region 1', sales: 70 },
  { name: 'Region 2', sales: 103 },
  { name: 'Region 3', sales: 116 },
  { name: 'Region 4', sales: 35 },
  { name: 'Region 5', sales: 40 },
].reverse(); // To match visual top-to-bottom order

const ProductSalesBarChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium uppercase text-muted-foreground tracking-wider">Product Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer>
            <BarChart
              layout="vertical"
              data={salesData}
              margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 14 }}
                width={70}
              />
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent))' }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  color: 'hsl(var(--foreground))',
                  borderRadius: 'var(--radius)',
                }}
              />
              <Bar dataKey="sales" fill="hsl(195, 100%, 50%)" radius={[0, 4, 4, 0]}>
                <LabelList
                  dataKey="sales"
                  position="right"
                  offset={10}
                  style={{ fill: 'hsl(var(--foreground))', fontSize: 14, fontWeight: 500 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSalesBarChart;
