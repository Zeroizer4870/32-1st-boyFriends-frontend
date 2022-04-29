import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

function SignUp() {
  const navigate = useNavigate();
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
  const isValid =
    inputValues.email.includes('@') &&
    inputValues.pw.length >= 6 &&
    inputValues.pw === inputValues.pw2 &&
    inputValues.name.length >= 2;

  let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

  const isValidId = inputValues.email.includes('@' && '.');
  const isValidPw = pwdCheck.test(inputValues.pw);
  const isValidPw2 =
    pwdCheck.test(inputValues.pw) && inputValues.pw2 === inputValues.pw;
  const isValidName = inputValues.name.length >= 2;

  function goToLogIn(e) {
    e.preventDefault();
    fetch('http://10.58.0.112:8000/users/signup', {
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
          alert('환영합니다!');
          navigate('/');
        }
      });
  }

  return (
    <div className="signUp">
      <div className="wrapper">
        <div className="signUpWrapper">
          <p className="signUpLogo">회원가입</p>
        </div>
        <p className="signUpBar">
          <span className="red">*</span> 필수입력사항
        </p>

        <form className="form" onChange={handleInput}>
          <div className="contentWrapper">
            <label className="contentLabel">
              이메일 <span className="red">*</span>
            </label>

            <input
              type="text"
              name="email"
              className="email"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <p className={`check ${isValidId ? 'green' : 'gray'}`}>
            이메일 형식으로 입력해주세요
          </p>
          <div className="contentWrapper">
            <label className="contentLabel">
              비밀번호 <span className="red">*</span>
            </label>

            <input
              type="password"
              name="pw"
              className="pw"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <p className={`check ${isValidPw ? 'green' : 'gray'}`}>
            문자, 숫자, 특수문자로 8글자 이상을 입력해주세요
          </p>
          <div className="contentWrapper">
            <label className="contentLabel">
              비밀번호확인 <span className="red">*</span>
            </label>

            <input
              type="password"
              name="pw2"
              className="pw2"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
          </div>
          <p className={`check ${isValidPw2 ? 'green' : 'gray'}`}>
            동일한 비밀번호를 입력해주세요
          </p>
          <div className="contentWrapper">
            <label className="contentLabel">
              이름 <span className="red">*</span>
            </label>

            <input
              type="text"
              name="name"
              className="name"
              placeholder="이름을 입력해주세요"
            />
          </div>
          <p className={`check ${isValidName ? 'green' : 'gray'}`}>
            두 글자 이상을 입력해주세요
          </p>
          <div className="contentWrapper">
            <label className="contentLabel">휴대폰</label>

            <input
              type="number"
              name="phone"
              className="phone"
              placeholder="숫자만 입력해주세요"
            />
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">주소</label>

            <input
              type="text"
              name="address"
              className="address"
              placeholder="주소를 입력해주세요"
            />
          </div>
          <div className="contentWrapper">
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
          <div className="contentWrapper">
            <label className="contentLabel">나이</label>

            <input
              type="number"
              name="age"
              className="age"
              placeholder="나이를 입력해주세요"
            />
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
