const FavouritesCard = ({phone}) => {
    const { id, phone_name, brand_name, price, rating, image } = phone || {};
  return (
    <div>
      <div className="flex justify-center items-center ">
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
            <p className="text-xl font-medium">${price}</p>
            <p className="text-xl font-normal">Ratings: {rating}</p>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritesCard;
