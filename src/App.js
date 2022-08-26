import logo from "./logo.svg";
import "./App.css";
import CounterClass from "./components/CounterClass";
import CounterFn from "./components/CounterFn";
import BuyStockFn from "./components/BuyStock/BuyStockFn";
import BuyStockClass from "./components/BuyStock/BuyStockClass";
import StockAmount from "./components/StockAmount/StockAmount";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStock } from "./hooks/useStock";
import { incrementAction } from "./redux/fetchAction";
import { useSelector } from "react-redux";

const pageInfo = [
  {
    pageName: "CounterFn",
    pageComponent: CounterFn,
  },
  {
    pageName: "CounterClass",
    pageComponent: CounterClass,
  },
  {
    pageName: "BuyStockFn",
    pageComponent: BuyStockFn,
  },
  {
    pageName: "BuyStockClass",
    pageComponent: BuyStockClass,
  },
];

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts);

  const [curPage, setCurPage] = React.useState(pageInfo[1]);

  const renderPage = () => {
    const CurrentPageComponent = curPage.pageComponent;
    return <CurrentPageComponent test="patrick" />;
  };

  const handleChangePage = (event, nextPage) => {
    event.preventDefault();
    setCurPage(nextPage);
  };
  const { stockAmount, isLoadingStockdata } = useStock();

  useEffect(() => {
    if (isLoadingStockdata) {
      console.log("...");
    } else {
      dispatch(incrementAction(stockAmount));
    }
    console.log(data);
  }, []);

  return (
    <div className="App">
      <header className="App__header">
        <nav>
          <div>
            "Stock":
            {/* <StockAmount /> */} {data.initStockAmount}
          </div>

          {pageInfo.map((page, index) => (
            <a
              href={`./${page.pageName}`}
              onClick={(e) => handleChangePage(e, page)}
              key={page.pageName}
            >
              {page.pageName}
            </a>
          ))}
        </nav>
      </header>
      {renderPage()}
    </div>
  );
}

export default App;
