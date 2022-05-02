import React, { useState } from 'react';
import './Contents.scss';

function Contents({ contents, inputValues }) {
  const { contentName, isImportant, placeholder, type, name, check } = contents;

  const [test, setTest] = useState(false);

  function isValidEach(e) {
    const pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    if (name === 'email') {
      setTest(e.target.value.includes('@' && '.'));
    }
    if (name === 'pw') {
      setTest(pwdCheck.test(e.target.value));
    }
    if (name === 'pw2') {
      setTest(
        pwdCheck.test(inputValues.pw) && e.target.value === inputValues.pw
      );
    }
    if (name === 'name') {
      setTest(e.target.value.length >= 2);
    }
  }

  return (
    <div className="contents">
      <div className="inputWrapper">
        <label className="contentLabel">
          {contentName} {isImportant === true && <span className="red">*</span>}
        </label>
        <input
          type={type}
          name={name}
          className={name}
          placeholder={placeholder}
          onChange={isValidEach}
        />
      </div>
      <p className={`check ${test ? 'green' : 'gray'}`}>{check}</p>
    </div>
  );
}

export default Contents;
