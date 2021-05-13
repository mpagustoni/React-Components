import React, { Component } from 'react'

import axios from 'axios';
import './CardTable.css';

import Card from './Card'


export default class CardTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderCards: null,
            cards: [
                { title: "card 1", subtitle: "Lorem" },
                { title: "card 2", subtitle: "ipsum" },
                { title: "card 3", subtitle: "dolor" },
                { title: "card 4", subtitle: "sit" },
                { title: "card 5", subtitle: "amet" },
                { title: "card 6", subtitle: "consectetur" },
                { title: "card 7", subtitle: "adipiscing" },
                { title: "card 8", subtitle: "elit" },
            ]
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.cards.map((card) => (
                    <Card title={card.title} subtitle={card.subtitle}></Card>
                ))}
            </div>
        )
    }
}