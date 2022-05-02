import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Contents from './Contents';
import './Signup.scss';

function SignUp() {
  const navigate = useNavigate();

  const [contentsData, setContentsDataList] = useState([]);
  useEffect(() => {
    fetch('/data/SignUpMock/contentsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setContentsDataList(data);
      });
  }, []);

  const [inputValues, setInputValues] = useState({
    email: '',
    pw: '',
    pw2: '',
    name: '',
    address: '',
    phone: '',
    gender: '',
    age: null,
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues(inputValues => ({ ...inputValues, [name]: value }));
  };
  const pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

  const isValid =
    inputValues.email.includes('@', '.') &&
    inputValues.pw.length >= 8 &&
    pwdCheck.test(inputValues.pw) &&
    inputValues.pw.length >= 8 &&
    pwdCheck.test(inputValues.pw) &&
    inputValues.pw === inputValues.pw2 &&
    inputValues.name.length >= 2;

  function goToLogIn(e) {
    e.preventDefault();
    fetch('http://10.58.7.24:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.pw,
        name: inputValues.name,
        address: inputValues.address,
        phone_number: inputValues.phone,
        gender: inputValues.gender,
        age: inputValues.age,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('token', result.access_token);
          alert('환영합니다! boyFriends 입니다!');
          navigate('/');
        }
      });
  }

  return (
    <div className="signUp">
      <div className="wrapper">
        <p className="signUpLogo">회원가입</p>
        <p className="signUpBar">
          <span className="red">*</span> 필수입력사항
        </p>
        <form className="form" onChange={handleInput}>
          {contentsData.map(data => {
            return (
              <Contents
                inputValues={inputValues}
                contents={data}
                key={data.id}
              />
            );
          })}
          <div className="contents">
            <div className="inputWrapper">
              <label className="contentLabel">성별</label>
              <div className="genderLabel">
                <input
                  type="radio"
                  name="gender"
                  className="gender"
                  value="남자"
                />
                <span>남자</span>
                <input
                  type="radio"
                  name="gender"
                  className="gender"
                  value="여자"
                />
                <span>여자</span>
              </div>
            </div>
          </div>
          <button
            className={`submit ${isValid ? 'abled' : 'disabled'}`}
            disabled={!isValid}
            onClick={goToLogIn}
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
