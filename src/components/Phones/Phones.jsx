import PhoneCard from "../Phone/PhoneCard";



const Phones = ({phones}) => {
    return (
        <div className="py-10">
            <h2 className="text-2xl text-center">All categories phones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    phones?.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;