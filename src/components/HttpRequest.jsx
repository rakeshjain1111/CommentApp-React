import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";

function HttpRequest() {
    const [allData, setAllData] = useState([]);
    const [oneData, setOneData] = useState([]);
    let [counter, setCounter]=useState(1);
    const [btnState, setBtnState]=useState(true);

    function ajaxRequest(){
        
        $.ajax({
            type:"GET",
            url:`https://jsonplaceholder.typicode.com/comments/`,
            success:(res)=>{
                setAllData(res);
            }
        })
    }

    function httpRequest(){
        $.ajax({
            type:"GET",
            url: `https://jsonplaceholder.typicode.com/comments/`,
            data:{
                id:counter
                
            },
            success:(response)=>{
                setOneData(response);
                
            }
        })
    }

    useEffect(()=>{
        ajaxRequest();
    },[])
   
    useEffect(()=>{
        // ajaxRequest();
        httpRequest();
    
    },[counter])


    function setCount(){
        if(counter>0){
            counter=counter-1;
            setCounter(counter);
        }
    }

    function Card({item}){
        return(
            <>
                <div className='card my-3 shadow-sm'>
                    <div className='card-header fw-bold text-captalize'>
                        {item.email}
                    </div>
                    <div className='card-body'>
                        {item.body}
                    </div>
                </div>
            </>
        )     
    }
  return (
   <>
     <div className='Container rounded mt-2 bg-opacity-10 py-1 px-5 bg-primary'>
        <h1 className='text-center'>HttpRequest</h1>
        <div className='d-flex justify-content-between'>
            <Button className='bg-primary' onClick={()=>setBtnState(true)}>Show All Comment</Button>
            <Button className='bg-primary' onClick={()=>setBtnState(false)}>Show Single Comment</Button>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='display-5 fw-bold'>Comment</div>
            <div className='fs-4 shadow-sm bg-secondary bg-opacity-25 rounded px-2'>New Comment</div>
        </div>

        {
            btnState?
            allData.map((item,index)=>{
                return <Card item={item} key={index}/>
            })
            :
            oneData.map((item,index)=>{
                return <Card item={item} key={index}/>
            })
        }

        {/* {
            oneData.map((item,index)=>{
                return <Card item={item} key={index}/>
            })
        } */}
        <div className='d-flex justify-content-between'>
            <Button className='me-2' onClick={setCount}>Prev </Button>
            <Button className='me-2' onClick={()=>{setCounter(counter+1)}}>Next </Button>
        </div>
     </div>
   </>
  )
}

export default HttpRequest;