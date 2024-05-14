import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Properties from "./components/Properties";
import ReservationForm from "./components/ReservationForm";
import { fetchData } from "./redux/dataSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <>
    <React.Suspense fallback={<h1> Loading ...</h1>}>
      {/* <NavigationBar /> */}
      <Routes>
        {/* <Route path="/movies">
          <Route index element={<Movies />} loader={dispatch(fetchMovies())} />
        
        </Route> */}
          <Route path="/proprietes" element={<Properties />}   loader={dispatch(fetchData())} />reserve
          <Route path="/reserve/:id" element={<ReservationForm />} />
        {/* <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/wishlist" element={<Whishlist />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </React.Suspense>
    </>
  )
}

export default App
