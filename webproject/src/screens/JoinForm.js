import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './JoinFrom.css';

const JoinForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    pw: "",
    name: "",
    phone: "",
    isStaff: 0,
  })
  
  const onChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const onSubmit = (e) => {
    e.preventDefult();
    console.log(formData);

    if(isNaN(formData.phone)){
      alert('전화번호는 숫자만 입력해주세요');
      setFormData({
          ...formData,
          phone: ""
      })
    } else if( formData.id !== "" && formData.pw !== "" && 
      formData.name !== "" && formData.phone && 
      formData.isStaff !== "" ){
        addMember();
    } else {
      alert('모든 항목을 기입해주세요');
    }
  }

  function addMember() {
    axios.post("http://localhost:8000/join", formData)
      .then((res)=>{
          alert('등록되었습니다.');
          navigate("/");
      })        
      .catch((e)=> {
          console.log(e);   
      })
  }

  return (
    <div className='joinwrap'>
      <p className='logdiv'>로그인</p> 
      <form onSubmit={onSubmit}>
        <FloatingLabel
          controlId="floatingId"
          label="Id"
          className="mb-3"
        >
          <Form.Control type="text" name="id" value={formData.id} onChange={onChange} />
        </FloatingLabel>
        <FloatingLabel cont  rolId="floatingPassword" label="Password">
          <Form.Control type="password" name="pw" value={formData.pw} onChange={onChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingName" label="Name">
          <Form.Control type="text" name="name" value={formData.name} onChange={onChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingPhone" label="Phone">
          <Form.Control type="text" name="phone" value={formData.phone} onChange={onChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingIsStaff" label="직급">
        <Form.Select name="isStaff" value={formData.isStaff} onChange={onChange}>
          <option>직급 선택</option>
          <option value="1">일반 부원</option>
          <option value="2">임원</option>
        </Form.Select>
      </FloatingLabel>
      <Button variant="outline-secondary" type="submit">등록</Button>{' '}
      </form>
    </div>
  )
}

export default JoinForm