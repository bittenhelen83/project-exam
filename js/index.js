const dailyImg = document.querySelector(".dailyImg");

const dateContainer = document.querySelector(".dateContainer");

const imgurl = "https://api.nasa.gov/planetary/apod?api_key=Hvz8pLYl5d6InG5cMoneJH4fAEpjgVDKLsdfPEqv"

async function getImg() {

    const response = await fetch(imgurl);

    const results = await response.json();

    console.log(results);

    dailyImg.innerHTML = ""

    if (`${results.media_type}` === "image"){

        dateContainer.innerHTML +=  `<div>
                                    <p>${results.date}</p>
                                    </div>`

        dailyImg.innerHTML += `<div>
                                <img src="${results.url}" class="dailyImg" alt="daily image from NASA" />
                                </div>`
    
    }
    else {
        dateContainer.innerHTML +=  `<div>
                                    <p>${results.date}</p>
                                    </div>`

        dailyImg.innerHTML += `<div>
                            <video>
                            <source src="${results.url}" type="video/mp4">
                            </video>
                            </div>`
    
    }
}
    
getImg();

