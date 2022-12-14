import React from "react";
import Service from "./Service";
import { services } from "../../servicesData";

import "../../styles/services/service.css";

import Guarantee from "./Guarantee";
import { guarantee } from "../../guarantee";

const Services = () => {
  return (
    <div className="Service">
      <div className="service_title_container">
        <h2 className="sHeadings">MY SERVICES</h2>
      </div>

      <div className="service__row">
        {services.map((singleService, index) => {
          return (
            <div key={singleService.id} className="sService">
              <Service singleService={singleService} index={index} />
            </div>
          );
        })}
      </div>

      <div className="guarante_container">
        <h2 className="sHeadings">MY CORE VALUES</h2>
      </div>

      <div className="gRow">
        {guarantee.map((singleGuarantee, index) => {
          return (
            <div key={singleGuarantee.id} className="gGap">
              <Guarantee singleGuarantee={singleGuarantee} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
