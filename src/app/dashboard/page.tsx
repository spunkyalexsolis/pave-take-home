import { ByStatusBarChart } from "./components/by-status-bar-chart";
import { SampleChart } from "./components/sample-chart";

export default function DashboardPage() {
    return (<div className="flex space-x-4 space-x-y">     
        <ByStatusBarChart/>
    </div>);
}