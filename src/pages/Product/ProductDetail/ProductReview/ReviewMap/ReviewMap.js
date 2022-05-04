import React from 'react';
import '../ReviewMap/ReviewMap.scss';

export default function ReviewMap({ data }) {
  return (
    <div className="reviewMap" key={data.id}>
      <div className="userInfoBox">
        <img
          src="https://item.kakaocdn.net/do/a1866850b14ae47d0a2fd61f409dfc057154249a3890514a43687a85e6b6cc82"
          alt="user"
          className="userImg"
        />
        <div className="userInfoText">
          <div>
            <span className="firstStar">
              {data.reputation === 1
                ? '☆'
                : data.reputation === 2
                ? '☆☆'
                : data.reputation === 3
                ? '☆☆☆'
                : data.reputation === 4
                ? '☆☆☆☆'
                : '☆☆☆☆☆'}
            </span>

            {data.reputation}
          </div>
          <div>{data.reviewerName} 22.04.30. | 신고</div>
          <div>사이즈: 단품</div>
        </div>
      </div>

      <div className="commentBox">
        <div className="comment">{data.reviewContent}</div>
        {data.reivewImg && (
          <div className="productImgDiv">
            <img src={data.reivewImg} alt="reviewImg" className="productImg" />
          </div>
        )}
        <button className="like">
          <i className="fa-regular fa-thumbs-up" /> 0
        </button>
      </div>
    </div>
  );
}
