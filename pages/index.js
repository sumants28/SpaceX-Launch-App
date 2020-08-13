import Head from 'next/head';
import {useFilterState,useDispatchState} from '../state/context';
import styles from '../styles/Home.module.css';
import React, {useEffect} from 'react';
import Container from '../components/Container/Container';

const baseUrl = 'https://api.spacexdata.com/v3/launches?limit=100';

const Home = (props) => {
  const state = useFilterState();
  const dispatch = useDispatchState();

    const applyFilter = async(type,value) => {
      let activeColor = '#7CBA01';
      let inactiveColor = '#C5E098';
      let url = baseUrl;
      let actionType = '';
      const launch_success = state.filter_launch_success != 'None' ? '&launch_success='+state.filter_launch_success.charAt(0).toLowerCase() + state.filter_launch_success.slice(1):'';
      const land_success = state.filter_land_success != 'None' ? '&land_success='+state.filter_land_success.charAt(0).toLowerCase() + state.filter_land_success.slice(1):'';
      const year = state.filter_year != 'None' ? '&launch_year='+state.filter_year : '';
      if(type == "Year") {
        actionType = "Year_filter"
        let element = document.getElementById('Year'+value);
        element.style.backgroundColor = activeColor;
        if(state.filter_year != 'None') {
          let inactiveEl = document.getElementById('Year'+state.filter_year);
          inactiveEl.style.backgroundColor = inactiveColor;
        }
        url += '&launch_year='+value+  launch_success + land_success;
      }
      else if(type =='Launch') {
        actionType = "Launch_filter"
        let element = document.getElementById('Launch'+value);
        element.style.backgroundColor = activeColor;
        if(state.filter_launch_success != 'None') {
          let inactiveEl = document.getElementById('Launch'+state.filter_launch_success);
          inactiveEl.style.backgroundColor = inactiveColor;
        }
        let filter = value.charAt(0).toLowerCase() + value.slice(1);
        url += '&launch_success='+ filter + year + land_success;
      }
      else if(type =='Landing') {
        actionType = "Land_filter"
        let element = document.getElementById('Landing'+value);
        element.style.backgroundColor = activeColor;
        if(state.filter_land_success != 'None') {
          let inactiveEl = document.getElementById('Landing'+value);
          inactiveEl.style.backgroundColor = inactiveColor;
        }
        let filter = value.charAt(0).toLowerCase() + value.slice(1);
        url += '&land_success='+ filter + year + launch_success;
      }
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: actionType,
        filter: value,
        data:data
      })
    }
  
  useEffect(() => {          
    dispatch({
      type: 'Fetch_Data',
      data: props.launches
    })
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Programs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container launches = {state.launches} applyFilter = {applyFilter}/>
      <footer className={styles.footer}>
          Developed by: Sumant Shinde
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(baseUrl);
  const launches = await res.json();
  return {props:{launches:launches}}
}

export default Home;