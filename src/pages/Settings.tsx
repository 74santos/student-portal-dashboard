import AppearanceSettings
from "../components/settings/AppearanceSettings";

import AcademicGoals from "../components/settings/AcademicGoals";

import PrivacySettings from "../components/settings/PrivacySettings";

import DataManagement from "../components/settings/DataManagement";

import StudentProfileSettings from "../components/settings/StudentProfileSettings";


export default function Settings() {
  return (
    <div className="page-content">

      <div className="settings-header">

        <h1>Settings</h1>

        <p>
          Customize your academic experience,
          privacy controls, and application preferences.
        </p>

      </div>

      <div className="settings-layout">

        <div className="settings-grid">

        <StudentProfileSettings />

          <AppearanceSettings />

          <AcademicGoals />

          <PrivacySettings />

          <DataManagement />

        </div>

      </div>

    </div>
  );
}