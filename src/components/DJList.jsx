import React, { useState, useEffect } from "react";
import { getDjData } from "../api/djList";

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

    return <div>
        <h1>{djDataState.nextEventDate}</h1>
        {djDataState.nextEventDjs.map(dj => <div>{dj.Name}</div>)}
    </div>
}