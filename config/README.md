# Configuration Data Files

This directory contains all the static/mock data used throughout the dashboard application.

## Files Overview

### `dashboard-data.ts`
Contains metrics data for the dashboard cards:
- Customer count
- Order count  
- Revenue
- Growth percentage

### `charts-data.ts`
Contains data for all chart visualizations:
- **Revenue Chart**: Monthly revenue comparison (current vs previous)
- **Projections Chart**: Projections vs actuals by month
- **Revenue by Location**: Geographic revenue breakdown
- **Total Sales**: Sales by channel (Direct, Affiliate, Sponsored, E-mail)

### `products-data.ts`
Contains data for the top selling products table with:
- Product name
- Price
- Quantity sold
- Total amount

### `contact.ts`
Contains order data with:
- Order ID
- User information (name, avatar)
- Project details
- Address
- Date
- Status (In Progress, Complete, Pending, Approved, Rejected)

### `index.ts`
Central export file for all config data - import from here for cleaner imports:

```typescript
// Instead of:
import { metricsData } from "@/config/dashboard-data";
import { revenueChartData } from "@/config/charts-data";

// You can do:
import { metricsData, revenueChartData } from "@/config";
```

## Usage

All components that need static data should import from these config files instead of hardcoding values.

Example:
```typescript
import { topSellingProducts } from "@/config/products-data";
// or
import { topSellingProducts } from "@/config";
```

## Adding New Data

When adding new static/mock data:
1. Create a new file in this directory (e.g., `new-data.ts`)
2. Define TypeScript interfaces for type safety
3. Export the data and interfaces
4. Add the export to `index.ts`
5. Update this README

