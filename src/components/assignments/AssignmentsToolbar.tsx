import {
  FiSearch,
  FiFilter,
} from "react-icons/fi";

type Props = {
  search: string;
  setSearch: (
    value: string
  ) => void;

  filter: string;
  setFilter: (
    value: string
  ) => void;
};

export default function AssignmentsToolbar({
  search,
  setSearch,
  filter,
  setFilter,
}: Props) {

  return (

    <div className="assignments-toolbar">

      <div className="search-box">

        <FiSearch />

        <input
          type="text"
          placeholder="Search assignments..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="filter-box">

        <FiFilter />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >

          <option value="all">
            All
          </option>

          <option value="completed">
            Completed
          </option>

          <option value="active">
            Active
          </option>

          <option value="high">
            High Priority
          </option>

        </select>

      </div>

    </div>

  );

}