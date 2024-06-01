import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-plugin-datalabels'; 

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => new Date(entry.timestamp).toLocaleString()),
    datasets: [
      {
        label: 'Events Over Time',
        data: data.map(entry => entry.flow_id),
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Flow ID'
        }
      }
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false, 
      }
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Events Over Time
        </Typography>
        <Line data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default LineChart;
