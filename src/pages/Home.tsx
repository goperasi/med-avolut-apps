import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import React, { createRef, useEffect, useRef, useState } from "react";

const Home: React.FC = () => {
  let ref = createRef<HTMLDivElement | null>() as any;
  const { innerWidth: width, innerHeight: height } = window;

  useEffect(() => {}, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <iframe
          src="https://med.avolut.com"
          id="iframe-avolut"
          ref={ref}
          width={width}
          height={height}
          style={{
            border: "none",
          }}
        ></iframe>
      </IonContent>
    </IonPage>
  );
};

export default Home;
