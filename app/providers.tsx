"use client";

import { createTheme, NextUIProvider } from "@nextui-org/react";

function Providers(props: { children: any; }) {
    const { children } = props;

    const darkTheme = createTheme({
        type: 'dark'
      });
  return (
    <>
      <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>
    </>
  );
}

export default Providers;
