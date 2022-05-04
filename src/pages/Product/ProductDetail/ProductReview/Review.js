import React, { useState, useEffect } from 'react';
import ReviewMap from '../ProductReview/ReviewMap/ReviewMap';
import ReviewComment from '../ProductReview/ReviewComment/ReviewComment';
import '../ProductReview/Review.scss';

export default function Review({ review }) {
  const [data, setData] = useState([]);
  const [commentInput, setCommentInput] = useState({});
  const [commentContainer, setCommentContainer] = useState([]);
  const [numReview, setNumReview] = useState(0);
  console.log(review);

  useEffect(() => {
    setData(review);
    setNumReview(review.length);
  }, []);

  const handleOnChange = event => {
    setCommentInput(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (commentInput === '') {
      return;
    }
    setCommentContainer(prev => [...prev, commentInput]);

    setNumReview(numReview + 1);

    setCommentInput('');
  };

  const scoreClick = e => {
    setCommentInput(prev => ({ ...prev, star: e.target.value }));
  };

  return (
    <div className="review">
      <div className="reviewNav">
        <h2>상품리뷰</h2>
        <div className="reviewNavText">
          <p>
            상품을 구매하신 분들이 작성하신 리뷰입니다. 리뷰 작성시 아래
            금액만큼 포인트가 적립됩니다.
          </p>
          <p>
            텍스트 리뷰 : <span className="pointPrice">50원</span> | 포토/동영상
            리뷰 :<span className="pointPrice">150원</span>
          </p>
        </div>
        <div className="reviewEvent">
          <span className="eventBanner">Reveiw Event</span>
          <div className="bannerText">
            "동영상 1개 이상, 글자수 50자 이상 남겨주세요!
            <span className="bannerTextBlue">
              베스트리뷰로 선정되면, 3,000포인트를 드립니다."
            </span>
          </div>
          <div className="eventDate">
            응모기간: 2022.04.01. ~ 2022.04.30. | 발표일 : 2022.05.10.
          </div>
        </div>
      </div>

      <div className="reviewImg">
        <div className="photoText">포토&동영상 {numReview}건</div>
        {data.map(data => {
          return (
            <span key={data.id}>
              <img
                src={data.reivewImg}
                alt={data.reviewerName}
                className="productImg"
              />
            </span>
          );
        })}
      </div>
      <div className="reviewMain">
        <div className="reviewMainNav">
          <div>리뷰 {numReview}건</div>
          <div className="productSort">
            <div className="rangkingList">랭킹순</div>
            <div className="newList">최신순</div>
            <div className="highList">평점 높은순</div>
            <div className="lowList">평점 낮은순</div>
          </div>
        </div>
        <div className="reviewMenu">
          <div className="allReview">전체보기</div>
          <div className="photo">포토/동영상</div>
          <div className="store">스토어PICK</div>
          <div className="monthReview">한달사용리뷰</div>
        </div>
      </div>
      {data.map(data => (
        <ReviewMap data={data} />
      ))}
      <ReviewComment commentContainer={commentContainer} />
      <form onSubmit={handleOnSubmit}>
        <div className="addReview">
          <div className="addReviewText">리 뷰 입 력</div>
          <div className="selectScore">
            <span>평점을 선택해 주세요!</span>
            <input
              name="starBtn"
              type="radio"
              className="scoreOne"
              onClick={scoreClick}
              value="☆"
            />
            ☆
            <input
              name="starBtn"
              type="radio"
              className="scoreTwo"
              onClick={scoreClick}
              value="☆☆"
            />
            ☆☆
            <input
              name="starBtn"
              type="radio"
              className="scoreThree"
              onClick={scoreClick}
              value="☆☆☆"
            />
            ☆ ☆ ☆
            <input
              name="starBtn"
              type="radio"
              className="scoreFour"
              onClick={scoreClick}
              value="☆☆☆☆"
            />
            ☆ ☆ ☆ ☆
            <input
              name="starBtn"
              type="radio"
              className="scoreFive"
              onClick={scoreClick}
              value="☆☆☆☆☆"
            />
            ☆ ☆ ☆ ☆ ☆
          </div>
          <input
            name="context"
            type="text"
            className="inputReview"
            value={commentInput.context || ''}
            onChange={handleOnChange}
          />
          <div>
            <button className="summit">게시</button>
          </div>
        </div>
      </form>
    </div>
  );
}
