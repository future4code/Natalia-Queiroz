import React from "react";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";


function ListTripsPage() {

  return (
    <div>
      <div>
        <p>
          nome: "Havana",
          descrição: "Logo ali, deposi de onde judas perdeu as botas",
          planeta: "Terra",
          duração: 50,
          data: "2021-12-24"
        </p>
        <ApplicationFormPage />
      </div>
      
    </div>
  );
}

export default ListTripsPage;
