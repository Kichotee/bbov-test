import {React} from "react";
import OutlinedInput from "../Input/outlinedInput";
// import {} from "react-icons/pi"
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({}) => {
    return ( 
    <div className="">
         <OutlinedInput
          endAdornment={
            <span>
              <FaSearch />
            </span>
          }
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder || "Search ..."}
          label={label || ""}
        />
      </div>
    </div>
     );
}
 
export default SearchFilter;