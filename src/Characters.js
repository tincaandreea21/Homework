import React, { useEffect, useState } from "react";

const Characters = (props) => {
  const {
    characters: [abc],
  } = props;
  //   const {
  //     characters: { characters },
  //   } = props;

  const [myArray, setMyArray] = useState([]);

  const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data could not be found");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    abc.map((url) => {
      fetchData(url)
        .then((res) => {
          console.log(res.image);
          //   results.push(res.image);
          setMyArray((oldArray) => [...oldArray, res.image]);
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
  }, []);

  console.log(myArray);
  let unique = [...new Set(myArray)];

  return (
    <div className="list ">
      <div>
        {unique.map((e) => (
          <div>
            <img src={e}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
