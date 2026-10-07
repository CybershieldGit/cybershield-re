"use client";

import React, { createContext, useContext } from "react";

const ModalContext = createContext({
  isConsultationOpen: false,
  openConsultation: () => {},
  closeConsultation: () => {},
  consultationTopic: "",
  setTopic: () => {},
});

export function ModalProvider({ children }) {
  return (
    <ModalContext.Provider
      value={{
        isConsultationOpen: false,
        openConsultation: () => {},
        closeConsultation: () => {},
        consultationTopic: "",
        setTopic: () => {},
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
