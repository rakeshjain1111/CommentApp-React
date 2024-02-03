import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.css';
import $ from "jquery";

function HttpRequest() {
    const [allData, setAllData] = useState([]);
    const [oneData, setOneData] = useState([]);
    const [counter, setCounter]=useState(1);

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
        // ajaxRequest();
        httpRequest();
    
    },[counter])

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
            <div className='display-5 fw-bold'>Comment</div>
            <div className='fs-4 shadow-sm bg-secondary bg-opacity-25 rounded px-2'>New Comment</div>
        </div>
        {
            oneData.map((item,index)=>{
                return <Card item={item} key={index}/>
            })
        }
        <div className='float-end'>
            <Button className='me-2' onClick={()=>{setCounter(counter-1)}}>
                <i className='fa fa-angle-left'></i>
            </Button>
            <Button className='me-2' onClick={()=>{setCounter(counter+1)}}>
                <i className='fa fa-angle-right'></i>
            </Button>

            <h1>{counter}</h1>
        </div>
     </div>
   </>
  )
}

export default HttpRequest;