import { FcNext, FcPrevious } from "react-icons/fc";
import "./css/pagination.css";

const Pagination = ({ pageNum, page, handlebutton }) => {
  return (
    <main>
      <div className="btns_wrapper">
        <button
          onClick={() => handlebutton("prev")}
          disabled={page !== 1 ? false : true}
        >
          <FcPrevious disabled={page !== 1 ? false : true} />
        </button>
        <button
          onClick={() => handlebutton("next")}
          disabled={page < pageNum ? false : true}
        >
          <FcNext />
        </button>
      </div>
      <div className="page_counter">{pagenumberGenerator(pageNum, page)}</div>
    </main>
  );
};

const pagenumberGenerator = (pageNum, page) => {
  let pageArray = [];
  for (let x = 0; x < pageNum; x++) {
    pageArray.push(x + 1);
  }
  return pageArray.map((num) => (
    <span className={num === page ? "active" : undefined}>{num}</span>
  ));
};

export default Pagination;
