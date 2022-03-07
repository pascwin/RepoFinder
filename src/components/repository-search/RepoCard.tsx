import React from "react";
import { Card, Button } from "react-bootstrap"
import "./Repo.css"

interface RepositoryCardStatelessProps {
    name: string,
    url: string,
}

const RepoCard: React.SFC<RepositoryCardStatelessProps> = ({ name, url }) => {
    return (
        <Card className="text-center card-container">
            <Card.Header><h3>{name}</h3></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" href={url}>Find Repository in Github</Button>
            </Card.Body>
        </Card>
    )
}

export default RepoCard;