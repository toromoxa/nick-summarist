import React from "react";
import { CgPlayButtonO } from "react-icons/cg";

const ForYou = () => {
  return (
    <div className="container max-w-[1070px] w-full m-auto px-6">
      <div className="row w-full py-10">
        <div className="for-you__wrapper">
          <div className="for-you__title text-[#032b41] text-[22px] font-bold mb-5">
            Selected just for you
          </div>
          <audio src="">Audio Link Here</audio>
          <a
            href=""
            className="selected__book flex bg-[#fbefd6] rounded-[4px] mb-6 md:w-full md:flex-col md:gap-6 sm:p-4"
          >
            <div className="selected__book--subtitle w-[40%] text-[#032b41] md:w-full md:text-sm">
              How constant innovation creates radically successful businesses
            </div>
            <div className="selected__book--line w-[1px] bg-[#bac8ce] md:hidden"></div>
            <div className="selected__book--content flex gap-4 md:w-full">
              <figure className="book__image--wrapper w-[140px] h-[140px] min-w-[140px]">
                <img
                  className="book__image block w-full h-full"
                  src={undefined}
                  alt="book cover"
                />
              </figure>
              <div className="selected__book--text md:w-full">
                <div className="selected__book--title font-semibold text-[#032b41] mb-2">
                  The Lean Startup
                </div>
                <div className="selected__book--author text-[#394547] text-sm mb-4">Eric Ries</div>
                <div className="selected__book--duration-wrapper flex items-center gap-2">
                  <div className="selected__book--icon flex items-center min-w-10">
                  <CgPlayButtonO height={400} width={400} />

                  </div>
                  <div className="selected__book--duration text-sm font-medium text-[#032b41]">3 mins 23 secs</div>
                </div>
              </div>
            </div>
          </a>
          <div className="recommended__books">
            <div className="for-you__title text-[#032b41] text-[22px] font-bold">
              Recommended for you
            </div>
            <div className="for-you__subtitle text-[#394547] text-[22px] font-light mb-4">
              We think you will like these
            </div>
            <div className="for-you__recommended--book">
              <a className="for-you__recommended--books-link" href="">
                <audio src=""></audio>
                <figure className="book__image--wrapper">
                  <img className="book__image" src="" alt="" />
                </figure>
                <div className="recommended__book--title">
                  How to Win Friends and Influence People
                </div>
                <div className="recommended__book--author">Dale Carnegie</div>
                <div className="recommended__book--subtitle">
                  Time Tested advice for the digital age
                </div>
                <div className="recommended__book--details-wrapper">
                  <div className="recommended__book--details">
                    <div className="recommended__book--details-icon">
                      Clock Image
                    </div>
                    <div className="recommended__book--details-text">03:24</div>
                  </div>
                  <div className="recommended__book--details">
                    <div className="recommended__book--details-icon">
                      Star Image
                    </div>
                    <div className="recommended__book--details-text">4.3</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="recommended__books">
            <div className="for-you__title text-[#032b41] text-[22px] font-bold">
              Suggested Books
            </div>
            <div className="for-you__subtitle text-[#394547] text-[22px] font-light mb-4">
              Browse those books
            </div>
            <div className="for-you__recommended--book">
              <a className="for-you__recommended--books-link" href="">
                <audio src=""></audio>
                <figure className="book__image--wrapper">
                  <img className="book__image" src="" alt="" />
                </figure>
                <div className="recommended__book--title">
                  Zero to One
                </div>
                <div className="recommended__book--author">Peter Thiel with Blake Masters</div>
                <div className="recommended__book--subtitle">
                  Notes on Startups, or How to Build the Future 
                </div>
                <div className="recommended__book--details-wrapper">
                  <div className="recommended__book--details">
                    <div className="recommended__book--details-icon">
                      Clock Image
                    </div>
                    <div className="recommended__book--details-text">03:24</div>
                  </div>
                  <div className="recommended__book--details">
                    <div className="recommended__book--details-icon">
                      Star Image
                    </div>
                    <div className="recommended__book--details-text">4.3</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
