import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/charts';

const Chart = ({dropChange,jsonData,date1,date2}) => {
    let filtereddata1=jsonData.count.filter((a)=>a.date>=date1&&a.date<=date2)
    let filtereddata2=jsonData.cost.filter((a)=>a.date>=date1&&a.date<=date2)
    let dateData1
    let dateData2
   if(date1==null&&date2==null){
        dateData1=jsonData.count
        dateData2=jsonData.cost
   }else{
     dateData1=filtereddata1==[]?jsonData.count:filtereddata1
     dateData2=filtereddata2==[]?jsonData.cost:filtereddata2
   }  
  const data=dropChange=='cost'?dateData2:dropChange=='count'?dateData1:dateData1;
                                                                                                                
  const config = {
    data,
    isStack: true,
    xField: 'date',
    yField: dropChange,
    seriesField: 'productCode',
    label: {
      position: 'top',
      layout: [
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  console.log(config.color);

  return (date1==null&&date2==null)||((filtereddata1.length!=0)||(filtereddata2.length!=0))?<Column {...config} key={dropChange} className='barChart' />:null
};

export default Chart;







