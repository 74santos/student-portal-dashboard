import { FiPlus, FiSearch } from "react-icons/fi";

import Button from "../../../components/ui/Button";

import type { ToolbarProps } from "../types"




export function ToolbarSection({
  
  search, 
  onSearch, 
  onReset, 
  onAdd,

}:ToolbarProps) {

      return (
        <div className="courses-toolbar">
            <div className="search-box">
              <FiSearch />

              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) =>
                  onSearch(e.target.value)
                }
              />

            </div>

            <div className="toolbar-actions">

              <button
                className="reset-btn"
                onClick={onReset}
              >
                Reset
              </button>

              <Button
                className="primary"
                onClick={onAdd}
              >
                <FiPlus />

                Add Course
              </Button>

            </div>
          </div>
      )
}