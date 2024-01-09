import { useEffect } from "react";
import { useState } from "react";

import FavouritesCard from "./FavouritesCard";

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);
  const [noFound, setNotFound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [totalPrice,setTotalPrice]= useState(0)
  useEffect(() => {
    const favouriteItems = JSON.parse(localStorage.getItem("favourites"));

    if (favouriteItems) {
      setFavourites(favouriteItems);
      const total = favouriteItems.reduce((preValue,currentValue)=> preValue+currentValue.price,0)
      setTotalPrice(total)
    } else {
      setNotFound("No Data Found");
    }
  }, []);
  //console.log(favourites);

  const handleRemove = () => {
    localStorage.clear();
    setFavourites([]);
    setNotFound("No Data Found");
  };

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {favourites.length > 0 && (
            <div>
                <button
              onClick={handleRemove}
              className="px-5 py-3 rounded-lg bg-green-600 block text-white font-medium mx-auto"
            >
              Delete All Favourites
            </button>
            <h1>Total Price ${totalPrice}</h1>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {
                isShow? favourites.map((phone) => (
                    <FavouritesCard key={phone.id} phone={phone}></FavouritesCard>
                  )) : favourites.slice(0,2).map((phone) => (
                    <FavouritesCard key={phone.id} phone={phone}></FavouritesCard>
                  ))
            }
          </div>
      {
        favourites.length > 2 &&     <button
        onClick={() => setIsShow(!isShow)}
        className="px-5 py-3 rounded-lg bg-green-600 block text-white font-medium mx-auto"
      >
        {
            isShow ? "Show less" : "See More"
        }
      </button>
      }
        </div>
      )}
    </div>
  );
};

export default Favourite;
