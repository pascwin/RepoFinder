import React, { useEffect, useState } from "react";
import RepoList from "./RepoList";
import SearchBox from "./Searchbox";

export interface IRepo {
    name: string;
    html_url: string;
    id: number;
}

export function RepoScreen({user}: {user: String}) {

    const [repos, setRepos] = useState<any[]>([])
    const [searchfield, setSearchfield] = useState("")

    useEffect(() => {
        fetch(`https://api.github.com/users/${user}/repos`)
        .then(res => res.json())
        .then(data => setRepos(data))
    }, [user]);

    const fetchPublicRepos = () => {
        fetch(`https://api.github.com/users/${user}/repos`)
            .then(res => res.json())
            .then(repos => setRepos(repos))
    }

    const onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        setSearchfield(event.currentTarget.value)
    }

    const filteredRepos = repos.filter(repo =>{
        return repo.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
        <>
            <div>
                <SearchBox searchChange={onSearchChange}/>
                <button onClick={() => fetchPublicRepos()}>Repos</button>
            </div>
            <div>
                <RepoList repos={filteredRepos} />
            </div>
        </>

    );
}

export default RepoScreen;