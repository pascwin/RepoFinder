import React from "react";

interface RepositoryCardStatelessProps {
    name: string,
    //id: number
  }

const RepoCard: React.SFC<RepositoryCardStatelessProps> = ({ name }) => {
    return (
        <div>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default RepoCard;