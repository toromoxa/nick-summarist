"use client";
import SearchBar from "@/app/components/SearchBar";
import SideBar from "@/app/components/SideBar";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

const InsideBook: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Book = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
        setError("Failed to load book data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="md:ml-[200px]">
      <SearchBar />
      <div className="flex">
        <SideBar />
        <div className="container max-w-[1070px] w-full m-auto px-6">
          <div className="row w-full py-10">
            {book && (
              <>
                <h1 className="text-3xl font-bold">{book.title}</h1>
                <h2 className="text-lg text-gray-700">{book.subTitle}</h2>
                <img
                  src={book.imageLink}
                  alt={book.title}
                  className="w-60 h-60 my-4"
                />
                <p className="text-base">{book.summary}</p>
                <p className="text-sm text-gray-600 mt-4">
                  Author: {book.author}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideBook;
