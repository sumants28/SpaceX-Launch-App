import React from 'react';
import classes from "./Filters.module.scss";
import Filter from "./Filter";

const Filters = (props) => {
    return (
        <main className = {classes.border}>
            <header className={classes.title}>Filters</header>
            <section className = {classes.bgColor}>
                <header className={classes.itemTitle}>Launch Year</header>
                <hr className = {classes.underline}/>
                <div className={classes.rowItem}>
                    <Filter type={'Year'} applyFilter = {props.applyFilter} name={'2006'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2007'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2008'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2009'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2010'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2011'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2012'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2013'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2014'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2015'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2016'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2017'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2018'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2019'}/>
                    <Filter type={'Year'} applyFilter = {props.applyFilter}  name={'2020'}/>
                </div>
            </section>
            <section className = {classes.bgColor}>
                <header className={classes.itemTitle}>Successfull Launch</header>
                <hr className = {classes.underline}/>
                <div className={classes.rowItem}>
                    <Filter type={'Launch'} applyFilter = {props.applyFilter}  name={'True'}/>
                    <Filter type={'Launch'} applyFilter = {props.applyFilter}  name={'False'}/>
                </div>
            </section>
            <section className = {classes.bgColor}>
                <header className={classes.itemTitle}>Successfull Landing</header>
                <hr className = {classes.underline}/>
                <div className={classes.rowItem}>
                    <Filter type={'Landing'} applyFilter = {props.applyFilter}  name={'True'}/>
                    <Filter type={'Landing'} applyFilter = {props.applyFilter}  name={'False'}/>
                </div>
            </section>
        </main>
    )
}

export default Filters;