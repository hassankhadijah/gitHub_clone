import { Link } from "react-router-dom";
import Profile from "../components/profile/Profile";
import RepositoryCard from "../components/repository_card/RepositoryCard";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";

export default function Homepage() {
  const repositoriesData = useSelector((state) => state.repositoriesData);

  return (
    <div className="arrange">
      <div><Header /></div>
      <div><Profile /></div>
      <div>{repositoriesData.slice(0, 4).map((repo) => (
        <RepositoryCard key={repo.id} data={repo} />
      ))}</div>
      <div className="links">
        <Link to="/repositories">All repositories</Link>
      </div>
    </div>
  );
}
