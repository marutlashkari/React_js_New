import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';


function AddData(){
    const [data, setData] = useState([]);
    const navigate = useNavigate(); 


    useEffect(()=>{
        fetch('https://630da65f109c16b9abea3faf.mockapi.io/smartphone').
        then((res)=>{
            return res.json();
        }).
        then((res)=>{setData(res)})
    },[]);

    return(
        <>
            <div className='Uplode_page'> 
            <table cellPadding="10px">
                <tr>
                    <td>
                        <h1>Detail Uplode Pages</h1>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className='Tdata' placeholder='Enter Smart Phone Name' onChange={(e)=>{
                            setData({...data,SmartPhoneName:e.target.value});
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className='Tdata' placeholder='Enter Smart Phone Model' onChange={(e)=>{
                            setData({...data,SmartPhoneModel:e.target.value});
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className='Tdata' placeholder='Enter Smart Phone Maker' onChange={(e)=>{
                                setData({...data,SmartPhoneMaker:e.target.value});
                            }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className='Tdata' placeholder='Enter Smart Phone Decription' onChange={(e)=>{
                                setData({...data,SmartPhoneDecription:e.target.value});
                            }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className='Tdata' placeholder='Enter Smart Phone Url' onChange={(e)=>{
                                setData({...data,SmartPhoneImage:e.target.value});
                            }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className='Tdata' placeholder='Enter Smart Phone Price' onChange={(e)=>{
                                setData({...data,SmartPhonePrice:e.target.value});
                            }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className='Tdata' placeholder='Enter Id' onChange={(e)=>{
                                setData({...data,id:e.target.value});
                            }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        {/* <input type="button" className='btn btn-primary btna' value='ADD' onChange={()=>{
                                fetch('https://630da65f109c16b9abea3faf.mockapi.io/smartphone',{
                                    method: "POST",
                                    body:JSON.stringify(data),
                                    headers: {
                                        "content-type" : "application/json"
                                    }
                                }).
                                then((res)=>{
                                    navigate('/Detail');
                                })
                            }}/> */}

                            <input type="button" className='btn-primary btnadd' value='ADD'  onClick={()=>{

                                fetch('https://630da65f109c16b9abea3faf.mockapi.io/smartphone',{
                                    method:"POST",
                                    body:JSON.stringify(data),
                                    headers:{
                                        "Content-Type":"application/json"
                                    }
                                })
                                .then((res)=>{
                                navigate('/Detail');
                                })
                            }} />
                    </td>
                </tr>
            </table>
            </div>
        </>
    )
}
export default AddData;