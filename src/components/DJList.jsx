import React, { useState, useEffect } from "react";
import { getDjData } from "../api/djList";
import "./DJList.css";

export const DJList = () => {
    const [djDataState, setDjData] = useState({
        loading: true,
        error: false
    });

    useEffect(() => {
        getDjData().then(djData => setDjData({
            loading: false,
            error: false,
            ...djData,
        })).catch(error => setDjData({
            loading: false,
            error,
        })
        );
        // effect
        // return () => {
        //     cleanup
        // }
    }, [])

    if(djDataState.loading){
        return <div>...Loading</div>
    }

    if(djDataState.error){
        return <div>{djDataState.error}</div>
    }

    return <div className="DjList">
        <h1 className="DjListTitle">TailBass</h1>
        <h2>{djDataState.nextEventDate}</h2>
        {djDataState.nextEventDjs.map(dj => <DjSlot dj={dj} />)}
    </div>
}

const DjSlot = ({dj}) => <div className="Dj">
    <div>{dj.nextEventTime}</div>
    <div>{dj.Name}</div>
    <div>{dj.Genres}</div>
</div>