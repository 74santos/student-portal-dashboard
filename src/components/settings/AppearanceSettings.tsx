import ThemeDropdown
from "../ui/ThemeDropdown";

export default function AppearanceSettings() {

  return (
    <div className="settings-card">

      <h3>
        Appearance
      </h3>

      <p>
        Customize how the portal looks.
      </p>

      <div className="settings-control">
      <ThemeDropdown />
      </div>

    </div>
  );
}