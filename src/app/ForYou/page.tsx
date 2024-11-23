"use client";

import React, { useEffect, useState } from "react";
import { CgPlayButtonO } from "react-icons/cg";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import useRequireAuth from "@/hooks/useRequireAuth";

interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subsrciptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

const ForYou: React.FC = () => {
  useRequireAuth();

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [recommendedBooks, setRecommendedBooks] = useState<Book | null>(null);
  const [suggestedBooks, setSuggestedBooks] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSelectedBook = async () => {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Book[] = await response.json();
        console.log("Fetched book data", data[0])
        setSelectedBook(data[0]);
        console.log(selectedBook);
      } catch (err) {
        console.error("Error fetching book:", err);
        setError("Failed to load book data.");
      }
    };

    const fetchRecommendedBooks = async () => {
      try {
        const response = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const RecData: Book = await response.json();
        console.log("Recommended Books Data:", RecData);
        setRecommendedBooks(RecData); // Assuming the API returns an array of books
      } catch (err) {
        console.error("Error fetching recommended books:", err);
        setError("Failed to load recommended books data.");
      }
    };

    const fetchSuggestedBooks = async () => {
      try {
        const response = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const suggestedData: Book = await response.json();
        console.log("Suggested Books Data:", suggestedData);
        setSuggestedBooks(suggestedData); // Assuming the API returns an array of books
      } catch (err) {
        console.error("Error fetching Suggested books:", err);
        setError("Failed to load Suggested books data.");
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchSelectedBook(), fetchRecommendedBooks(), fetchSuggestedBooks()]);
      setLoading(false);
    };
  
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error} </div>;
  }

  return (
    <div className="md:ml-[200px]">
      <SearchBar />
      <div className="flex">
        <SideBar />
        <div className="container max-w-[1070px] w-full m-auto px-6">
          <div className="row w-full py-10">
            <div className="for-you__wrapper">
              <div className="for-you__title text-[#032b41] text-[22px] font-bold mb-5">
                Selected just for you
              </div>
              {selectedBook && (
                <>
                  <a
                    href=""
                    className="selected__book flex flex-col bg-[#fbefd6] rounded-[4px] mb-6 p-4 gap-6"
                  >
                    <div className="selected__book--subtitle lg:w-[40%] text-[#032b41] w-full md:text-sm">
                      {selectedBook?.subTitle}
                    </div>
                    <div className="selected__book--line w-[1px] bg-[#bac8ce] hidden lg:flex"></div>
                    <div className="selected__book--content flex gap-4 w-full">
                      <figure className="book__image--wrapper w-[140px] h-[140px] min-w-[140px]">
                        <img
                          className="book__image block w-full h-full"
                          src={selectedBook?.imageLink}
                          alt="book cover"
                        />
                      </figure>
                      <div className="selected__book--text w-full">
                        <div className="selected__book--title font-semibold text-[#032b41] mb-2">
                          {selectedBook?.title}
                        </div>
                        <div className="selected__book--author text-[#394547] text-sm mb-4">
                          {selectedBook?.author}
                        </div>
                        <div className="selected__book--duration-wrapper flex items-center gap-2 m-0">
                          <div className="selected__book--icon flex items-center min-w-10 mx-0">
                            <CgPlayButtonO className="w-[40px] h-[40px]" />
                          </div>
                          <div className="selected__book--duration text-sm font-medium text-[#032b41] mx-0">
                            3 mins 23 secs
                          </div>
                        </div>
                      </div>
                    </div>
                    <audio src={selectedBook.audioLink}></audio>
                  </a>
                </>
              )}
              <div className="recommended__books">
                <div className="for-you__title text-[#032b41] text-[22px] font-bold">
                  Recommended for you
                </div>
                <div className="for-you__subtitle text-[#394547] text-[16px] font-light mb-4">
                  We think you will like these
                </div>
                <div className="for-you__recommended--book">
                  <a className="for-you__recommended--books-link" href="">
                    <audio src={undefined}></audio>
                    <figure className="book__image--wrapper">
                      <img className="book__image" src={undefined} alt="" />
                    </figure>
                    <div className="recommended__book--title">
                      How to Win Friends and Influence People
                    </div>
                    <div className="recommended__book--author">
                      Dale Carnegie
                    </div>
                    <div className="recommended__book--subtitle">
                      Time Tested advice for the digital age
                    </div>
                    <div className="recommended__book--details-wrapper">
                      <div className="recommended__book--details">
                        <div className="recommended__book--details-icon">
                          Clock Image
                        </div>
                        <div className="recommended__book--details-text">
                          03:24
                        </div>
                      </div>
                      <div className="recommended__book--details">
                        <div className="recommended__book--details-icon">
                          Star Image
                        </div>
                        <div className="recommended__book--details-text">
                          4.3
                        </div>
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
                    <audio src={undefined}></audio>
                    <figure className="book__image--wrapper">
                      <img className="book__image" src={undefined} alt="" />
                    </figure>
                    <div className="recommended__book--title">Zero to One</div>
                    <div className="recommended__book--author">
                      Peter Thiel with Blake Masters
                    </div>
                    <div className="recommended__book--subtitle">
                      Notes on Startups, or How to Build the Future
                    </div>
                    <div className="recommended__book--details-wrapper">
                      <div className="recommended__book--details">
                        <div className="recommended__book--details-icon">
                          Clock Image
                        </div>
                        <div className="recommended__book--details-text">
                          03:24
                        </div>
                      </div>
                      <div className="recommended__book--details">
                        <div className="recommended__book--details-icon">
                          Star Image
                        </div>
                        <div className="recommended__book--details-text">
                          4.3
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
