import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

function SignUp() {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
    pw2: '',
    name: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues(inputValues => ({ ...inputValues, [name]: value }));
  };

  // const isEmpty = inputValues === false;
  // if (isEmpty) {
  //   style.visibility = 'hidden';
  // }

  const isValid =
    inputValues.id.includes('@') &&
    inputValues.pw.length >= 6 &&
    inputValues.pw === inputValues.pw2 &&
    inputValues.name.length >= 3;

  const isValidId = inputValues.id.includes('@');
  const isValidPw = inputValues.pw.length >= 6;
  const isValidPw2 =
    inputValues.pw.length >= 6 && inputValues.pw2 === inputValues.pw;
  const isValidName = inputValues.name.length >= 3;
  // function goToMain() {
  //   fetch('http://10.58.4.56:8000/users/signin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: inputValues.id,
  //       password: inputValues.pw,
  //       name: inputValues.name,
  //       address: inputValues.address,
  //       phone_number: inputValues.phone,
  //       gender: inputValues.gender,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.message === 'SUCCESS') {
  //         localStorage.setItem('token', result.access_token);
  //         alert('환영합니다!');
  //         navigate('/main');
  //       } else if (result.message === 'INVALID_PASSWORD') {
  //         alert('잘못된 비밀번호입니다!');
  //       } else if (result.message === 'INVALID_EMAIL') {
  //         alert('존재하지 않는 계정입니다!');
  //       }
  //     });
  //   navigate('/user/signin');
  // }

  return (
    <div className="signUp">
      <div className="wrapper">
        <div className="signUpWrapper">
          <p className="signUpLogo">회원가입</p>
        </div>
        <p className="signUpBar">
          <span className="red">*</span> 필수입력사항
        </p>

        <form className="form">
          <div className="contentWrapper">
            <label className="contentLabel">
              이메일 <span className="red">*</span>
            </label>
            <div className="inputWrapper">
              <input
                type="text"
                name="id"
                className="id"
                placeholder="이메일을 입력해주세요"
                onChange={handleInput}
              />
              <p className={`check ${isValidId ? 'green' : 'red'}`}>
                @을 포함시켜주세요
              </p>
            </div>
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">
              비밀번호 <span className="red">*</span>
            </label>
            <div className="inputWrapper">
              <input
                type="password"
                name="pw"
                className="pw"
                placeholder="비밀번호를 입력해주세요"
                onChange={handleInput}
              />
              <p className={`check ${isValidPw ? 'green' : 'red'}`}>
                6자 이상을 입력해주세요
              </p>
            </div>
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">
              비밀번호확인 <span className="red">*</span>
            </label>
            <div className="inputWrapper">
              <input
                type="password"
                name="pw2"
                className="pw2"
                placeholder="비밀번호를 한번 더 입력해주세요"
                onChange={handleInput}
              />
              <p className={`check ${isValidPw2 ? 'green' : 'red'}`}>
                동일한 비밀번호를 입력해주세요
              </p>
            </div>
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">
              이름 <span className="red">*</span>
            </label>
            <div className="inputWrapper">
              <input
                type="text"
                name="name"
                className="name"
                placeholder="이름을 입력해주세요"
                onChange={handleInput}
              />
              <p className={`check ${isValidName ? 'green' : 'red'}`}>
                세글자 이상을 입력해주세요
              </p>
            </div>
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">휴대폰</label>
            <div className="inputWrapper">
              <input
                type="number"
                name="phone"
                className="phone"
                placeholder="숫자만 입력해주세요"
              />
            </div>
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">주소</label>
            <div className="inputWrapper">
              <input
                type="text"
                name="address"
                className="address"
                placeholder="주소를 입력해주세요"
              />
            </div>
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">성별</label>
            <div className="inputWrapper">
              <input type="radio" name="gender" id="male" className="gender" />
              <span>남자</span>
              <input
                type="radio"
                name="gender"
                id="female"
                className="gender"
              />
              <span>여자</span>
            </div>
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">생년월일</label>
            <div className="inputWrapper birthWrapper">
              <input
                type="number"
                name="year"
                className="birth"
                placeholder="YYYY"
              />
              <input
                type="number"
                name="month"
                className="birth"
                placeholder="MM"
              />
              <input
                type="number"
                name="day"
                className="birth"
                placeholder="DD"
              />
            </div>
          </div>
          <button
            className={`submit ${isValid ? 'abled' : 'disabled'}`}
            disabled={!isValid}
            // onClick={}
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
