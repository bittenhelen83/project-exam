const backgroundImg = document.querySelector(".backgroundImg");

const imgurl = "https://api.nasa.gov/planetary/apod?api_key=Hvz8pLYl5d6InG5cMoneJH4fAEpjgVDKLsdfPEqv"

async function getImg() {

    const response = await fetch(imgurl);

    const results = await response.json();

    console.log(results);

        console.log(results.url);

        backgroundImg.innerHTML += `<div>
                                    <img src="${results.url}" class="backgroundImg" alt="daily image from NASA" />
                                    <p>${results.date}</p>
                                    </div>`

        dateContainer.innerHTML +=  `<div>
                                <p>${results.date}</p>
                                </div>`
}

getImg();