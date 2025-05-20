// Debug logs
console.log('Script starting...');

// Initialize map centered on Ladakh
const map = L.map('map').setView([34.1526, 77.5771], 8);
console.log('Map initialized:', map);

// Add custom tile layer
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

const customIcon = L.divIcon({
    className: 'marker',
    iconSize: [32, 32]
});

// Updated locations data with comprehensive information from the 2024-25 report
const locations = [
    {
        position: [34.83568449, 77.47910294],
        title: "Ayee Village",
        description: "Ayee is a small village of approximately 40 households located in the Nubra Valley, around 200 km from Leh, near Kubet in the Panamic area. Situated at an altitude of 3,500 meters on the western side of the Siachen river, this community relies solely on a small spring for its water needs. The AIR system was installed on November 1, 2024, and achieved a maximum ice volume of 21 lakh litres by March 2025. The site was our warmest location with mean air temperatures of -2°C (with minimums reaching -11°C) and relatively warm water temperatures averaging 5°C. The automation worked exceptionally well at this location, with no pipeline freezing events recorded. Due to warmer conditions, the system would typically spray during the night when temperatures dropped sufficiently and remain off during daylight hours. Despite these operational challenges, Ayee demonstrated the best fountain water use efficiency at 20% among all project sites.",
        stats: {
            households: "40",
            distance: "200 kms",
            waterSources: "Small spring",
            iceVolume: "21 lakh litres",
            efficiency: "20%",
            fundedBy: "NABARD"
        },
        image: "images/ayee.jpg"
    },
    {
        position: [33.92229758, 77.88109547],
        title: "Igoo Village",
        description: "Igoo, with around 260 households, is a south-facing village in the Indus belt located in a 10 km long narrow valley, situated 50 km east of Leh. The community is positioned at an elevation between 3,300-4,100 meters and has a natural glacier about 6 km from the AIR site at an altitude above 5,400 meters. The 2024-25 season marked our second winter of ice reservoir development in Igoo. The automated system achieved a maximum ice volume of 41 lakh litres by March 13, 2025, representing a significant 33% increase compared to the previous year. The site experienced mean air temperatures of -8°C (with minimums reaching -20°C), ideal water temperatures averaging 4°C, and discharge rates averaging 3.5 liters per second. The automation system kept the fountain spraying for around 90% of the time until March 2025, with no pipeline freezing events recorded throughout the entire season. However, fountain water use efficiency was poor at only 13%.",
        stats: {
            households: "260",
            distance: "50 kms",
            waterSources: "Natural glacier, Igoo Tso (glacial lake)",
            iceVolume: "41 lakh litres",
            efficiency: "13%",
            fundedBy: "NABARD"
        },
        image: "images/igoo.jpg"
    },
    {
        position: [34.22027778, 76.89722222],
        title: "Ursi Village",
        description: "Ursi is a remote mountain village situated at an altitude of 3,700 meters, nestled between the Zanskar and Indus rivers. With only 16 households, it is one of the smallest communities in the project. The village has historically faced severe water shortages, relying solely on spring sources with no natural glacier in the area. The AIR system was installed on November 14, 2024, and achieved an impressive maximum ice volume of 46 lakh litres, making it the largest ice reservoir among all project sites. The site data showed mean air temperatures of -4°C (with minimums reaching -13°C) and moderate water temperatures averaging 4°C. This location presented the most challenging installation environment, requiring crossing a hill, climbing difficult terrain, and manually transporting all equipment including heavy pipes. However, the entire village community came together to assist with the project, demonstrating strong local buy-in. This marked the seventh consecutive year of ice stupa construction in Ursi, but the first using automated technology.",
        stats: {
            households: "16",
            distance: "121 kms",
            waterSources: "Small spring (no natural glacier)",
            iceVolume: "46 lakh litres",
            efficiency: "Not measured",
            fundedBy: "Mercy Corps Ventures"
        },
        image: "images/ursi.jpg"
    },
    {
        position: [33.7639167, 77.8610556],
        title: "Tuna Village",
        description: "Tuna is a small hamlet of only 5 households situated at an elevation of 3,939 meters. Despite its small size, the area is rich in wildlife and biodiversity. The community faces severe water challenges, which have been exacerbated by a series of natural disasters over recent years, including flash floods in 2006, 2010, and 2019. These events have dramatically diminished spring water availability and blocked traditional water channels. The AIR system was installed on January 9, 2025, making it the last site to be established in our implementation schedule. Due to improper choice of water source, our systems had to be shifted 2 km higher than the old location around mid-February, which shortened the freezing window and made measurement campaigns difficult. The site experienced mean air temperatures of -5°C (with minimums reaching -14°C) and water temperatures averaging 2°C. Comprehensive ice volume data and efficiency metrics are not available for this location.",
        stats: {
            households: "5",
            distance: "56 kms",
            waterSources: "Spring water (diminished by flash floods)",
            iceVolume: "Data not available",
            efficiency: "Data not available",
            fundedBy: "Mercy Corps Ventures"
        },
        image: "images/tunah.jpg"
    },
    {
        position: [34.06350485, 77.82494797],
        title: "Sakti Village",
        description: "Sakti is a large village with approximately 360 households, situated 55 km east of Leh at an elevation of 4,470 meters. The village is positioned above Chemre and Kharu, with which it shares the same water sources, and is located within a remarkable wildlife hotspot. The AIR system was installed on December 9, 2024, and achieved a maximum ice volume of 18 lakh litres. This location proved to be our highest and harshest site, experiencing the coldest conditions with mean air temperatures of -10°C and minimums reaching -22°C. Water temperatures averaged just 2°C, creating a narrow operational window for the automated system. Unlike other sites where weather conditions primarily constrained spray decisions, at Sakti, water temperature was the limiting factor, resulting in the lowest percentage of active spray time (around 62%) among all implementation locations. The site recorded approximately four pipeline freezing events throughout the season, requiring weekly maintenance visits.",
        stats: {
            households: "360",
            distance: "55 kms",
            waterSources: "Two glaciers (Warila and Changla)",
            iceVolume: "18 lakh litres",
            efficiency: "6%",
            fundedBy: "Irrigation and Flood Control Department"
        },
        image: "images/sakti.jpg"
    },
    {
        position: [34.12639019, 77.70943888],
        title: "Stakmo Village",
        description: "Stakmo is a small village of approximately 40 households located 30 km from Leh, above Thiksay, at an elevation of 3,910 meters. The community relies primarily on a small glacier and a few natural springs as its main water sources. The AIR system was installed on December 2, 2024, and achieved a maximum ice volume of 27 lakh litres. The implementation faced an early challenge when villagers decided to lower the water source below the Jal Jeevan pipes, requiring removal and reinstallation of the entire pipeline system. The pipeline became the second-longest among all project sites, increasing vulnerability to freezing events. The system operated under moderately cold conditions with mean air temperatures of -6°C (with minimums reaching -16°C) and water temperatures averaging 2°C. Discharge rates averaged 2.2 liters per second, with the automation system maintaining fountain spray 97% of the time until March. However, water use efficiency was poor at 17%. This represents the first successful ice reservoir in Stakmo since the 2010 flash floods destroyed previous structures.",
        stats: {
            households: "40",
            distance: "30 kms",
            waterSources: "Small glacier, natural springs",
            iceVolume: "27 lakh litres",
            efficiency: "17%",
            fundedBy: "Mercy Corps Ventures"
        },
        image: "images/stakmo.jpg"
    },
    {
        position: [34.31777778, 77.23805556],
        title: "Likir Village",
        description: "Likir, with approximately 300 households, is a vibrant village located 60 km west of Leh at an elevation of 4,470 meters. Agriculture serves as the primary livelihood for residents, with tourism providing a secondary source of income. The village is renowned for its agricultural products, particularly apricots and peas. The AIR system was installed on November 27, 2024, in collaboration with the Irrigation and Flood Control Department, and achieved a maximum ice volume of 31 lakh litres by March 19, 2025. The site utilized a unique water source that combined glacial and spring water—an innovative approach suggested by the community themselves. The system performed well under the site's specific conditions, with mean water temperatures of 3°C and average air temperatures of -6°C (with minimums reaching -17°C). The site's data showed moderate discharge rates averaging 1.70 liters per second. The automation system kept the fountain spraying for around 90% of the time until March 2025, with fountain water use efficiency at 20%.",
        stats: {
            households: "300",
            distance: "60 kms",
            waterSources: "Natural glacier, springs, combined water source",
            iceVolume: "31 lakh litres",
            efficiency: "20%",
            fundedBy: "Irrigation and Flood Control Department"
        },
        image: "images/likir.jpg"
    }
];

