import { useEffect, useState } from "react"

function Filter () {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch("https://botsdb.onrender.com/bots")
        .then(res => res.json())
        .then(dat => setData(dat))
    },[])
    //console.log(data);

    data.map((card) => {
        <div class="card" >
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
     </div>
    })
    
    return (
        <div className="bg-primary">
            <h1>filer page init</h1>
        </div>
    )
}

export default Filter