import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

export default function PrivacySettings() {

  const ctx =
    useContext(AppContext);

  if (!ctx) return null;

  const {
    secure,
    setSecure,
  } = ctx;

  return (

    <div className="settings-card">

      <h3>
        Privacy
      </h3>

      <p>
        Hide sensitive academic data.
      </p>

      <button 

        className={`settings-btn
          ${ secure
          ? "toggle active"
          : "toggle"
        }`}
        onClick={() =>
          setSecure(!secure)
        }
      >
        {secure
          ? "Enabled"
          : "Disabled"}
      </button>

    </div>

  );

}