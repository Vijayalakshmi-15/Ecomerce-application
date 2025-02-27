import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Addprod = () => {
  let [msg,setMsg]=useState("")
  let obj=useContext(Ct)
  let [data,setData]=useState({"name":"","cat":"","price":"","desc":"","dct":"","pimg":""})
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})


  }
  useEffect(()=>{
    if(obj.usercon.token=="")
    {
      navigate("/login")
    }

  },[])
  let x=useRef()
  let navigate=useNavigate()
  let fun1=(e)=>{
    setData({...data,"pimg":e.target.files[0]})
  }
  let add=()=>{
    let fd=new FormData()
    for(let p in data)
    {
      fd.append(p,data[p])
    }
    axios.post("http://localhost:5000/addprod",fd,{"headers":{"Authorization":obj.usercon.token,"uid":obj.usercon._id}}).then((res)=>{
      setMsg(res.data.msg)
      setData({"name":"","cat":"","price":"","desc":"","dct":"","pimg":""})
      x.current.value=""
 //navigate("/")

    })

  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='enter pname' name="name" value={data.name} onChange={fun}/>
        <input type='text' placeholder='enter cat' name="cat" value={data.cat} onChange={fun}/>
        <input type='text' placeholder='enter price' name="price" value={data.price} onChange={fun}/>
        <input type='text' placeholder='enter desc' name="desc" value={data.desc} onChange={fun}/>
        <input type='text' placeholder='enter dct' name="dct" value={data.dct} onChange={fun}/>
<input type='file' name="pimg" onChange={fun1} ref={x} />
<button onClick={add}>Addprod</button>

    </div>
    </div>
  )
}

export default Addprod
