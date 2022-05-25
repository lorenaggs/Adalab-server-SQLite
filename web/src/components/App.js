import "../styles/App.scss";
import dataApi from "../services/api.js";
import { useEffect, useState } from "react";
import Card from "./Card";
import Landing from "./Landing";
import { Route, Routes } from "react-router-dom";
import ls from "../services/LocalStorage";

function App() {
  const [apiData, setApiData] = useState({});
  const [classTwitter, SetClassTwitter] = useState("hidden");
  const [dataCard, setDataCard] = useState(
    ls.get("datosUser") || {
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
    }
  );
  const [collapsedDesign, setCollapsedDesign] = useState(false);
  const [collapsedFill, setCollapsedFill] = useState(true);
  const [collapsedShare, setCollapsedShare] = useState(true);
  const [avatar, setAvatar] = useState("");
  // Componente foto

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setDataCard({ ...dataCard, photo: avatar });
  };

  const handleData = (event) => {
    const inputValue = event.value;
    const inputChanged = event.name;
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
  };

  const handleReset = () => {
    setAvatar("");
    setDataCard({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    SetClassTwitter("hidden");
  };

  const handleClickCreateCard = () => {
    dataApi(dataCard).then((info) => {
      setApiData(info);
    });
    if (
      dataCard.palette !== "" &&
      dataCard.name !== "" &&
      dataCard.job !== "" &&
      dataCard.email !== "" &&
      dataCard.linkedin !== "" &&
      dataCard.github !== "" &&
      dataCard.photo !== ""
    ) {
      SetClassTwitter("");
    } else {
      alert("Debes rellenar todos los campos");
    }
  };

  const handleDesignClick = () => {
    if (collapsedDesign === true) {
      setCollapsedDesign(false);
      setCollapsedFill(true);
      setCollapsedShare(true);
    } else if (collapsedDesign === false) {
      setCollapsedDesign(true);
    }
  };

  const handleFillClick = () => {
    if (collapsedFill === true) {
      setCollapsedFill(false);
      setCollapsedDesign(true);
      setCollapsedShare(true);
    } else if (collapsedFill === false) {
      setCollapsedFill(true);
    }
  };

  const handleShareClick = () => {
    if (collapsedShare === true) {
      setCollapsedShare(false);
      setCollapsedDesign(true);
      setCollapsedFill(true);
    } else if (collapsedShare === false) {
      setCollapsedShare(true);
    }
  };

  useEffect(() => {
    if (dataCard.length === 0) {
      Card().then((data) => {
        setDataCard(data);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("datosUser", dataCard);
  }, [dataCard]);

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20con%20el%20Awesome%20profile%20cards%20del%20equipo%20Remake&url=${apiData.cardURL}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/Card"
          element={
            <Card
              apiData={apiData}
              dataCard={dataCard}
              handleInput={handleData}
              handleReset={handleReset}
              handleCard={handleClickCreateCard}
              updateAvatar={updateAvatar}
              avatar={avatar}
              handleTwitterShare={handleTwitterShare}
              classTwitter={classTwitter}
              design={collapsedDesign}
              fill={collapsedFill}
              share={collapsedShare}
              handleDesignClick={handleDesignClick}
              handleFillClick={handleFillClick}
              handleShareClick={handleShareClick}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
