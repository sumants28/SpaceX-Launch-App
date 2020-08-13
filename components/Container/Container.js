import React,{useEffect,Fragment} from 'react';
import {useFilterState,useDispatchState} from '../../state/context';
import Launch from "../Launch/Launch";
import Filters from "../Filters/Filters";
import classes from "./Container.module.scss";

const Container = (props) => {

        let launch = [];
        console.log(props)
        if(props.launches != undefined){
            launch = props.launches.map(el => {
                return <Launch key = {el.mission_name} mission = {el}></Launch>
            })
        }
        return (
            <Fragment>
                <header className={classes.title}>SpaceX Launch Programs</header>
                <main className = {classes.container}>
                    <Filters applyFilter = {props.applyFilter}/>
                    <div className = {classes.launchContainer}>
                        {launch}
                    </div>  
                </main>
            </Fragment>  
        )        
}

export default Container;