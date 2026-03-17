export interface Photo {
    id: string;
    src: string;
    title: string;
    link: string;
    alt: string;
}

const baseDir = "/images/high_res/";
const clientHdDir = "/images/client_hd/";

export const gridPhotos: Photo[] = [
    { id: "1", src: `${clientHdDir}portrait_1.png`, title: "Classic Portrait", link: "/library/portrait-1", alt: "Professional cinematic portrait of a man" },
    { id: "2", src: `${clientHdDir}child_1.png`, title: "Pure Joy", link: "/library/child-1", alt: "Joyful child in a light blue outfit" },
    { id: "3", src: `${clientHdDir}portrait_2.png`, title: "The Suit", link: "/library/portrait-2", alt: "Professional studio portrait adjusting tie" },
    { id: "4", src: `${clientHdDir}couple_1.png`, title: "Intimacy", link: "/library/couple-1", alt: "Intimate couple portrait in nature" },
    { id: "5", src: `${clientHdDir}portrait_3.png`, title: "Urban Style", link: "/library/portrait-3", alt: "Stylish urban portrait black and white" },
    { id: "6", src: `${clientHdDir}portrait_4.png`, title: "Elegance", link: "/library/portrait-4", alt: "Elegant bridal portrait with mehendi" },
    { id: "7", src: `${clientHdDir}couple_2.png`, title: "Golden Hour", link: "/library/couple-2", alt: "Couple silhouette at sunset" },
    { id: "8", src: `${clientHdDir}child_2.png`, title: "Whimsy", link: "/library/child-2", alt: "Child with a white umbrella" },
    { id: "9", src: `${clientHdDir}portrait_5.png`, title: "Tradition", link: "/library/portrait-5", alt: "Traditional bridal portrait closeup" },
    // Mixed with scenic high res
    { id: "10", src: `${baseDir}mountain_vista.png`, title: "Mountain Vista", link: "#", alt: "Mountain" },
    { id: "11", src: `${baseDir}sunset_glow.png`, title: "Sunset Glow", link: "#", alt: "Sunset" },
    { id: "12", src: `${baseDir}ocean_breeze.png`, title: "Ocean Breeze", link: "#", alt: "Ocean" },
    { id: "13", src: `${baseDir}forest_path.png`, title: "Forest Path", link: "#", alt: "Forest" },
    { id: "14", src: `${baseDir}desert_sands.png`, title: "Desert Sands", link: "#", alt: "Desert" },
    { id: "15", src: `${baseDir}city_lights.png`, title: "City Lights", link: "#", alt: "City" },
    { id: "16", src: `${baseDir}canyon_walls.png`, title: "Canyon Walls", link: "#", alt: "Canyon" },
    { id: "17", src: `${baseDir}starry_night.png`, title: "Starry Night", link: "#", alt: "Stars" },
    { id: "18", src: `${baseDir}hidden_valley.png`, title: "Hidden Valley", link: "#", alt: "Valley" },
    // More client HD to fill the grid
    { id: "19", src: `${clientHdDir}portrait_1.png`, title: "Style", link: "#", alt: "Portrait" },
    { id: "20", src: `${clientHdDir}child_1.png`, title: "Emotion", link: "#", alt: "Child" },
    { id: "21", src: `${clientHdDir}couple_1.png`, title: "Connection", link: "#", alt: "Couple" }
];

export const columnPhotos = {
    column1: [
        { src: `${clientHdDir}portrait_1.png`, alt: "Professional cinematic portrait" },
        { src: `${baseDir}starry_night.png`, alt: "Clear starry night sky" },
        { src: `${clientHdDir}child_1.png`, alt: "Joyful child portrait" }
    ],
    column2: [
        { src: `${clientHdDir}portrait_2.png`, alt: "Studio portrait adjusting tie" },
        { src: `${baseDir}canyon_walls.png`, alt: "Dramatic canyon walls" },
        { src: `${clientHdDir}couple_1.png`, alt: "Intimate couple portrait" }
    ],
    column3: [
        { src: `${clientHdDir}portrait_3.png`, alt: "Stylish urban portrait" },
        { src: `${baseDir}forest_path.png`, alt: "Peaceful forest path" },
        { src: `${clientHdDir}portrait_4.png`, alt: "Elegant bridal portrait" }
    ],
    column4: [
        { src: `${clientHdDir}couple_2.png`, alt: "Couple silhouette at sunset" },
        { src: `${baseDir}city_lights.png`, alt: "Dazzling city lights" },
        { src: `${clientHdDir}child_2.png`, alt: "Child with umbrella" }
    ],
    column5: [
        { src: `${clientHdDir}portrait_5.png`, alt: "Traditional bridal portrait" },
        { src: `${baseDir}hidden_valley.png`, alt: "Lush hidden valley" },
        { src: `${clientHdDir}portrait_1.png`, alt: "Cinematic portrait" }
    ]
};

