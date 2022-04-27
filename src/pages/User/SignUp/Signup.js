import React from 'react';
import './Signup.scss';

function SignUp() {
  return (
    <div id="signUp">
      <div className="wrapper">
        <div className="signUpWrapper">
          <p className="signUp">회원가입</p>
        </div>
        <form className="form">
          <div className="contentWrapper">
            <label className="contentLabel">아이디</label>
            <input
              type="text"
              name="id"
              className="id"
              placeholder="6자리 이상의 영문 혹은 영문과 숫자를 조합"
            />
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">비밀번호</label>
            <input
              type="password"
              name="pw"
              className="pw"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">비밀번호확인</label>
            <input
              type="password"
              name="pw2"
              className="pw2"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">이름</label>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="이름을 입력해주세요"
            />
          </div>
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
            <input />
          </div>
          <div className="contentWrapper">
            <label className="contentLabel">생년월일</label>
            <input
              type="number"
              name="birth"
              className="birth"
              placeholder=""
            />
          </div>
          <button className="submit">가입하기</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
