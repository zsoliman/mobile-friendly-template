import AmbulanceLights from "../video/ambulanceLights.mp4";

const Landing = () => {
    return (
        <div>

            <div className="row">
                <div className="col-3 col-s-3 menu">
                    <ul>
                        <li>The Flight</li>
                        <li>The City</li>
                        <li>The Island</li>
                        <li>The Food</li>
                    </ul>
                </div>

                <div className="col-6 col-s-9">
                    <h1>The City</h1>
                    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>

                    <img src="https://media.istockphoto.com/id/1145450965/photo/santorini-island-greece.jpg?s=612x612&w=0&k=20&c=AY_kxRrkTjbDLhqpotxgW8CZp4ovEIM1tRdTrvXKcAM=" width="460" height="345" />

                    <video className="video" autoPlay loop muted>
                        <source src={AmbulanceLights} type="video/mp4" />
                    </video>

                </div>

                <div className="col-3 col-s-12">
                    <div className="aside">
                        <h2>What?</h2>
                        <p>Chania is a city on the island of Crete.</p>
                        <h2>Where?</h2>
                        <p>Crete is a Greek island in the Mediterranean Sea.</p>
                        <h2>How?</h2>
                        <p>You can reach Chania airport from all over Europe.</p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>

        </div>


    )
}

export default Landing;