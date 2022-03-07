import React from "react";
import RepositoryCard from "./RepoCard";
import { IRepo } from "./RepoScreen";


const RepoList = ({repos}: {repos: Array<IRepo>}) => {
    return (
        <div>
            {
                repos.map((repo, i) => {
                    return (
                        <RepositoryCard name={repo.name} key={i} url={repo.html_url}  />
                    )
                })
            }
        </div>
    )
}


export default RepoList;