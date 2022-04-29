import React from 'react';

function SignIn() {
  return (
    <div className="signIn">
      <div className="contents">
        <p className="loginText" />
        <form className="inputWrapper">
          <input
            className="email"
            name="email"
            type="email"
            placeholder="아이디를 입력해주세요"
          />
          <input
            className="pw"
            name="pw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </form>
        <div className="findWrapper">
          <div className="accessCheck" />
          <div className="findIdPw">
            <span className="findId" />
            <span className="findPw" />
          </div>
          <div className="buttonWrapper">
            <button className="loginBtn">로그인</button>
            <button className="signupBtn">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
