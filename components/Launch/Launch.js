import React from 'react';
import classes from "./Launch.module.scss";

const Launch = (props) => {
    let missionIds = props.mission.mission_id.map(el => {
        return <li key = {el}>{el}</li>
    })
    return (
        <main className = {classes.bgColor}>
            <section className={classes.imgAlign}>
                <img className = {classes.img} src="../../spacexPatch.png"></img>
            </section>
            <section className = {classes.launchDetails}>
                <article className = {classes.missionName}>{props.mission.mission_name +' #'+props.mission.flight_number}</article>
                <article className = {classes.launchDetailsItems}>
                    <span className={classes.launchDetailsItemsKey}>Mission Ids:</span>
                    {props.mission.mission_id.length == 0 ? ' None':''}
                    <ul className = {classes.missionId}>
                        {missionIds}
                    </ul>
                </article>
                <article className = {classes.launchDetailsItems}><span className={classes.launchDetailsItemsKey}>Launch Year:</span>{' '+props.mission.launch_year}</article>
                <article className = {classes.launchDetailsItems}><span className={classes.launchDetailsItemsKey}>Successfull Launch:</span>{' '+props.mission.launch_success}</article>
                <article className = {classes.launchDetailsItems}><span className={classes.launchDetailsItemsKey}>Successfull Landing:</span>{' '+props.mission.rocket.first_stage.cores[0].land_success ? 'true':'false'}</article>
            </section>
        </main>
    )
}

export default Launch;