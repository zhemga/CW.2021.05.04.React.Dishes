import React, { Component } from "react";
import "./list.css";

export default class List extends Component {

    state = {
        data: [
            { title: "Vasquez", category: "Cakes", price: 558 },
            { title: "Hodge", category: "Cakes", price: 55 },
            { title: "Lawrence", category: "Cakes", price: 142 },
            { title: "Lowe", category: "Meat", price: 427 },
            { title: "Dillon", category: "Meat", price: 287 },
            { title: "Travis", category: "Meat", price: 366 },
            { title: "Vega", category: "Drinks", price: 11 },
            { title: "Ratliff", category: "Drinks", price: 984 },
            { title: "Cain", category: "Drinks", price: 347 },
            { title: "Cunningham", category: "Cakes", price: 192 },
            { title: "Walsh", category: "Cakes", price: 859 },
            { title: "Myers", category: "Cakes", price: 468 },
            { title: "Hewitt", category: "Meat", price: 234 },
            { title: "Romero", category: "Meat", price: 229 },
            { title: "Foreman", category: "Meat", price: 594 },
            { title: "Moreno", category: "Drinks", price: 975 },
            { title: "Wells", category: "Drinks", price: 249 },
            { title: "Stout", category: "Drinks", price: 356 },
            { title: "Wilson", category: "Cakes", price: 832 },
            { title: "Burnett", category: "Cakes", price: 157 },
            { title: "Salinas", category: "Cakes", price: 829 },
            { title: "Chandler", category: "Meat", price: 113 },
            { title: "Curtis", category: "Meat", price: 391 },
            { title: "Atkins", category: "Meat", price: 664 },
            { title: "Palmer", category: "Drinks", price: 424 },
            { title: "Marshall", category: "Drinks", price: 642 },
            { title: "Little", category: "Drinks", price: 30 },
            { title: "Cleveland", category: "Cakes", price: 606 },
            { title: "Morton", category: "Cakes", price: 639 },
            { title: "Gaines", category: "Cakes", price: 78 },
            { title: "Cash", category: "Meat", price: 959 },
            { title: "Valdez", category: "Meat", price: 451 },
            { title: "David", category: "Meat", price: 572 },
            { title: "Sexton", category: "Drinks", price: 326 },
            { title: "Herring", category: "Drinks", price: 358 },
            { title: "Deleon", category: "Drinks", price: 451 },
            { title: "Kent", category: "Cakes", price: 57 },
            { title: "Crosby", category: "Cakes", price: 617 },
            { title: "Franks", category: "Cakes", price: 684 },
            { title: "Hunt", category: "Meat", price: 344 },
            { title: "Sexton", category: "Meat", price: 493 },
            { title: "Contreras", category: "Meat", price: 959 },
            { title: "Montgomery", category: "Drinks", price: 416 },
            { title: "Dejesus", category: "Drinks", price: 148 },
            { title: "Walton", category: "Drinks", price: 989 },
            { title: "Daugherty", category: "Cakes", price: 713 },
            { title: "Potts", category: "Cakes", price: 77 },
            { title: "Evans", category: "Cakes", price: 853 },
            { title: "Maynard", category: "Meat", price: 571 },
            { title: "Gilmore", category: "Meat", price: 322 },
            { title: "Boyle", category: "Meat", price: 481 },
            { title: "Rasmussen", category: "Drinks", price: 220 },
            { title: "Brooks", category: "Drinks", price: 987 },
            { title: "Ayala", category: "Drinks", price: 228 },
            { title: "Church", category: "Cakes", price: 185 },
            { title: "Daniels", category: "Cakes", price: 132 },
            { title: "Galloway", category: "Cakes", price: 120 },
            { title: "Knight", category: "Meat", price: 238 },
            { title: "Cash", category: "Meat", price: 968 },
            { title: "Summers", category: "Meat", price: 49 },
            { title: "Lynch", category: "Drinks", price: 485 },
            { title: "Wise", category: "Drinks", price: 523 },
            { title: "Gillespie", category: "Drinks", price: 437 },
            { title: "Collins", category: "Cakes", price: 933 },
            { title: "Conner", category: "Cakes", price: 406 },
            { title: "Mejia", category: "Cakes", price: 321 },
            { title: "Mcgee", category: "Meat", price: 83 },
            { title: "Daniel", category: "Meat", price: 606 },
            { title: "Key", category: "Meat", price: 212 },
            { title: "Smith", category: "Drinks", price: 264 },
            { title: "Alston", category: "Drinks", price: 803 },
            { title: "Valencia", category: "Drinks", price: 484 },
            { title: "Joseph", category: "Cakes", price: 510 },
            { title: "Gilbert", category: "Cakes", price: 160 },
            { title: "Anthony", category: "Cakes", price: 491 },
            { title: "Sanchez", category: "Meat", price: 359 },
            { title: "Whitehead", category: "Meat", price: 460 },
            { title: "Conley", category: "Meat", price: 74 },
            { title: "Morrow", category: "Drinks", price: 825 },
            { title: "Snow", category: "Drinks", price: 993 },
            { title: "Cooley", category: "Drinks", price: 979 },
            { title: "Baldwin", category: "Cakes", price: 767 },
            { title: "Ingram", category: "Cakes", price: 588 },
            { title: "Cote", category: "Cakes", price: 312 },
            { title: "Kerr", category: "Meat", price: 883 },
            { title: "Kirkland", category: "Meat", price: 297 },
            { title: "Kirk", category: "Meat", price: 477 },
            { title: "Clay", category: "Drinks", price: 238 },
            { title: "Mcclain", category: "Drinks", price: 762 },
            { title: "Navarro", category: "Drinks", price: 191 },
            { title: "Herman", category: "Cakes", price: 586 },
            { title: "Peterson", category: "Cakes", price: 588 },
            { title: "Hobbs", category: "Cakes", price: 849 },
            { title: "Larson", category: "Meat", price: 250 },
            { title: "Santana", category: "Meat", price: 700 },
            { title: "Burt", category: "Meat", price: 179 },
            { title: "Freeman", category: "Drinks", price: 757 },
            { title: "Mccormick", category: "Drinks", price: 140 },
            { title: "Riggs", category: "Drinks", price: 894 },
            { title: "Horn", category: "Cakes", price: 59 }
        ]
    };

    onFilterByCategory = () => {
        let dishes = this.state.data;
        if (this.props.query === undefined) {
            return this.getDishes(dishes);
        }

        if (this.props.query === "Random") {
            return this.getDishes(dishes[(Math.random() * dishes.length).toFixed()]);
        }

        return this.getDishes(
            dishes.filter((x) => {
                return x.category === this.props.query;
            })
        );
    };

    getDishes = (data) => {
        if (Array.isArray(data)) {
            return data.map((el) => {
                return (
                    <tr>
                        <td class="counterCell"></td>
                        <td>{el.title}</td>
                        <td>{el.category}</td>
                        <td>{el.price} grn.</td>
                    </tr>
                );
            });
        }
        else
        {
            return (
                <tr>
                    <td class="counterCell"></td>
                    <td>{data.title}</td>
                    <td>{data.category}</td>
                    <td>{data.price} grn.</td>
                </tr>
            );
        }

    };

    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.onFilterByCategory()}
                </tbody>
            </table>
        );
    }
}