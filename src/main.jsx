import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./client/assets/css/iconsax.css";
import { Provider } from 'react-redux';
import store from "./core/data/redux/store.jsx";

// Client imports
import "./client/assets/icons/fontawesome/css/fontawesome.min.css";
import "./client/assets/icons/fontawesome/css/all.min.css";
import "./client/assets/icons/feather/css/iconfont.css";
import "./client/components/customstyleclient.css";

// Admin imports
import "./admin/assets/css/feathericon.min.css";
import "./admin/assets/plugins/fontawesome/css/all.min.css";
import "./admin/assets/css/font-awesome.min.css";
import "./admin/assets/css/custom.css";

// Pharmacy admin imports
import "./pharmacyadmin/assets/plugins/fontawesome/css/fontawesome.min.css";
import "./pharmacyadmin/assets/plugins/fontawesome/css/all.min.css";
import "./pharmacyadmin/assets/css/font-awesome.min.css";
import "./pharmacyadmin/assets/css/custom.css";
import "./pharmacyadmin/assets/css/feathericon.min.css";
import "./pharmacyadmin/assets/css/bootstrap.min.css";

// Dynamically load JS files (if absolutely needed)
if (window.location.pathname.includes("pharmacyadmin")) {
  import("./pharmacyadmin/assets/js/feather.min.js")
    .then(module => {
      // Feather icon initialization if needed
      if (module.default) module.default();
    })
    .catch(err => console.error("Failed to load feather.min.js", err));
}

if (window.location.pathname.includes("admin")) {
  import("./admin/assets/js/feather.min.js")
    .then(module => {
      if (module.default) module.default();
    })
    .catch(err => console.error("Failed to load feather.min.js", err));
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);