import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Boxes } from 'lucide-react';

const TotalProductsSold: React.FC = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-sm font-medium uppercase text-muted-foreground tracking-wider">
          Total Products Sold
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center text-center space-y-4 py-8">
        <div className="text-7xl font-bold" style={{color: 'hsl(195, 100%, 50%)'}}>364</div>
        <Boxes className="h-20 w-20" style={{color: 'hsl(195, 100%, 50%)'}} strokeWidth={1.5}/>
        <p className="text-sm text-muted-foreground">06/19/2024 - 06/25/2024</p>
      </CardContent>
    </Card>
  );
};

export default TotalProductsSold;
