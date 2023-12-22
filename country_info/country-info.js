const inputEl = document.getElementById("input");
const info_text = document.getElementById("info-text");
const info = document.getElementById("info");

async function getCountry(country) {

    try {
        info_text.innerText = `${country} is a searching.`;
        info.style.display = "none";
        const apiURL = `https://api.api-ninjas.com/v1/country?name=${country}`;
        const headers = {
            method: 'GET',
            headers: { 'X-Api-Key': 'fC9LyCfjsR5HTQWzDddY1w==QDlUVk7J4mPHdrNL' },

        }
        const result = await fetch(apiURL, headers).then(res => res.json());
        if (result.length === 0) {
            info_text.innerText = "Valid country";
        }
        else {
            info_text.innerText = "type the country, press enter";
            const iso2 = `${result[0].iso2}`
            const iso2_ = iso2.toLowerCase();
            const name_ = result[0].name;
            const name_2 = name_.toUpperCase();
            const result1 = `https://flagicons.lipis.dev/flags/4x3/${iso2_}.svg`;
            info.innerHTML = `<h1 class="country-name" id="country-name">${name_2}</h1>
            <img class="img-flag"
              src='${result1}'
              alt="photo"
            />
            <h3>Capital: <span class="capital" id="capital">${result[0].capital}</span></h3>
            <h3>Region: <span class="region" id="region">${result[0].region}</span></h3>
            <h3>Currency Code: <span class="c-code" id="c-code">${result[0].currency.code}</span></h3>
            <h3>
              Currency: <span class="currency" id="currency">${result[0].currency.name}</span >
            </h3 >
                <h3>
                    Population: <span class="population" id="population">${result[0].population}254</span>
                </h3>`
            info.style.display = "block";
        }
    } catch (error) {
        console.log(error)
    }

}

inputEl.addEventListener("keydown", (e) => {
    if (e.target.value && e.key === "Enter") {
        getCountry(e.target.value);

    }
});