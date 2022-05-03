import React from 'react';
import './ModalSellerDetail.scss';

const ModalSellerDetail = ({ setCloseBtn }) => {
  const contentKey = [
    '상호명',
    '대표자',
    '사업자등록번호',
    '통신판매업번호',
    '사업장 소재지',
    '고객센터',
    'e-mail',
  ];

  const contentValue = [
    '보이프렌즈 주식회사(사업자/법인사업자)',
    '황석영',
    '18413074421',
    '1994-경기수원-0321',
    '경기도 수원특례시 팔달구 향교로 1번길 8',
    '6336-7941',
    '인증',
    'rkekqmf@gmail.com',
  ];

  return (
    <div className="modalSellerDetail">
      <button onClick={() => setCloseBtn(false)}>X</button>

      <div className="container">
        <strong className="title">판매자정보</strong>
        <div className="content">
          <div className="contentKey">
            {contentKey.map(contentKey => {
              return <ContentKey contentKey={contentKey} key={contentKey} />;
            })}
          </div>

          <div className="contentValue">
            {contentValue.map(contentValue => {
              return (
                <ContentValue contentValue={contentValue} key={contentValue} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentKey = ({ contentKey }) => {
  return <p>{contentKey}</p>;
};

const ContentValue = ({ contentValue }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {contentValue === '6336-7941' ? (
        <span>{contentValue}</span>
      ) : (
        <p className={contentValue === '인증' ? 'inlineText' : null}>
          {contentValue}
        </p>
      )}
    </>
  );
};

export default ModalSellerDetail;
