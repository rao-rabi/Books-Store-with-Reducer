import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import Layout from "./Layout";
import Books from "./Components/Books/Books";
import { BooksContextProvider } from "./Context/Context";
import BookDetails from "./Components/Books/BookDetails";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";
import Contact from "./Components/Contact Us/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route exact path="books" element={<Books />} />
      <Route path="bookDetail/:id" element={<BookDetails />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BooksContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </BooksContextProvider>
);
