/*

EMULEROS — DISPOSITIVOS COMPATIBLES

tier 1 = 🔥 1080p 60 FPS
tier 2 = ⚡ 720p 60 FPS+
tier 3 = 💥 720p 30 FPS+
tier 4 = 🎮 800×600 ~30 FPS

warning = rendimiento limitado
soon = configuración próximamente

---------------------------------------------------------
REQUISITO MÍNIMO DE CHIPSET (MediaTek): Dimensity 7400
Por debajo de este chipset (Dimensity 7300/7350 y anteriores,
Helio G99, Dimensity 7020, etc.) el juego no corre de forma
fiable — quedan como tier 4 + warning, no se eliminan de la
lista para que el usuario sepa que existen pero no se recomienda.

Samsung Exynos: solo se soporta desde el Exynos 2400e (S23 FE
en adelante). Exynos 2200 e inferiores quedan fuera.

Gama A de Samsung: A55 en adelante. El A54 queda descartado.
=========================================================
*/

const devices = [

/* =========================
   SAMSUNG
========================= */

{
    brand: "Samsung",
    name: "Galaxy S26 Ultra",
    processor: "Snapdragon 8 Elite Gen 5 for Galaxy",
    tier: 1,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy S26+",
    processor: "Exynos 2600",
    tier: 1,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy S26",
    processor: "Exynos 2600",
    tier: 1,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    processor: "Snapdragon 8 Elite for Galaxy",
    tier: 1,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy S25+",
    processor: "Snapdragon 8 Elite for Galaxy",
    tier: 1,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy S25",
    processor: "Snapdragon 8 Elite for Galaxy",
    tier: 1,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy S25 FE",
    processor: "Exynos 2400e",
    tier: 2,
    soon: true
},

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

{
    brand: "Samsung",
    name: "Galaxy S24 FE (Exynos)",
    processor: "Exynos 2400e",
    tier: 2,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy S23 FE (Exynos)",
    processor: "Exynos 2200",
    tier: 3,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy A57",
    processor: "Exynos 1680",
    tier: 3,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy A56",
    processor: "Exynos 1580",
    tier: 3,
    soon: true
},

{
    brand: "Samsung",
    name: "Galaxy A55",
    processor: "Exynos 1480",
    tier: 3,
    soon: true
},


/* =========================
   XIAOMI
========================= */

{
    brand: "Xiaomi",
    name: "Xiaomi 17 Pro Max",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "Xiaomi",
    name: "Xiaomi 17 Ultra",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "Xiaomi",
    name: "Xiaomi 17 Pro",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "Xiaomi",
    name: "Xiaomi 17",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "Xiaomi",
    name: "Xiaomi 15 Ultra",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "Xiaomi",
    name: "Xiaomi 15",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

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

{
    brand: "Xiaomi",
    name: "Redmi Note 15 Pro+",
    processor: "Snapdragon 7s Gen 4",
    tier: 3,
    soon: true
},

{
    brand: "Xiaomi",
    name: "Redmi Note 15 Pro",
    processor: "Dimensity 7400",
    tier: 4,
    soon: true
},


/* =========================
   POCO
========================= */

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
    processor: "Dimensity 8300-Ultra",
    tier: 2,
    soon: true
},

{
    brand: "POCO",
    name: "POCO X6",
    processor: "Dimensity 8300-Ultra",
    tier: 2,
    soon: true
},

{
    brand: "POCO",
    name: "POCO F8 Ultra",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "POCO",
    name: "POCO F8 Pro",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "POCO",
    name: "POCO X8 Pro",
    processor: "Dimensity 8500 Ultra",
    tier: 2,
    soon: true
},

{
    brand: "POCO",
    name: "POCO F7 Ultra",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "POCO",
    name: "POCO F7 Pro",
    processor: "Snapdragon 8 Gen 3",
    tier: 1,
    url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
},

{
    brand: "POCO",
    name: "POCO F7",
    processor: "Snapdragon 8s Gen 4",
    tier: 2,
    soon: true
},

{
    brand: "POCO",
    name: "POCO X7 Pro",
    processor: "Dimensity 8400 Ultra",
    tier: 2,
    soon: true
},

{
    brand: "POCO",
    name: "POCO X7",
    processor: "Dimensity 7300 Ultra",
    tier: 4,
    warning: true,
    soon: true
},


/* =========================
   ONEPLUS
========================= */

{
    brand: "OnePlus",
    name: "OnePlus 15",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "OnePlus",
    name: "OnePlus 13",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

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


/* =========================
   MOTOROLA
========================= */

{
    brand: "Motorola",
    name: "Razr 60 Ultra",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

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

{
    brand: "Motorola",
    name: "Edge 70 Pro",
    processor: "Dimensity 8500 Extreme",
    tier: 2,
    soon: true
},

{
    brand: "Motorola",
    name: "Edge 60 Pro",
    processor: "Dimensity 8350 Extreme",
    tier: 2,
    soon: true
},

{
    brand: "Motorola",
    name: "Edge 70",
    processor: "Snapdragon 7 Gen 4",
    tier: 3,
    soon: true
},


/* =========================
   OPPO
========================= */

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
    name: "Find X7 Ultra",
    processor: "Snapdragon 8 Gen 3",
    tier: 1,
    soon: true
},

{
    brand: "OPPO",
    name: "Reno14 Pro",
    processor: "Dimensity 8450",
    tier: 2,
    soon: true
},

{
    brand: "OPPO",
    name: "Reno14",
    processor: "Dimensity 8350",
    tier: 2,
    soon: true
},

{
    brand: "OPPO",
    name: "Reno13 Pro",
    processor: "Dimensity 8350",
    tier: 2,
    soon: true
},

{
    brand: "OPPO",
    name: "Reno13",
    processor: "Dimensity 8350",
    tier: 2,
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


/* =========================
   VIVO
========================= */

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

{
    brand: "vivo",
    name: "V50",
    processor: "Snapdragon 7 Gen 3",
    tier: 3,
    soon: true
},


/* =========================
   LENOVO
========================= */

{
    brand: "Lenovo",
    name: "Legion Tab Gen 3",
    processor: "Snapdragon 8 Gen 3",
    tier: 1,
    url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
},

{
    brand: "Lenovo",
    name: "Legion Y700 (Gen 5)",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "Lenovo",
    name: "Legion Y700 (Gen 4)",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "Lenovo",
    name: "Legion Tab (2025)",
    processor: "Snapdragon 8 Gen 3",
    tier: 1,
    url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
},

{
    brand: "Lenovo",
    name: "Legion Y700 (2022)",
    processor: "Snapdragon 870",
    tier: 3,
    url: "https://www.youtube.com/watch?v=_8gZpZcL2hw"
},


/* =========================
   ASUS
========================= */

{
    brand: "ASUS",
    name: "ROG Phone 8",
    processor: "Snapdragon 8 Gen 3",
    tier: 1,
    url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
},

{
    brand: "ASUS",
    name: "ROG Phone 9 Pro",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "ASUS",
    name: "ROG Phone 9",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "ASUS",
    name: "ROG Phone 9 FE",
    processor: "Snapdragon 8 Gen 3",
    tier: 1,
    url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
},

{
    brand: "ASUS",
    name: "Zenfone 12 Ultra",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},


/* =========================
   REDMAGIC
========================= */

{
    brand: "REDMAGIC",
    name: "REDMAGIC 9 Pro",
    processor: "Snapdragon 8 Gen 3",
    tier: 1,
    url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
},

{
    brand: "REDMAGIC",
    name: "REDMAGIC 11S Pro+",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "REDMAGIC",
    name: "REDMAGIC 11S Pro",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "REDMAGIC",
    name: "REDMAGIC 11 Pro",
    processor: "Snapdragon 8 Elite Gen 5",
    tier: 1,
    soon: true
},

{
    brand: "REDMAGIC",
    name: "REDMAGIC 10 Pro",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "REDMAGIC",
    name: "REDMAGIC 8 Pro",
    processor: "Snapdragon 8 Gen 2",
    tier: 2,
    url: "https://www.youtube.com/watch?v=XUGpAqJmM8Q"
},

{
    brand: "REDMAGIC",
    name: "REDMAGIC 6S Pro",
    processor: "Snapdragon 888+",
    tier: 4,
    warning: true,
    url: "https://www.youtube.com/watch?v=R_OfEvlorRA"
},

{
    brand: "REDMAGIC",
    name: "REDMAGIC 6 Pro",
    processor: "Snapdragon 888",
    tier: 4,
    warning: true,
    url: "https://www.youtube.com/watch?v=R_OfEvlorRA"
},

{
    brand: "REDMAGIC",
    name: "REDMAGIC 5G",
    processor: "Snapdragon 865",
    tier: 3,
    ramNote: "Puede funcionar con 8 GB de RAM.",
    url: "https://www.youtube.com/watch?v=_8gZpZcL2hw"
},


/* =========================
   REALME
========================= */

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


/* =========================
   NOTHING
========================= */

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


/* =========================
   HONOR
========================= */

{
    brand: "HONOR",
    name: "Honor 400 Pro",
    processor: "Snapdragon 8 Gen 3",
    tier: 1,
    soon: true
},

{
    brand: "HONOR",
    name: "Honor 200 Pro",
    processor: "Snapdragon 8s Gen 3",
    tier: 2,
    soon: true
},

{
    brand: "HONOR",
    name: "Magic6 Pro",
    processor: "Snapdragon 8 Gen 3",
    tier: 1,
    url: "https://www.youtube.com/watch?v=pk0r4T2ShV0"
},

{
    brand: "HONOR",
    name: "Magic7 Pro",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "HONOR",
    name: "Magic7",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "HONOR",
    name: "GT Pro",
    processor: "Snapdragon 8 Elite",
    tier: 1,
    soon: true
},

{
    brand: "HONOR",
    name: "Honor 400",
    processor: "Snapdragon 7 Gen 3",
    tier: 3,
    soon: true
},

{
    brand: "HONOR",
    name: "Honor 200",
    processor: "Snapdragon 7 Gen 3",
    tier: 3,
    soon: true
},


/* =========================
   TECNO
========================= */

{
    brand: "Tecno",
    name: "Phantom V Fold2",
    processor: "Dimensity 9000+",
    tier: 2,
    soon: true
},

{
    brand: "Tecno",
    name: "Camon 50 Ultra",
    processor: "Dimensity 8300-Ultra",
    tier: 2,
    soon: true
},

{
    brand: "Tecno",
    name: "Phantom X2",
    processor: "Dimensity 9000",
    tier: 2,
    soon: true
},

{
    brand: "Tecno",
    name: "Phantom V Flip",
    processor: "Dimensity 8050",
    tier: 3,
    soon: true
},

{
    brand: "Tecno",
    name: "Pova 7 Ultra",
    processor: "Dimensity 7050",
    tier: 4,
    warning: true,
    soon: true
},


/* =========================
   INFINIX
========================= */

{
    brand: "Infinix",
    name: "Zero 40",
    processor: "Dimensity 9300",
    tier: 2,
    soon: true
},

{
    brand: "Infinix",
    name: "GT 50 Pro",
    processor: "Dimensity 8400 Ultimate",
    tier: 2,
    soon: true
},

{
    brand: "Infinix",
    name: "GT 30 Pro",
    processor: "Dimensity 8350 Ultimate",
    tier: 2,
    soon: true
},

{
    brand: "Infinix",
    name: "Note 50 Pro+",
    processor: "Dimensity 8350",
    tier: 2,
    soon: true
},

{
    brand: "Infinix",
    name: "GT 30 5G+",
    processor: "Dimensity 7400",
    tier: 4,
    warning: true,
    soon: true
},

{
    brand: "Infinix",
    name: "Note 60",
    processor: "Dimensity 7400 Ultimate",
    tier: 4,
    warning: true,
    soon: true
},

{
    brand: "Infinix",
    name: "Note 60 Pro",
    processor: "Snapdragon 7s Gen 4",
    tier: 3,
    soon: true
},

{
    brand: "Infinix",
    name: "Note 50s 5G",
    processor: "Dimensity 7300 Ultimate",
    tier: 4,
    warning: true,
    soon: true
},

{
    brand: "Infinix",
    name: "GT 20 Pro",
    processor: "Dimensity 8200 Ultimate",
    tier: 3,
    soon: true
}

];

/*

INFORMACIÓN DE RENDIMIENTO

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

ELEMENTOS

*/

const deviceList =
document.getElementById("deviceList");

const search =
document.getElementById("deviceSearch");

const noResults =
document.getElementById("noResults");

/*

RENDERIZAR

*/

function renderDevices(query = "") {

deviceList.innerHTML = "";

query =
    query
        .toLowerCase()
        .trim();


const grouped = {};


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


Object
    .keys(grouped)
    .sort((a, b) =>
        a.localeCompare(b, "es")
    )
    .forEach(brand => {

        const brandDevices =
            grouped[brand];


        brandDevices.sort(
            (a, b) =>
                a.tier - b.tier
        );


        results +=
            brandDevices.length;


        /*
        CONTENEDOR DE MARCA
        */

        const section =
            document.createElement("section");

        section.className =
            "section";


        /*
        CABECERA
        */

        const header =
            document.createElement("div");

        header.className =
            "item";

        header.style.cursor =
            "pointer";

        header.innerHTML = `

            <h2 style="margin-bottom: 0;">
                📱 ${brand}

                <span
                    class="brand-arrow"
                    style="
                        float: right;
                        font-size: 18px;
                    "
                >
                    ▾
                </span>
            </h2>

        `;


        /*
        LISTA
        */

        const list =
            document.createElement("div");


        list.style.display =
            query
                ? "block"
                : "none";


        /*
        ABRIR / CERRAR
        */

        header.addEventListener(
            "click",
            () => {

                if (
                    list.style.display === "none"
                ) {

                    list.style.display =
                        "block";

                } else {

                    list.style.display =
                        "none";

                }

            }
        );


        /*
        DISPOSITIVOS
        */

        brandDevices.forEach(device => {

            const info =
                tierInfo[device.tier];


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


            if (device.warning) {

                card.style.border =
                    "1px solid #6b5925";

            }


            if (device.url) {

                card.href =
                    device.url;

                card.target =
                    "_blank";

                card.rel =
                    "noopener noreferrer";

            }


            let extra = "";


            if (device.warning) {

                extra += `

                    <p
                        style="
                            color:#d6b94f;
                            font-size:13px;
                            margin-bottom:6px;
                        "
                    >
                        ⚠️ Rendimiento limitado
                    </p>

                `;

            }


            if (device.ramNote) {

                extra += `

                    <p class="info">
                        📱 ${device.ramNote}
                    </p>

                `;

            }


            if (device.soon) {

                extra += `

                    <p class="info">
                        ⏳ Configuración próximamente
                    </p>

                `;

            }


            if (device.url) {

                extra += `

                    <p style="margin-bottom:0;">
                        ▶ Ver configuración
                    </p>

                `;

            }


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


            list.appendChild(card);

        });


        section.appendChild(header);
        section.appendChild(list);

        deviceList.appendChild(section);

    });


/*
RESULTADOS
*/

noResults.style.display =
    results === 0
        ? "block"
        : "none";

}

/*

BUSCADOR

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

INICIAR

*/

renderDevices();
