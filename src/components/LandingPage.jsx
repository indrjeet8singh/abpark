// // import React from "react";
// // import AppNavbar from "./AppNavbar";
// // import Sidebar from "./Sidebar";
// // import { Outlet } from "react-router-dom";
// // import Footer from "./Footer";

// // function LandingPage() {
// //   return (
// //     <>
// //       <div className="container-fluid p-0">
// //         {/* Header */}
// //         <div className="row g-0">
// //           <div className="col-12 headerbar bg-light  fixed-top ">
// //             <AppNavbar />
// //           </div>
// //         </div>

// //         {/* Main Layout */}
// //         <div className="row g-0">
// //           {/* Desktop Sidebar */}
// //           <div
// //             className="d-none d-md-block col-md-2 position-fixed start-0 bg-successs"
// //             style={{
// //               top: "72px",
// //               height: "100vh",
// //               overflowY: "auto",
// //               zIndex: 1000,
// //               width: "auto",
// //             }}
// //           >
// //             <Sidebar />
// //           </div>

// //           {/* Main Content */}
// //           <div
// //             className="col-12 col-md-10 offset-md-2 bg-primary"
// //             style={{
// //               marginTop: "72px",
// //               minHeight: "100vh",
// //               overflow: "hidden",
// //               // zIndex: 1000,
// //             }}
// //           >
// //             <Outlet />
// //             <Footer/>
// //           </div>
// //         </div>
// //       </div>
     
    
// //     </>
// //   );
// // }

// // export default LandingPage;

// import React from "react";
// import AppNavbar from "./AppNavbar";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

// function LandingPage() {

// const isMobile = window.innerWidth < 992;

// const mainStyle = {
// marginTop: "96px",
// marginLeft: isMobile ? "0px" : "280px",
// minHeight: "calc(100vh - 96px)",
// display: "flex",
// flexDirection: "column",
// };



//   return (
//     <div className="container-fluid p-0">

//       {/* ================= Header ================= */}
//       <header
//         className="headerbar bg-light fixed-top"
//         style={{
//           height: "96px",
//           zIndex: 1050,
//         }}
//       >
//         <AppNavbar />
//       </header>


//       {/* ================= Sidebar ================= */}
//       <aside
//         className="d-none d-md-block position-fixed start-0 bg-light border-end"
//         style={{
//           top: "96px",
//           left: 0,
//           width: "280px",
//           height: "calc(100vh - 96px)",
//           overflowY: "auto",
//           zIndex: 1040,
//         }}
//       >
//         <Sidebar />
//       </aside>


//       {/* ================= Main Content ================= */}
//       <main
//         className="main-content"
//         style={mainStyle}
//       >
//         {/* Page Content */}
//         <div style={{ flex: 1 }}>
//           <Outlet />
//         </div>

//         {/* Footer */}
//         <Footer />
//       </main>

//     </div>
//   );
// }

// export default LandingPage


import React from "react";
import AppNavbar from "./AppNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function LandingPage() {
  const isMobile = window.innerWidth < 992;

  const mainStyle = {
    marginTop: "96px",
    marginLeft: isMobile ? "0px" : "280px",
    minHeight: "calc(100vh - 96px)",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div className="container-fluid p-0">

      {/* ================= Header ================= */}
      <header
        className="headerbar bg-light fixed-top"
        style={{
          height: "96px",
          zIndex: 1050,
        }}
      >
        <AppNavbar />
      </header>

      {/* ================= Sidebar ================= */}
      <aside
        className="d-none d-md-block position-fixed start-0 bg-light border-end"
        style={{
          top: "96px",
          left: 0,
          width: "280px",
          height: "calc(100vh - 96px)",
          overflowY: "auto",
          zIndex: 1040,
        }}
      >
        <Sidebar />
      </aside>

      {/* ================= Main Content ================= */}
      <main
        className="main-content"
        style={mainStyle}
      >
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>

        <Footer />
      </main>

    </div>
  );
}

export default LandingPage;