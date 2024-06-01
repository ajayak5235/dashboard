import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const severityCount = data.reduce((acc, entry) => {
    acc[entry.alert.severity] = (acc[entry.alert.severity] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(severityCount),
    datasets: [
      {
        label: 'Event Count by Severity',
        data: Object.values(severityCount),
        backgroundColor: ['#FFA726', '#FF7043', '#8D6E63'],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Severity',
          color: '#fff'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Count',
          color: '#fff'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      }
    }
  };

  return (
    <Card style={{ backgroundColor: '#2e2e2e', color: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Event Count by Severity
        </Typography>
        <Bar data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default BarChart;
