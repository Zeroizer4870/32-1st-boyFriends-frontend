import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Contents from './Contents';
import './SignUp.scss';

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
    address2: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues(inputValues => ({ ...inputValues, [name]: value }));
  };
  const pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

  const isValid =
    inputValues.email.includes('@' && '.') &&
    inputValues.pw.length >= 8 &&
    pwdCheck.test(inputValues.pw) &&
    inputValues.pw === inputValues.pw2 &&
    inputValues.name.length >= 2;

  function goToLogIn(e) {
    e.preventDefault();
    fetch('http://10.58.1.186:8000/users/signup', {
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
        if (result.MESSAGE === 'SUCCESS') {
          alert('환영합니다! BoyFriends 입니다!');
          navigate('/users/signin');
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
              <label className="contentLabel">주소</label>
              <select name="address" className="select">
                <option value="" hidden>
                  주소를 선택해주세요
                </option>
                <option>서울특별시</option>
                <option>인천광역시</option>
                <option>부산광역시</option>
                <option>대구광역시</option>
                <option>대전광역시</option>
                <option>광주광역시</option>
                <option>세종시</option>
                <option>경기도</option>
                <option>강원도</option>
                <option>충청도</option>
                <option>경상도</option>
                <option>전라도</option>
                <option>제주도</option>
                <option>해외</option>
              </select>
            </div>
          </div>
          <div className="contents">
            <div className="inputWrapper">
              <label className="contentLabel">성별</label>
              <div className="genderLabel">
                <input
                  type="radio"
                  name="gender"
                  className="gender"
                  value="남성"
                />
                <span>남자</span>
                <input
                  type="radio"
                  name="gender"
                  className="gender"
                  value="여성"
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
