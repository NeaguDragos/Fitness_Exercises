import { useState } from "react";
import { getSlicedArray } from "../../services/utils";
import { useEffectOnce } from "../../customHooks/customHooks";
import Card from "../card/card";
import "./paginatedList.css";

const PaginatedList = ({ list, pageQty }) => {
  const [cardsList, setCardsList] = useState([]);
  const [pageNo, setPageNo] = useState(0);

  useEffectOnce(() => {
    console.log("PaginatedList useEffect");
    const slicedList = getSlicedArray(list, pageQty, pageNo);
    setCardsList(slicedList);
  }, [pageNo, list]);

  const handleDecPageNo = () => {
    setPageNo((state) => {
      if(state === 0)return Math.floor(list.length / pageQty);
      else return state - 1;
    });
  }

  const handleIncPageNo = () => {
    setPageNo((state) => {
      if(state === Math.floor(list.length / pageQty))return 0;
      else return state + 1;
    })
  }

  return (
    <div className="paginated-list-container">
      <div className="paginated-list-content">
        {cardsList.map((exercise) => (
          <Card {...exercise} key={exercise.id} />
        ))}
      </div>
      <div className="paginated-list-navigation">
        <button
          onClick={handleDecPageNo}
        >
          Prev
        </button>
        <div>
          {pageNo + 1}/{Math.ceil(list.length / pageQty)}
        </div>
        <button
          onClick={handleIncPageNo}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
