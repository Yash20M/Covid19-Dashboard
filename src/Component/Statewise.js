import React, { useEffect, useState } from "react";
import "./statewise.css";

const StateWise = () => {

    const [data, setData] = useState([])

    useEffect(() => {

    }, [])
    const getCovidData = async () => {

        const api = "https://data.covid19india.org/data.json";
        const res = await fetch(api);
        const actualData = await res.json();
        setData(actualData.statewise);
        console.log(actualData.statewise);

    }

    useEffect(() => {
        getCovidData();
    })

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main_heading">
                    <h1 className="mb-5 text-center"><b> INDIA</b> COVID19 DASHBOARD</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr >
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElm, inddex) => {
                                    return (
                                        <tr key={inddex} >
                                            <td>{curElm.state}</td>
                                            <td>{curElm.confirmed}</td>
                                            <td>{curElm.recovered}</td>
                                            <td>{curElm.deaths}</td>
                                            <td>{curElm.active}</td>
                                            <td>{curElm.lastupdatedtime}</td>
                                        </tr>

                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default StateWise;