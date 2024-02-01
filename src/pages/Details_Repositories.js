import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const RepositoryDetails = () => {
  const[repoDetails, setRepoDetails] = useState({});

  const userData = useSelector(state => state.userData);
  console.log(userData)
  const { repoId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${userData.login}/${repoId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRepoDetails(data);
        console.log(data)
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, [userData.login, repoId])

 return (
    <div>
      <h2>{repoDetails.name}</h2>
      <p>{repoDetails.description}</p>
      {/* Display additional details about the repository */}
    </div>
  );
};

export default RepositoryDetails;
