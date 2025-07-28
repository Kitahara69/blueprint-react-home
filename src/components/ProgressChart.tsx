import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import '../styles/ProgressChart.css';

interface ProgressData {
  day: string;
  lessons: number;
}

interface ProgressChartProps {
  data: ProgressData[];
}

const chartConfig = {
  lessons: {
    label: "Lessons",
    color: "hsl(217, 91%, 60%)",
  },
};

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  return (
    <div className="progress-chart">
      <div className="chart-header">
        <h3>Weekly Progress</h3>
        <span className="chart-subtitle">Your learning journey this week</span>
      </div>
      <div className="chart-container">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="day" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="lessons" 
                stroke={chartConfig.lessons.color}
                strokeWidth={3}
                dot={{ fill: chartConfig.lessons.color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: chartConfig.lessons.color, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        {/*<div className="chart-stats">
          <div className="stat-item">
            <div className="stat-value">12</div>
            <div className="stat-label">Total Lessons</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">85%</div>
            <div className="stat-label">Accuracy Rate</div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default ProgressChart;