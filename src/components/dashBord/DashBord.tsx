import { Bar, Pie, Line } from "react-chartjs-2";
import DynamicChartComponent from "../DynamicChartComponent";

export const DashBord = () => {
  return (
    <div>
      <h1 className="my-3 italic text-center text-gray-500">Weblog Data</h1>
      <div className="h-full gap-2 md:flex">
        {/* bar chart */}
        <DynamicChartComponent
          labels={["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]}
          values={[12, 19, 3, 5, 2, 3]}
          tagName={Bar}
        />
        {/* pie chart */}
        <DynamicChartComponent
          labels={["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]}
          values={[12, 19, 3, 5, 2, 3]}
          tagName={Pie}
        />
        {/* line chart */}
        <DynamicChartComponent
          labels={["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]}
          values={[12, 19, 3, 5, 2, 3]}
          tagName={Line}
        />
      </div>
    </div>
  );
};
