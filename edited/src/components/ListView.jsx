import React from "react";

const ListView = ({ identifier }) => {
  const data = [
    {
      identifier: "message",
      text: "message",
    },
    {
      identifier: "blog",
      blog1: "blog1",
      blog2: "blog2",
    },
  ];
  let counter;

  const thereal1 = data.find((data) => data.identifier === identifier);
  const realdata = Object.keys(thereal1);
  const thereal = data.filter((data) => data.identifier === identifier);
  console.log(realdata);
  return (
    <div>
      {thereal.map((data, index) => {
        return (
          <div>
            {console.log(index)}
            <p>{thereal1[realdata[1]]}</p>
            {identifier === "blog" && <p>{thereal1[realdata[2]]}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