// Add markers
locations.forEach(location => {
    const marker = L.marker(location.position, {icon: customIcon}).addTo(map);
    
    // First click zooms in
    let isZoomed = false;
    
    marker.on('click', () => {
        if (!isZoomed) {
            // First click only zooms
            map.flyTo(location.position, 12, {
                duration: 2,
                easeLinearity: 0.25
            });
            isZoomed = true;
        } else {
            // Second click opens sidebar
            updateSidebar(location);
        }
    });
});

function updateSidebar(location) {
    const sidebarContent = document.querySelector('.sidebar-content');
    
    // Create HTML for the village image - only if image path exists
    let imageHTML = '';
    if (location.image) {
        imageHTML = `
            <div class="village-image">
                <img src="${location.image}" alt="${location.title}">
            </div>
        `;
    }
    
    // Create HTML for the village data points - only if stats exist
    let statsHTML = '';
    if (location.stats) {
        statsHTML = `
            <div class="village-stats">
                ${location.stats.households ? `
                <div class="stat-item">
                    <div class="stat-icon"><i class="fas fa-home"></i></div>
                    <div class="stat-content">
                        <div class="stat-label">Households</div>
                        <div class="stat-value">${location.stats.households}</div>
                    </div>
                </div>
                ` : ''}
                
                ${location.stats.distance ? `
                <div class="stat-item">
                    <div class="stat-icon"><i class="fas fa-route"></i></div>
                    <div class="stat-content">
                        <div class="stat-label">Distance from Leh</div>
                        <div class="stat-value">${location.stats.distance}</div>
                    </div>
                </div>
                ` : ''}
                
                ${location.stats.waterSources ? `
                <div class="stat-item">
                    <div class="stat-icon"><i class="fas fa-tint"></i></div>
                    <div class="stat-content">
                        <div class="stat-label">Water Sources</div>
                        <div class="stat-value">${location.stats.waterSources}</div>
                    </div>
                </div>
                ` : ''}
                
                ${location.stats.iceVolume ? `
                <div class="stat-item">
                    <div class="stat-icon"><i class="fas fa-icicles"></i></div>
                    <div class="stat-content">
                        <div class="stat-label">Maximum Ice Volume</div>
                        <div class="stat-value">${location.stats.iceVolume}</div>
                    </div>
                </div>
                ` : ''}
                
                ${location.stats.efficiency ? `
                <div class="stat-item">
                    <div class="stat-icon"><i class="fas fa-percentage"></i></div>
                    <div class="stat-content">
                        <div class="stat-label">Water Use Efficiency</div>
                        <div class="stat-value">${location.stats.efficiency}</div>
                    </div>
                </div>
                ` : ''}
                
                ${location.stats.fundedBy ? `
                <div class="stat-item">
                    <div class="stat-icon"><i class="fas fa-hands-helping"></i></div>
                    <div class="stat-content">
                        <div class="stat-label">Funded By</div>
                        <div class="stat-value">${location.stats.fundedBy}</div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }
    
    sidebarContent.innerHTML = `
        <div class="location-info">
            <h2>${location.title}</h2>
            ${imageHTML}
            <p>${location.description || 'No description available'}</p>
            ${statsHTML}
        </div>
    `;
    
    document.querySelector('.sidebar').classList.add('active');
    // Hide left sidebar when marker is clicked
    leftSidebar.classList.remove('active');
}

// Close sidebar
document.querySelector('.close-sidebar').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('active');
});

// Left sidebar toggle with button visibility
const leftSidebar = document.querySelector('.left-sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    leftSidebar.classList.toggle('active');
});

// Share functions
function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Explore the Automated Ice Reservoir (AIR) projects in Ladakh - innovative water management solutions by Acres of Ice for high-altitude communities facing climate change.');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

// Add resize handler for map
window.addEventListener('resize', () => {
    map.invalidateSize();
});

// Force a map size recalculation after small delay
setTimeout(() => {
    map.invalidateSize();
    console.log('Map size recalculated');
}, 100);

// Show left sidebar on page load after a small delay
window.addEventListener('load', () => {
    setTimeout(() => {
        leftSidebar.classList.add('active');
    }, 500);
});
