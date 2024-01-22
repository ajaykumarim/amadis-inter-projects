import Table1 from './Components/Table'
import Chart from './Components/Chart'
import DropDown from './Components/DropDown'
import './App.css'
import React,{useState} from 'react'
import jsonData from './Data.json'
const App = () => {
  const [dropChange,setDropChange]=useState("count")
  
  const handleChange = (value) => {
    setDropChange(value)
  };

  const [date1,setDate1]=useState(null)
    const [date2,setDate2]=useState(null)
    const dateFunction=(e)=>{
      if(e!=null){
        setDate1(e[0].format('YYYY-MM-DD'))
        setDate2(e[1].format('YYYY-MM-DD'))
      }else{
        setDate1('0000-00-00')
        setDate2('9999-99-99')
      }
    }
  
  return (
    <div className='background'>
        <DropDown handleChange={handleChange} dateFunction={dateFunction}/>
        <Chart dropChange={dropChange} handleChange={handleChange}  jsonData={jsonData} date1={date1} date2={date2}/>
        <Table1 dropChange={dropChange} date1={date1} date2={date2}/>
    </div>
  )
}

export default App




