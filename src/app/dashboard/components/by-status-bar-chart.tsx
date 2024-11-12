'use client'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"
 
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useData } from "@/hooks/use-data"
import { aggregateGroupData, groupByDay, groupByMonthAndYear } from "@/utils/data-utils"
 
const chartConfig = {
  '0D_CORRECT': {
    label: "0D_CORRECT",
    color: "var(--chart-1)"
  },
  '1D_CORRECT': {
    label: "1D_CORRECT",
    color: "var(--chart-2)",
  },
  '2D_CORRECT': {
    label: "2D_CORRECT",
    color: "var(--chart-3)",
  },
  'INCORRECT': {
    label: "INCORRECT",
    color: "var(--chart-9)",
  },
  'NO_PREDICTION': {
    label: "NO_PREDICTION",
    color: "var(--chart-6)",
  },
  'TRUTH_NOT_AVAILABLE': {
    label: "TRUTH_NOT_AVAILABLE",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig
 
export function ByStatusBarChart() {
  const { data } = useData();

  // const groupedByDay = groupByDay(data, 'eventDate');
  const groupedByMonthAndYear = groupByMonthAndYear(data, 'eventDate');
  const chartData = aggregateGroupData(groupedByMonthAndYear,'count', 'eventStatus', 'nextAmount');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Stacked</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>  
          <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-[500px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="key"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />           

            {Object.keys(chartConfig).map((barKey: string) => 
              <Bar
                dataKey={barKey}
                stackId="a"
                key={barKey}
                fill={`var(--color-${barKey})`}
                radius={[4, 4, 0, 0]}
              />             
            )} 
          </BarChart>
        </ChartContainer>
      </CardContent>      
    </Card>
  )
}