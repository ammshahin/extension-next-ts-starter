"use client";

import useAppStore from "@/store";
import React, { useEffect } from "react";

const Home = () => {
  const { setApp } = useAppStore();

  const receiveMessage = (event: any) => {
    if (process.env.NODE_ENV === "development") {
      event = {
        data: {
          payload: {
            appIntegration: "",
            app: "",
          },
          signedContext: "",
        },
      };
    }

    if (event?.data?.payload) {
      setApp(event.data);
    }
  };

  useEffect(() => {
    if (navigator.userAgent !== "ReactSnap") {
      window.addEventListener("message", receiveMessage, false);
      window.parent.postMessage("iframeFinishLoading", "*");
    }

    return () => {
      window.removeEventListener("message", receiveMessage, false);
    };
  });

  return <></>;
};

export default Home;
