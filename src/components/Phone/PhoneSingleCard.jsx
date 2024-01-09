import swal from "sweetalert";

const PhoneSingleCard = ({ phone }) => {
  const { id, phone_name, brand_name, price, rating, image } = phone || {};

  const handleAddtoFavourite = () => {
    const addedFavourites = [];
    const favouriteItems = JSON.parse(localStorage.getItem("favourites"));
    if (!favouriteItems) {
      addedFavourites.push(phone);
      localStorage.setItem("favourites", JSON.stringify(addedFavourites));
      swal({
        title: "Good job!",
        text: "Added Successfully!",
        icon: "success",
      });
    } else {
      const isExists = favouriteItems.find((phone) => phone.id === id);
      if (!isExists) {
        addedFavourites.push(...favouriteItems, phone);
        localStorage.setItem("favourites", JSON.stringify(addedFavourites));
        swal({
          title: "Good job!",
          text: "Added Successfully!",
          icon: "success",
        });
      } else {
        swal("Duplicate Cannot be Added");
      }
    }
    // localStorage.setItem('item',JSON.stringify([{name:"itemNAME"},{brand:"BrandnAME"}]))
  };
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="  relative flex bg-clip-border rounded-xl text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src={image}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            {brand_name}
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {phone_name}
          </h4>

          <button
            onClick={handleAddtoFavourite}
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Add to Favourite
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneSingleCard;
