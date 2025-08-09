class country {
    constructor (pais) {
        this.flag = pais.flags.png;
        this.name = pais.name.common;
        this.region = pais.region;
    }
}

const getCountries = async () => {
    // 1. Llama al endpoint de la API para obtener todos los países
    const uri = 'https://restcountries.com/v3.1/all?fields=name,flags,region';
    const resp = await fetch(uri);
    const data = await resp.json();

    // 2. Itera sobre cada país en la respuesta de la API
    data.forEach(countryData => {
        // 3. Crea un objeto `country` para cada país
        let pais = new country(countryData);

        // 4. Crea un contenedor para cada país
        const container = document.createElement('div');
        container.classList.add('country-card'); // Añade una clase para estilizar

        // 5. Crea y llena los elementos HTML con la información del país
        const h1 = document.createElement('h1');
        h1.innerHTML = pais.name;
        
        const hr = document.createElement('hr');

        const img = document.createElement('img');
        img.src = pais.flag;
        img.width = 100;
        
        const p = document.createElement('p');
        p.innerHTML = pais.region;

        // 6. Añade los elementos al contenedor
        container.appendChild(h1);
        container.appendChild(hr);
        container.appendChild(img);
        container.appendChild(p);

        // 7. Añade el contenedor completo al body de la página (o a un contenedor específico)
        document.body.appendChild(container);
    });
};

// Llama a la nueva función que obtiene todos los países
getCountries();