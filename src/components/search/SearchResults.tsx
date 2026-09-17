import { useNavigate } from "react-router-dom"
import type { SearchItem }
from "../../types";

type Props = {
  title: string;
  items: SearchItem[];
};

export default function SearchResults({
  title,
  items,
}: Props) {

  if (items.length === 0) {
    return null;
  }

  const navigate = useNavigate();

  return (

    <div className="search-group">

      <h4>
        {title}
      </h4>

      {items.map((item) => (

        <div
          key={item.id}
          className="search-item"
          onClick={() => {

            if (item.type === "course") {
              navigate("/courses");
            }
          
            else if (
              item.type === "assignment"
            ) {
              navigate("/assignments");
            }
          
            else {
              navigate("/dashboard");
            }
          
          }}
        >
          {item.title}
        </div>

      ))}

    </div>

  );

}