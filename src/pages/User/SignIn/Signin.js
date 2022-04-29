import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signin.scss';

function SignIn() {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: '',
    pw: '',
  });
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues(inputValues => ({ ...inputValues, [name]: value }));
  };
  const isValid =
    inputValues.email.includes('@' && '.') && inputValues.pw.length >= 8;

  function goToMain(e) {
    e.preventDefault();
    fetch('http://10.58.3.2:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('token', result.ACCESS_TOKEN);
          alert('환영합니다!');
          navigate('/');
        }
      });
  }
  function goToSignUp() {
    navigate('/users/signup');
  }

  return (
    <div className="signIn">
      <div className="contentsWrapper">
        <div className="contents">
          <h1 className="loginText">로그인</h1>
          <form className="inputWrapper" onChange={handleInput}>
            <input
              className="input email"
              name="email"
              type="email"
              placeholder="아이디를 입력해주세요"
            />
            <input
              className="input pw"
              name="pw"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </form>
          <div className="findWrapper">
            <label className="accessCheck">
              <input className="checkBox" type="checkbox" />
              보안접속
            </label>
            <div className="findIdPw">
              <Link to="/users/findid" className="link">
                아이디 찾기
              </Link>
              <span className="bar">|</span>
              <Link to="/users/findpw" className="link">
                비밀번호 찾기
              </Link>
            </div>
          </div>
          <div className="buttonWrapper">
            <button
              className={`button loginBtn ${isValid ? 'valid' : 'notValid'}`}
              disabled={!isValid}
              onClick={goToMain}
            >
              로그인
            </button>
            <button className="button signUpBtn" onClick={goToSignUp}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
