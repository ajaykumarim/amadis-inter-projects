import React,{useState} from 'react';
import { DatePicker, Space } from 'antd';
import {Select} from 'antd';

const { RangePicker } = DatePicker;

const DropDown = ({handleChange,dateFunction}) =>{ 
    
    return(
    <div>
   <Space direction="vertical" size={12}>
     <RangePicker 
     onChange={(e)=>dateFunction(e)}/>
  </Space>
  <Space wrap>
    <Select
      defaultValue="count"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'count',
          label: 'Count',
        },
        {
          value: 'cost',
          label: 'Cost',
        }
      ]}
    />
  </Space>
    </div>
)};
export default DropDown;