import React, { useState } from "react";
import RepoList from "./RepoList";
import SearchBox from "./Searchbox";

export interface IRepo {
    name: string;
    id: number;
}

export function RepoScreen() {

    const [repos, setRepos] = useState<any[]>([])
    const [searchfield, setSearchfield] = useState("")

    const fetchPublicRepos = () => {
        fetch(`https://api.github.com/users/pascwin/repos`)
            .then(res => res.json())
            .then(data => setRepos(data))
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