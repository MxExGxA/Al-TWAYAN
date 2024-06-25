import "./book.css";
import HTMLFlipBook from "react-pageflip";
import {
  i1,
  cover,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
  i18,
  i19,
  i20,
  i21,
  i22,
  i23,
  i24,
  i25,
  i26,
} from "../../assets/images";
import pageFlip from "../../assets/sounds/pageFlip.mp3";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import { useRef, useState } from "react";

const Book = () => {
  const [currentPage, setCurrentPage] = useState(26);
  const book = useRef();

  const handleOnFlip = (e) => {
    setCurrentPage(e.data);
    const audio = new Audio(pageFlip);
    audio.play();
  };

  const handleNextPage = () => {
    book.current.pageFlip().flipPrev();
  };

  const handlePrevPage = () => {
    book.current.pageFlip().flipNext();
  };

  return (
    <>
      <div className="book-container">
        <HTMLFlipBook
          ref={book}
          className="book"
          width={600}
          height={650}
          usePortrait={true}
          size="stretch"
          minHeight={350}
          maxHeight={650}
          minWidth={300}
          maxWidth={600}
          startPage={26}
          onFlip={handleOnFlip}
        >
          <img src={i26} className="page" alt="" />
          <img src={i25} className="page" alt="" />
          <img src={i24} className="page" alt="" />
          <img src={i23} className="page" alt="" />
          <img src={i22} className="page" alt="" />
          <img src={i21} className="page" alt="" />
          <img src={i20} className="page" alt="" />
          <img src={i19} className="page" alt="" />
          <img src={i18} className="page" alt="" />
          <img src={i17} className="page" alt="" />
          <img src={i16} className="page" alt="" />
          <img src={i15} className="page" alt="" />
          <img src={i14} className="page" alt="" />
          <img src={i13} className="page" alt="" />
          <img src={i12} className="page" alt="" />
          <img src={i11} className="page" alt="" />
          <img src={i10} className="page" alt="" />
          <img src={i9} className="page" alt="" />
          <img src={i8} className="page" alt="" />
          <img src={i7} className="page" alt="" />
          <img src={i6} className="page" alt="" />
          <img src={i5} className="page" alt="" />
          <img src={i4} className="page" alt="" />
          <img src={i3} className="page" alt="" />
          <img src={i2} className="page" alt="" />
          <img src={i1} className="page" alt="" />
          <img src={cover} className="page" alt="" />
        </HTMLFlipBook>
      </div>
      <div className="flip-controls">
        <button
          className={`next-page ${currentPage <= 0 && "button-disabled"}`}
          onClick={handleNextPage}
        >
          <MdNavigateBefore />
        </button>
        <button
          className={`prev-page  ${currentPage >= 26 && "button-disabled"}`}
          onClick={handlePrevPage}
        >
          <MdNavigateNext />
        </button>
      </div>
    </>
  );
};

export default Book;
