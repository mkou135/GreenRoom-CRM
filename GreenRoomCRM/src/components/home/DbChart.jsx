/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import pb from '../../pocketbaseClient';
import { Button } from '@material-tailwind/react';

const DbChart = () => {
  const [activeChart, setActiveChart] = useState('pie');
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetchEventData();
  }, []);

  const fetchEventData = async () => {
    try {
      const records = await pb.collection('events').getFullList();
      setEventData(records);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  const getPieChartData = () => {
    const eventTypeCount = eventData.reduce((acc, event) => {
      acc[event.event_type] = (acc[event.event_type] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(eventTypeCount).map(([name, value]) => ({ name, value }));
  };

  const getBarChartData = () => {
    const monthCount = eventData.reduce((acc, event) => {
      const month = new Date(event.event_date).getMonth();
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, Array(12).fill(0));

    return monthCount.map((count, index) => ({ month: `Month ${index + 1}`, count }));
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='m-3'>
      <div>
        <Button onClick={() => setActiveChart('pie')}>Pie Chart</Button>
        <Button onClick={() => setActiveChart('bar')}>Bar Graph</Button>
      </div>
      {activeChart === 'pie' ? (
        <PieChart width={400} height={400}>
          <Pie data={getPieChartData()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150}>
            {getPieChartData().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <BarChart width={600} height={300} data={getBarChartData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      )}
    </div>
  );
};

export default DbChart;