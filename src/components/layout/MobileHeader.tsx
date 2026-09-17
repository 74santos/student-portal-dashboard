import {
  FiMenu,
} from "react-icons/fi";

type Props = {
  setSidebarOpen:
    React.Dispatch<
      React.SetStateAction<boolean>
    >;
};

export default function MobileHeader({
  setSidebarOpen,
}: Props) {

  return (
    <div className="mobile-header">
      <h3>Student Portal</h3>
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <FiMenu />
      </button>

     

    </div>
  );
}