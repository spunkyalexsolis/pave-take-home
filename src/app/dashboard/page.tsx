import { ByStatusBarChart } from "./components/by-status-bar-chart";
import { SampleChart } from "./components/sample-chart";

export default function DashboardPage() {
    return (<div className="flex space-x-4 space-x-y">     
        <ByStatusBarChart chartTitle="Bar Chart - Stacked (Count)" chartDescription="Showing bar chart of number of transactions per month stacked by their status." type="count"/>
        <ByStatusBarChart chartTitle="Bar Chart - Stacked (Total)" chartDescription="Showing bar chart of impacted amount stacked by their status." type="total"/>
    </div>);
}