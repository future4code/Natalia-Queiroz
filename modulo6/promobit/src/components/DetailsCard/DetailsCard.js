import React from "react";

const DetailsCard = (props) => {
    const date = (props) => {
        const releaseDate = props.release_date
        return releaseDate.split('-').reverse().join('/');
    }
    
    const genre = (props) => {
        if (props.genres) {
            return (
                props.genres.map((item) => {
                    return <z> {item.name} |</z>
                })
            )
        }
    }
    return (
        <div>DetailsCard</div>
    )
}
export default DetailsCard