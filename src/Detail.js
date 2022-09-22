import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css';

function Detail(){
    const [data, setData] = useState([]);
    const param = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("https://630da65f109c16b9abea3faf.mockapi.io/smartphone").
        then((res)=>{return res.json()}).
        then(
            (res)=>{setData(res)}
            );
    },[]);


    let formatData = data.map((det)=>{

    return(
        <>
            <div className='BackCss'>
            <div class="card shadow-lg p-3 mb-5 bg-body-rounded-10px"  style={{width:"18rem"}}>
                    <div className='image-container'><img src={det.SmartPhoneImage} class="card-img-top" alt="..."/></div>
                <div class="card-body">
                    <h5 class="card-title cardtitle">Details</h5>
                    <h7><span>Name: </span>{det.SmartPhoneName}</h7><br/>
                    {/* <h7><span>MoName: </span>{det.SmartPhoneModel}</h7><br/>
                    <h7><span>PMaker: </span>{det.SmartPhoneMaker}</h7><br/>
                    <p class="card-text"><span>Decription: </span>{det.SmartPhoneDecription}</p><br/>
                    <h7><span>Price: </span>{det.SmartPhonePrice}</h7><br/>
                    <h7><span>Id: </span>{det.id}</h7><br/> */} 
                         <button className='btn btn-primary'  onClick={()=>{
                            navigate('../Detail/Information/'+det.id)}}>Go To Detail</button>
                </div>
            </div>
            </div>
        </>
    )

    });

    return(
        <>
            {formatData}
        </>
    );
}
export default Detail;