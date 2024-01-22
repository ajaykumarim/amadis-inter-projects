import React,{useEffect,useState} from 'react';
import { Table } from 'antd';
import jsonData from '../Data.json'

const Table1 = ({dropChange,date1,date2}) =>{
    let dateData1
    let dateData2
    if(date1==null&&date2==null){
        dateData1=jsonData.count
        dateData2=jsonData.cost
    }else{
        dateData1=jsonData.count.filter((a)=>a.date>=date1&&a.date<=date2)
        dateData2=jsonData.cost.filter((a)=>a.date>=date1&&a.date<=date2)
    }
    let sortedCount=dateData1.sort((a,b)=>b.count-a.count)
    let sortedCost=dateData2.sort((a,b)=>b.cost-a.cost) 

    
    const [data1,setData]=useState(sortedCount)
    const [tr,setTr]=useState('count')
    useEffect(()=>{
        if(dropChange!='count'){
            setData(sortedCost)
            setTr('cost')
          }else{
            setData(sortedCount)
            setTr('count')
          }   
    },[dropChange,date1,date2])

    const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Product',
          dataIndex: 'productCode',
          key: 'product',
        },
        {
          title: tr,
          dataIndex: tr,
          key: tr,
        },
      ]; 

    return(<Table columns={columns} dataSource={data1} />)
} 

export default Table1;

