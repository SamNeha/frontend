import React, { useState, useEffect} from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  // back to previous review
  const backBtnClick = () => {
    clearTimeout(autoMoveTimeout); // Clear the timeout
    setIsVisible(false); // Hide the content
    setTimeout(() => {
    setReview((prevReview) =>
      prevReview <= 0 ? reviewsLength : prevReview - 1
    );
    setIsVisible(true); // Show the content with the new review
    }, 500);
  };
  const frontBtnClick = () => {
    clearTimeout(autoMoveTimeout); // Clear the timeout
    setIsVisible(false);
    setTimeout(() => {
    setReview((prevReview) =>
      prevReview >= reviewsLength ? 0 : prevReview + 1
    );
    setIsVisible(true); // Show the content with the new review
  }, 500);
  };
  const autoMoveNextReview = () => {
    setIsVisible(false); // Hide the content
    setTimeout(() => {
    setReview((prevReview) =>
      prevReview >= reviewsLength ? 0 : prevReview + 1
    );
    setIsVisible(true); // Show the content with the new review
  }, 500);
  };
  let autoMoveTimeout;
  useEffect(() => {
    autoMoveTimeout = setTimeout(autoMoveNextReview, 10000); // 10 seconds

    // Clear the timeout when the component unmounts or when review changes
    return () => clearTimeout(autoMoveTimeout);
  }, [review]);

  // Get the current review data based on the reviewIndex
  const currentReview = customerReviews[review];
 

  return (
    <div className="review-section" id="reviews">
      <div className={`rw-text-content ${isVisible ? "show" : ""}`}>
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">&emsp;&emsp;&emsp;&emsp;''</span>
          <span className={`rw-review`}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{currentReview.message}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{currentReview.name}</p>
            <p className="rw-reviewer-place">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{currentReview.location}</p>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={backBtnClick}>
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={frontBtnClick}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
