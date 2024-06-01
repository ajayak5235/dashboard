import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ data }) => {
  const categoryCount = data.reduce((acc, entry) => {
    acc[entry.alert.category] = (acc[entry.alert.category] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(categoryCount),
    datasets: [
      {
        data: Object.values(categoryCount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value, context) => {
          return value;
        },
      },
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
    elements: {
      arc: {
        borderWidth: 0, 
      },
    },
  };

  return (
    <Card style={{ backgroundColor: '#2e2e2e', color: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', maxWidth: '600px', margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Event Count by Category
        </Typography>
        <Pie data={chartData} options={options} width={400} height={300} />
      </CardContent>
    </Card>
  );
};

export default PieChart;
