import { useEffect, useState} from 'react';
import { Form } from 'react-router-dom';
import { useNavigate, useParams} from 'react-router-dom';


function EditInfo(){
    const param = useParams();
  const navigate = useNavigate();
  const apiUrl = "https://630da65f109c16b9abea3faf.mockapi.io/smartphone";

  useEffect(()=>{
    fetch("https://630da65f109c16b9abea3faf.mockapi.io/smartphone"+param.id,{method:"GET"})
    .then(res=>res.json())
    .then(res=>setData(res));
  },[]);

  const [data, setData] = useState({});
  return(<>
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
                            <input type="button" className='btn-primary btnadd' value='EDIT'  onClick={()=>{
                                fetch('https://630da65f109c16b9abea3faf.mockapi.io/smartphone/',{
                                    method:"PUT",
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
  </>);
}


export default EditInfo;