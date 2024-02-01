import "./SearchForm.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { clearUserData, setRepositoriesData, setUserData } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    const handleSearch = async (e) => {
        e.preventDefault();

       

        try {
            // fetch user data using the API endpoint
            const userDataResponse = await fetch(`https://api.github.com/users/${searchValue}`);
            const userData = await userDataResponse.json();
          
             //save userData to the redux store
             dispatch(setUserData(userData));
}
catch(error) {
  console.error(error);

  // if error occurs, clear the existing data from the store.
  dispatch(clearUserData);
}

try{ // fetch repositories data using the API endpoint
 const repositoriesDataResponse = await fetch(`https://api.github.com/users/${searchValue}/repos`);
            const repositoriesData = await repositoriesDataResponse.json();
            console.log(repositoriesData)
            dispatch(setRepositoriesData(repositoriesData)) 

  } catch(error){// if error occurs, clear the existing data from the store.
    console.error(error);
    dispatch(clearUserData);
  } 
        

    }

  return (
    <form className="divSearchform" onSubmit={handleSearch}>
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder=  "Search github username" />
    </form>
  );
}

// const repositoriesDataResponse = await fetch(`https://api.github.com/users/${searchValue}/repos`);
//             const repositoriesData = await repositoriesDataResponse.json();