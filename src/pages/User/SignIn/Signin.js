import React from 'react';

function SignIn() {
  return (
    <div>
      <div>
        <p>회원가입</p>
      </div>
      <form>
        <div>
          <label>아이디</label>
          <input
            type="text"
            name="id"
            className="id"
            placeholder="6자리 이상의 영문 혹은 영문과 숫자를 조합"
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            name="pw"
            className="pw"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div>
          <label>비밀번호확인</label>
          <input
            type="password"
            name="id"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div>
          <label>이름</label>
          <input />
        </div>
        <div>
          <label>휴대폰</label>
          <input />
        </div>
        <div>
          <label>주소</label>
          <input />
        </div>
        <div>
          <label>성별</label>
          <input />
        </div>
        <div>
          <label>생년월일</label>
          <input />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
