// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// import { Routes, Route } from "react-router-dom";


// // import {
// //   createUserDocumentFromAuth,
// //   onAuthStateChangedListner,
// //   getcurrentuser,
// // } from "./utils/Firebase/firebase.utils";



// import Home from "./routes/home/home.component";
// import Navbar from "./routes/navigation/Navigation.component";
// import Auth from "./routes/authentication/auth.component";
// import Signin from "./components/sign-in-form copy/Sign-in.component";
// import Signup from "./components/signup-form/Signup.component";
// import Shop from "./routes/Shop/Shop.jsx";
// import Checkout from "./routes/CheckOut/Checkout";
// import { checkUserSection } from "./store/user/user.action";

// const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(checkUserSection())
//   }, []);
//   return (
//     <Routes>
//       <Route path="/" element={<Navbar />}>
//         <Route index element={<Home />} />
//         <Route path="Shop/*" element={<Shop />} />
//         <Route path="Auth" element={<Auth />} />
//         <Route path="signin" element={<Signin />} />
//         <Route path="signup" element={<Signup />} />
//         <Route path="Checkout" element={<Checkout />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;



// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { Routes, Route } from 'react-router-dom';

// import Home from './routes/home/home.component';
// import Navbar from './routes/navigation/Navigation.component.tsx';
// import Auth from './routes/authentication/auth.component';
// import Shop from './routes/Shop/Shop.jsx';
// import Checkout from './routes/CheckOut/Checkout';
// import { checkUserSection } from './store/user/user.action';

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(checkUserSection());
//   }, []);

//   return (
//     <Routes>
//       <Route path='/' element={<Navbar />}>
//         <Route index element={<Home />} />
//         <Route path='shop/*' element={<Shop />} />
//         <Route path='auth' element={<Auth />} />
//         <Route path='checkout' element={<Checkout />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

import Signin from "./components/sign-in-form copy/Sign-in.component";
 import Signup from "./components/signup-form/Signup.component";

import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Spinner from './components/Spinner/Spinner.component';
import { checkUserSection } from './store/user/user.action';

const Navigation = lazy(() =>
  import('./routes/navigation/Navigation.component.tsx')
);
const Shop = lazy(() => import('./routes/Shop/Shop.jsx'));
const Checkout = lazy(() => import('./routes/CheckOut/Checkout.js'));
const Home = lazy(() => import('./routes/home/home.component.js'));
const Authentication = lazy(() =>
  import('./routes/authentication/auth.component')
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSection());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
         <Route path="signup" element={<Signup />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;