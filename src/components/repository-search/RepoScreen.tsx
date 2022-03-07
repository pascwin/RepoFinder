import React, { useEffect, useState } from "react";
import RepoList from "./RepoList";
import SearchBox from "./Searchbox";
import "./Repo.css"

export interface IRepo {
    name: string;
    html_url: string;
    description: string;
    id: number;
}

export function RepoScreen({ user }: { user: String }) {

    const [repos, setRepos] = useState<any[]>([])
    const [searchfield, setSearchfield] = useState("")

    useEffect(() => {
        fetch(`https://api.github.com/users/${user}/repos`)
            .then(res => res.json())
            .then(data => setRepos(data))
    }, [user]);

    const onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        setSearchfield(event.currentTarget.value)
    }

    const filteredRepos = repos.filter(repo => {
        return repo.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
        <>
            <div className="repoContainer">
                <h2>{user}'s Repositories </h2>
            </div>
            <div className="repoContainer">
                <SearchBox searchChange={onSearchChange} />
            </div>
            <div className="repoContainer">
                <RepoList repos={filteredRepos} />
            </div>
        </>

    );
}

export default RepoScreen;