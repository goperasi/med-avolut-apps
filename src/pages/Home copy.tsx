import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import React, { useEffect } from "react";

const Home: React.FC = () => {
  const ref = React.useRef() as any;
  const [height, setHeight] = React.useState("0px");
  const onLoad = () => {
    if (ref.current)
      setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };

  useEffect(() => {}, []);

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <iframe
          src="https://med.avolut.com"
          ref={ref}
          width="100%"
          height={height}
          style={{
            maxWidth: 640,
            width: "100%",
            overflow: "auto",
          }}
          onLoad={onLoad}
        ></iframe>
      </IonContent>
    </IonPage>
  );
};

export default Home;
