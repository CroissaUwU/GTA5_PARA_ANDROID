```javascript
/*
=========================================================
 EMULEROS — DISPOSITIVOS COMPATIBLES
=========================================================

 tier 1 = 🔥 1080p 60 FPS
 tier 2 = ⚡ 720p 60 FPS+
 tier 3 = 💥 720p 30 FPS+
 tier 4 = 🎮 800×600 ~30 FPS

 warning = rendimiento limitado

 soon = configuración próximamente

 url = tutorial de YouTube

=========================================================
*/


const devices = [

    /*
    =====================================================
    SAMSUNG
    =====================================================
    */

    {
        brand: "Samsung",
        name: "Galaxy S24 Ultra",
        processor: "Snapdragon 8 Gen 3",
        tier: 1,
        url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
    },

    {
        brand: "Samsung",
        name: "Galaxy S23 Ultra",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },

    {
        brand: "Samsung",
        name: "Galaxy S23+",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },

    {
        brand: "Samsung",
        name: "Galaxy S23",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },

    {
        brand: "Samsung",
        name: "Galaxy S22 Ultra",
        processor: "Snapdragon 8 Gen 1",
        tier: 4,
        warning: true,
        url: "https://www.youtube.com/watch?v=ZoubLEw7hD0"
    },

    {
        brand: "Samsung",
        name: "Galaxy S21 Ultra",
        processor: "Snapdragon 888",
        tier: 4,
        warning: true,
        url: "https://www.youtube.com/watch?v=R_OfEvlorRA"
    },

    {
        brand: "Samsung",
        name: "Galaxy S21",
        processor: "Snapdragon 888",
        tier: 4,
        warning: true,
        url: "https://www.youtube.com/watch?v=R_OfEvlorRA"
    },

    {
        brand: "Samsung",
        name: "Galaxy S21 FE",
        processor: "Snapdragon 888",
        tier: 4,
        warning: true,
        url: "https://www.youtube.com/watch?v=R_OfEvlorRA"
    },

    {
        brand: "Samsung",
        name: "Galaxy S20 FE",
        processor: "Snapdragon 865",
        tier: 3,
        ramNote: "Puede funcionar con 6 GB de RAM.",
        url: "https://www.youtube.com/watch?v=_8gZpZcL2hw"
    },

    {
        brand: "Samsung",
        name: "Galaxy Tab S9",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },

    {
        brand: "Samsung",
        name: "Galaxy Tab S9 Ultra",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },


    /*
    =====================================================
    XIAOMI
    =====================================================
    */

    {
        brand: "Xiaomi",
        name: "Xiaomi 14 Ultra",
        processor: "Snapdragon 8 Gen 3",
        tier: 1,
        url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
    },

    {
        brand: "Xiaomi",
        name: "Xiaomi 14",
        processor: "Snapdragon 8 Gen 3",
        tier: 1,
        url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
    },

    {
        brand: "Xiaomi",
        name: "Xiaomi 13 Pro",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },

    {
        brand: "Xiaomi",
        name: "Xiaomi 13",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },

    {
        brand: "Xiaomi",
        name: "Xiaomi 12T Pro",
        processor: "Snapdragon 8+ Gen 1",
        tier: 3,
        url: "https://www.youtube.com/watch?v=bEOv3f2wy5c"
    },

    {
        brand: "Xiaomi",
        name: "Xiaomi 12X",
        processor: "Snapdragon 870",
        tier: 3,
        url: "https://www.youtube.com/watch?v=_8gZpZcL2hw"
    },

    {
        brand: "Xiaomi",
        name: "Xiaomi 14T",
        processor: "Dimensity 8300",
        tier: 2,
        soon: true
    },

    {
        brand: "Xiaomi",
        name: "Xiaomi 13T",
        processor: "Dimensity 8200",
        tier: 2,
        soon: true
    },

    {
        brand: "Xiaomi",
        name: "Xiaomi Pad 6",
        processor: "Snapdragon 870",
        tier: 3,
        url: "https://www.youtube.com/watch?v=_8gZpZcL2hw"
    },


    /*
    =====================================================
    POCO
    =====================================================
    */

    {
        brand: "POCO",
        name: "POCO F6 Pro",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },

    {
        brand: "POCO",
        name: "POCO F6",
        processor: "Snapdragon 8s Gen 3",
        tier: 3,
        url: "https://www.youtube.com/watch?v=aenuc6LPtrY"
    },

    {
        brand: "POCO",
        name: "POCO F5 Pro",
        processor: "Snapdragon 8+ Gen 1",
        tier: 3,
        url: "https://www.youtube.com/watch?v=bEOv3f2wy5c"
    },

    {
        brand: "POCO",
        name: "POCO F5",
        processor: "Snapdragon 7+ Gen 2",
        tier: 3,
        url: "https://www.youtube.com/watch?v=ZoubLEw7hD0"
    },

    {
        brand: "POCO",
        name: "POCO F4",
        processor: "Snapdragon 870",
        tier: 3,
        url: "https://www.youtube.com/watch?v=_8gZpZcL2hw"
    },

    {
        brand: "POCO",
        name: "POCO F3",
        processor: "Snapdragon 870",
        tier: 3,
        ramNote: "Modelo compatible con 6 GB de RAM.",
        url: "https://www.youtube.com/watch?v=_8gZpZcL2hw"
    },

    {
        brand: "POCO",
        name: "POCO X6 Pro",
        processor: "Dimensity 8300",
        tier: 2,
        soon: true
    },


    /*
    =====================================================
    ONEPLUS
    =====================================================
    */

    {
        brand: "OnePlus",
        name: "OnePlus 12",
        processor: "Snapdragon 8 Gen 3",
        tier: 1,
        url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
    },

    {
        brand: "OnePlus",
        name: "OnePlus 11",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },

    {
        brand: "OnePlus",
        name: "OnePlus 12R",
        processor: "Snapdragon 8 Gen 2",
        tier: 2,
        url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
    },

    {
        brand: "OnePlus",
        name: "OnePlus 10T",
        processor: "Snapdragon 8+ Gen 1",
        tier: 3,
        url: "https://www.youtube.com/watch?v=bEOv3f2wy5c"
    },

    {
        brand: "OnePlus",
        name: "OnePlus Nord 4",
        processor: "Snapdragon 7+ Gen 3",
        tier: 3,
        url: "https://www.youtube.com/watch?v=aenuc6LPtrY"
    },

    {
        brand: "OnePlus",
        name: "OnePlus Pad 2",
        processor: "Snapdragon 8 Gen 3",
        tier: 1,
        url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
    },


    /*
    =====================================================
    MOTOROLA
    =====================================================
    */

    {
        brand: "Motorola",
        name: "Edge 50 Ultra",
        processor: "Snapdragon 8s Gen 3",
        tier: 3,
        url: "https://www.youtube.com/watch?v=aenuc6LPtrY"
    },

    {
        brand: "Motorola",
        name: "Edge 50 Pro",
        processor: "Snapdragon 7 Gen 3",
        tier: 3,
        url: "https://www.youtube.com/watch?v=3Dn4yFIJgWw&t=132s"
    },

    {
        brand: "Motorola",
        name: "Edge 60",
        processor: "Dimensity 7400",
        tier: 4,
        warning: true,
        soon: true
    },


    /*
    =====================================================
    OPPO
    =====================================================
    */

    {
        brand: "OPPO",
        name: "Find X9",
        processor: "Dimensity 9500",
        tier: 1,
        soon: true
    },

    {
        brand: "OPPO",
        name: "Find X8",
        processor: "Dimensity 9400",
        tier: 1,
        soon: true
    },

    {
        brand: "OPPO",
        name: "Find X5",
        processor: "Snapdragon 888",
        tier: 4,
        warning: true,
        url: "https://www.youtube.com/watch?v=R_OfEvlorRA"
    },


    /*
    =====================================================
    VIVO
    =====================================================
    */

    {
        brand: "vivo",
        name: "X300",
        processor: "Dimensity 9500",
        tier: 1,
        soon: true
    },

    {
        brand: "vivo",
        name: "X200",
        processor: "Dimensity 9400",
        tier: 1,
        soon: true
    },

    {
        brand: "vivo",
        name: "X100",
        processor: "Dimensity 9300",
        tier: 2,
        soon: true
    },


    /*
    =====================================================
    LENOVO
    =====================================================
    */

    {
        brand: "Lenovo",
        name: "Legion Tab Gen 3",
        processor: "Snapdragon 8 Gen 3",
        tier: 1,
        url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
    },


    /*
    =====================================================
    ASUS
    =====================================================
    */

    {
        brand: "ASUS",
        name: "ROG Phone 8",
        processor: "Snapdragon 8 Gen 3",
        tier: 1,
        url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
    },


    /*
    =====================================================
    REDMAGIC
    =====================================================
    */

    {
        brand: "REDMAGIC",
        name: "REDMAGIC 9 Pro",
        processor: "Snapdragon 8 Gen 3",
        tier: 1,
        url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
    },


    /*
    =====================================================
    REALME
    =====================================================
    */

    {
        brand: "realme",
        name: "GT 6T",
        processor: "Snapdragon 7+ Gen 3",
        tier: 3,
        url: "https://www.youtube.com/watch?v=aenuc6LPtrY"
    },

    {
        brand: "realme",
        name: "GT Neo 5 SE",
        processor: "Snapdragon 7+ Gen 2",
        tier: 3,
        url: "https://www.youtube.com/watch?v=ZoubLEw7hD0"
    },


    /*
    =====================================================
    NOTHING
    =====================================================
    */

    {
        brand: "Nothing",
        name: "Phone (2)",
        processor: "Snapdragon 8+ Gen 1",
        tier: 3,
        url: "https://www.youtube.com/watch?v=bEOv3f2wy5c"
    },

    {
        brand: "Nothing",
        name: "Phone (2a)",
        processor: "Dimensity 7200",
        tier: 4,
        warning: true,
        soon: true
    },

    {
        brand: "Nothing",
        name: "Phone (2a) Plus",
        processor: "Dimensity 7350",
        tier: 4,
        warning: true,
        soon: true
    },


    /*
    =====================================================
    HONOR
    =====================================================
    */

    {
        brand: "HONOR",
        name: "Magic6 Pro",
        processor: "Snapdragon 8 Gen 3",
        tier: 1,
        url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
    }

];


/*
=========================================================
 INFORMACIÓN DE RENDIMIENTO
=========================================================
*/

const tierInfo = {

    1: {
        icon: "🔥",
        text: "1080p 60 FPS"
    },

    2: {
        icon: "⚡",
        text: "720p 60 FPS+"
    },

    3: {
        icon: "💥",
        text: "720p 30 FPS+"
    },

    4: {
        icon: "🎮",
        text: "800×600 ~30 FPS"
    }

};


/*
=========================================================
 ELEMENTOS HTML
=========================================================
*/

const deviceList =
    document.getElementById("deviceList");

const search =
    document.getElementById("deviceSearch");

const noResults =
    document.getElementById("noResults");


/*
=========================================================
 RENDERIZAR DISPOSITIVOS
=========================================================
*/

function renderDevices(query = "") {

    deviceList.innerHTML = "";

    query =
        query
            .toLowerCase()
            .trim();


    const grouped = {};


    /*
    FILTRAR
    */

    devices.forEach(device => {

        const searchable = [

            device.brand,
            device.name,
            device.processor

        ]
        .join(" ")
        .toLowerCase();


        if (
            query &&
            !searchable.includes(query)
        ) {
            return;
        }


        if (!grouped[device.brand]) {

            grouped[device.brand] = [];

        }


        grouped[device.brand].push(device);

    });


    let results = 0;


    /*
    CREAR MARCAS
    */

    Object
        .keys(grouped)
        .sort((a, b) =>
            a.localeCompare(
                b,
                "es"
            )
        )
        .forEach(brand => {


            const brandDevices =
                grouped[brand];


            /*
            ORDENAR POR RENDIMIENTO
            */

            brandDevices.sort(
                (a, b) =>
                    a.tier - b.tier
            );


            results +=
                brandDevices.length;


            /*
            CONTENEDOR
            */

            const brandSection =
                document.createElement(
                    "div"
                );


            brandSection.className =
                "section";


            /*
            CABECERA
            */

            const brandHeader =
                document.createElement(
                    "div"
                );


            brandHeader.className =
                "item";


            brandHeader.style.cursor =
                "pointer";


            brandHeader.innerHTML = `

                <h2>
                    📱 ${brand}
                    <span
                        style="
                            float:right;
                            font-size:18px;
                        "
                    >
                        ▾
                    </span>
                </h2>

            `;


            /*
            LISTA
            */

            const deviceContainer =
                document.createElement(
                    "div"
                );


            deviceContainer.style.display =
                query
                    ? "block"
                    : "none";


            /*
            ABRIR / CERRAR
            */

            brandHeader.addEventListener(
                "click",
                () => {

                    deviceContainer.style.display =
                        deviceContainer.style.display === "none"
                            ? "block"
                            : "none";

                }
            );


            /*
            CREAR TARJETAS
            */

            brandDevices.forEach(
                device => {


                    const info =
                        tierInfo[
                            device.tier
                        ];


                    const card =
                        document.createElement(
                            device.url
                                ? "a"
                                : "div"
                        );


                    card.className =
                        "item";


                    card.style.marginTop =
                        "8px";


                    card.style.textDecoration =
                        "none";


                    card.style.color =
                        "inherit";


                    /*
                    ALERTA
                    */

                    if (
                        device.warning
                    ) {

                        card.style.border =
                            "1px solid #6b5925";

                    }


                    /*
                    LINK
                    */

                    if (
                        device.url
                    ) {

                        card.href =
                            device.url;

                        card.target =
                            "_blank";

                        card.rel =
                            "noopener noreferrer";

                    }


                    /*
                    TEXTO EXTRA
                    */

                    let extra = "";


                    if (
                        device.warning
                    ) {

                        extra += `

                            <p
                                style="
                                    color:#d6b94f;
                                    font-size:13px;
                                "
                            >
                                ⚠️ Rendimiento limitado
                            </p>

                        `;

                    }


                    if (
                        device.ramNote
                    ) {

                        extra += `

                            <p
                                class="info"
                            >
                                📱 ${device.ramNote}
                            </p>

                        `;

                    }


                    if (
                        device.soon
                    ) {

                        extra += `

                            <p
                                class="info"
                            >
                                ⏳ Configuración
                                próximamente
                            </p>

                        `;

                    }


                    if (
                        device.url
                    ) {

                        extra += `

                            <p
                                style="
                                    margin-bottom:0;
                                "
                            >
                                ▶ Ver configuración
                            </p>

                        `;

                    }


                    /*
                    CONTENIDO
                    */

                    card.innerHTML = `

                        <h3>
                            ${device.name}
                        </h3>

                        <p>
                            ${info.icon}
                            ${info.text}
                        </p>

                        <p class="info">
                            ${device.processor}
                        </p>

                        ${extra}

                    `;


                    deviceContainer.appendChild(
                        card
                    );

                }
            );


            brandSection.appendChild(
                brandHeader
            );


            brandSection.appendChild(
                deviceContainer
            );


            deviceList.appendChild(
                brandSection
            );

        });


    /*
    SIN RESULTADOS
    */

    noResults.style.display =
        results === 0
            ? "block"
            : "none";

}


/*
=========================================================
 BUSCADOR
=========================================================
*/

search.addEventListener(
    "input",
    () => {

        renderDevices(
            search.value
        );

    }
);


/*
=========================================================
 INICIAR
=========================================================
*/

renderDevices();
```
