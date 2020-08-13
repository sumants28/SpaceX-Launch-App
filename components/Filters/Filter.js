import React from 'react';
import classes from "./Filters.module.scss";

const Filter = (props) => {
    return (
        <article className = {classes.item}>
            <button id = {props.type+''+props.name} onClick = {() => props.applyFilter(props.type,props.name)} className = {classes.btn}>{props.name}</button>
        </article>
    )
}

export default Filter;