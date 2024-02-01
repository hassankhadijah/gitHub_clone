import { Link } from "react-router-dom";
import UserProfile from "../components/profile/Profile";
import RepositoryCard from "../components/repository_card/RepositoryCard";
import { useSelector } from "react-redux";
export default function Repositories() {
    const listOfRepositories = useSelector(state => state.repositoriesData);
const myRepositoriesDetails = listOfRepositories.length !==0 ? (
    listOfRepositories.map((data) => (
        <RepositoryCard
            key={data.id}
            data={data}
        />

        ))) : "No Repositories found!";

    return(
        <>
        <Link to="/" > Home</Link>
        <UserProfile/>
        <div>
            {myRepositoriesDetails}
        </div>
        </>
    )
}