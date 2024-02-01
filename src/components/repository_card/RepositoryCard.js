// export default function RepositoryCard() {
//     return(
//         <div>
//             <p>RepositoryCard</p>
//         </div>
//     )
// }


import { Link } from "react-router-dom";
import "./RepositoryCard.css";

export default function RepositoryCard({ data }){
    return(
        <section className="repository-card">
            <h4><Link to={`/repositories/${data.name}`}>{data.name}</Link></h4>
            
            <p>{data.description}</p>
            <div>
                <span>2, 369</span>
                <span>703</span>
                <span>updated 4 days ago</span>
            </div>
        </section>
    )
}
