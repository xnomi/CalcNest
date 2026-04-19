"use client";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartProps {
  type: 'line' | 'bar' | 'pie' | 'doughnut';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
}

export default function Chart({ type, data, options }: ChartProps) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            family: 'var(--font-inter)',
          }
        }
      },
      tooltip: {
        titleFont: {
          family: 'var(--font-inter)',
        },
        bodyFont: {
          family: 'var(--font-inter)',
        }
      }
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className="w-full h-64 sm:h-80 relative">
      {type === 'line' && <Line data={data} options={mergedOptions} />}
      {type === 'bar' && <Bar data={data} options={mergedOptions} />}
      {type === 'pie' && <Pie data={data} options={mergedOptions} />}
      {type === 'doughnut' && <Doughnut data={data} options={mergedOptions} />}
    </div>
  );
}
