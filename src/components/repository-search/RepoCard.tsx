import React from "react";
import { Card, Button } from "react-bootstrap"
import "./Repo.css"

interface RepositoryCardStatelessProps {
    name: string,
    url: string,
    description: string,
}

const RepoCard: React.SFC<RepositoryCardStatelessProps> = ({ name, url, description }) => {
    return (
        <Card className="text-center card-container">
            <Card.Header><h3>{name}</h3></Card.Header>
            {
            description ?
            <Card.Text>{description}</Card.Text> :
            <Card.Text>no description</Card.Text> 
            }
            
            <Card.Body>
                <Button variant="primary" href={url}>Find Repository in Github</Button>
            </Card.Body>
        </Card>
    )
}

export default RepoCard;