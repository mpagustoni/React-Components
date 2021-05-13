import React from 'react'
import "./Card.css"

export default props => {
    return (

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h4><b>{props.title}</b></h4>
                    <p>{props.subtitle}</p>
                </div>
                <div class="flip-card-back">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Etiam eget ligula eu lectus lobortis condimentum.
                        Aliquam nonummy auctor massa. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis
                        egestas. Nulla at risus.
                    </p>
                </div>
            </div>
        </div>
    )
}