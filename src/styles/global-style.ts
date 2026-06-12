"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    font-size:16px;
  }

  body{
    font-family: Inter, sans-serif;
    background:${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.text};
  }

  button{
    border:none;
    cursor:pointer;
    font:inherit;
  }

  input,
  select{
    font:inherit;
  }

  a{
    color:inherit;
    text-decoration:none;
  }
`;
