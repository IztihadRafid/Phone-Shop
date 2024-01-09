import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneSingleCard from "../../components/Phone/PhoneSingleCard";

const Phone = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    //console.log(findPhone);
    setPhone(findPhone);
  }, [id, phones]);

  console.log(phone);
  return (
    <div>
    <PhoneSingleCard phone={phone}></PhoneSingleCard>
    </div>
  );
};

export default Phone;
