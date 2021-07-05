import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderDirectoryItem({album}) {
    return (
        <Card>
            <Link to={`/directory/${album.id}`}>
                <CardImg width="100%" src={album.image} alt={album.name} />
                <CardImgOverlay>
                    <CardTitle>{album.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.albums.map(album => {
        return (
            <div key={album.id} className="col-md-5 m-1">
                <RenderDirectoryItem album={album} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;