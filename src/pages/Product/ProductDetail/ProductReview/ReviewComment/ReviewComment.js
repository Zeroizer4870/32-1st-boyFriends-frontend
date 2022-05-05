import React from 'react';
import '../ReviewComment/ReviewComment.scss';

export default function ReviewComment({ commentContainer }) {
  return (
    <ul>
      {commentContainer.map((comment, index) => (
        <li key={index}>
          <div className="reviewComment">
            <div className="userInfoBox">
              <img
                src="https://item.kakaocdn.net/do/a1866850b14ae47d0a2fd61f409dfc057154249a3890514a43687a85e6b6cc82"
                alt="user"
                className="userImg"
              />
              <div className="userInfoText">
                <div>{comment.star}</div>
                <div> JHJ 22.04.30. | 신고</div>
                <div>사이즈: 단품</div>
              </div>
            </div>

            <div className="commentBox">
              <div className="comment">{comment.context}</div>
              <div className="productImgDiv">
                <img
                  src="https://item.kakaocdn.net/do/a1866850b14ae47d0a2fd61f409dfc057154249a3890514a43687a85e6b6cc82"
                  alt="reviewImg"
                  className="productImg"
                />
              </div>
              <button className="like">
                <i className="fa-regular fa-thumbs-up" /> 0
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
