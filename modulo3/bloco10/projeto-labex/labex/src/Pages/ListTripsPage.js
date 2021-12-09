import React from "react";
import ApplicationFormPage from "./ApplicationFormPage";

function ListTripsPage() {
  const destiny = ""

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
      </div>
      <ApplicationFormPage />
    </div>
  );
}

export default ListTripsPage;
