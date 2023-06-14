// // // import { useLocation, useNavigate, useParams } from "react-router-dom";

// // import { useNavigation } from "react-router-dom";
// // import SignupContainer from "./Signup.container";

// // // // export const withRouter = (Component) => {
// // // //   const ComponentWithRouterProp = (props) => {
// // // //     let location = useLocation();
// // // //     let navigate = useNavigate();
// // // //     return <Component {...props} router={{ location, navigate}} />;
// // // //   };

// // // //   return ComponentWithRouterProp;
// // // // };

// // // import { useLocation, useNavigate } from "react-router-dom";

// // // export const WithRouter = (Component) => {
// // //   const ComponentWithRouterProp = (props) => {
// // //     const location = useLocation();
// // //     const navigate = useNavigate();
// // //     return <Component {...props} router={{ location, navigate }} />;
// // //   };

// // //   return ComponentWithRouterProp;
// // // };
// // export default function(props){
// //   const navigation = useNavigation();
// //   return <SignupContainer {...props} navigation={navigation}/>
// // }

// import React from 'react';
// import SignupContainer from './Signup.container';

// export default function Signup(props) {
//   return <SignupContainer {...props} />;
// }
