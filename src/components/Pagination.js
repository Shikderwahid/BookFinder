 import React from "react";

const Pagination = (props) => {
  
  console.log(props);
  
  const page_links = [];
  for (let i = 1; i <= props.totalPages; i++) {
    let isActive;
    if (props.currentPage == i) {
      isActive = "active";
    } else {
      isActive = "";
    }

    let classes = "wave-effect " + isActive;
    page_links.push(
      <button
        className={classes}
        key={i}
        onClick={() => {
          props.nextPage(i);
        }}
      >
        {i}
      </button>
    );
  }
  return (
    <div className="container">
      <div className="row"  style={ {backgroundColor: "#B6B3B3" }}>{page_links}</div>
    </div>
  );
};

export default Pagination;
