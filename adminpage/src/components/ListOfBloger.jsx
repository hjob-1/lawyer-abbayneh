import React from "react";
import Address from "./Address";
import Avator from "./Avator";
import "./css/bloger.css";
import { Link } from "react-router-dom";
const ListOfBloger = ({ blogers }) => {
  return (
    <>
      {blogers.map((bloger) => (
        <div className="bloger_detail" key={bloger.user_id}>
          <div className="bloger_avator_container">
            <Avator full_name={bloger.full_name} img={bloger.image} />
          </div>
          <div className="bloger_address_container">
            <Address
              email={bloger.email}
              phone={bloger.phone}
              address={bloger.address}
              job={bloger.about_job}
            />
          </div>

          <Link className="link" to={`/blogers/${bloger.user_id}`}>
            View Detail
          </Link>
        </div>
      ))}
    </>
  );
};

export default ListOfBloger;
