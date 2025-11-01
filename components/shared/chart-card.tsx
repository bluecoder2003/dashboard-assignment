import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChartCardProps {
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
}

export const ChartCard = ({
  title,
  description,
  children,
  className,
  contentClassName,
  headerClassName,
}: ChartCardProps) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className={cn(headerClassName)}>
        <CardTitle className="text-sm font-semibold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={cn(contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
};

