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

// Updated locations data with case studies and stats from the 2025 report only
const locations = [
    {
        position: [34.83568449, 77.47910294],
        title: "Ayee Village",
        description: `<div class="case-study">
            <div class="section">
                <h3>Community Profile</h3>
                <p>Ayee is a small village of approximately 40 households located in the Nubra Valley, around 200 km from Leh, near Kubet in the Panamic area. Situated at an altitude of 3,500 meters on the western side of the Siachen river, this community faces significant water challenges due to the absence of a nearby glacier. Instead, the village relies solely on a small spring for its water needs, which cannot provide sufficient flow for agricultural activities during the crucial spring growing season.</p>
            </div>
            
            <div class="section">
                <h3>Water Management History</h3>
                <p>Without glacial water sources, Ayee has been particularly proactive in developing alternative water storage solutions. In 2021, the Ladakh Ecological Development Group (LEDeG) implemented a project that directed water from the spring through pipes and showered it over a cliff into a shady area. The local Youth Association has been constructing ice reservoirs for the past five years, demonstrating strong community engagement with water conservation techniques.</p>
            </div>
            
            <div class="section">
                <h3>AIR Implementation Experience</h3>
                <p>With support from NABARD, we installed the AIR system in Ayee on November 1, 2024. Early installation was prioritized due to the extreme accessibility challenge posed by Khardung La pass (18,380 feet), which becomes treacherous during winter months. Ayee demonstrated exceptional local participation, with village youth quickly understanding the system's operation principles, allowing for effective remote management.</p>
            </div>
            
            <div class="section">
                <h3>Results</h3>
                <p>Ayee presented distinctive operational conditions as our warmest site. The Ayee AIR system achieved a respectable maximum ice volume of 21 lakh litres. The site data confirms Ayee as our warmest location, with mean air temperatures of -2°C (with minimums reaching -11°C) and relatively warm water temperatures averaging 5°C. Despite these warmer conditions, the system performed efficiently, with discharge rates averaging 3.3 liters per second. The fountain water use efficiency was relatively high at 20% with no pipeline freezing events.</p>
            </div>
        </div>`,
        stats: {
            households: "40",
            distance: "200 km",
            waterSources: "Small spring",
            maxIceVolume: "21 lakh liters",
            waterUseEfficiency: "20%"
        },
        image: "images/ayee.jpg"
    },
    {
        position: [33.92229758, 77.88109547],
        title: "Igoo Village",
        description: `<div class="case-study">
            <div class="section">
                <h3>Community Profile</h3>
                <p>Igoo, with around 260 households, is a south-facing village in the Indus belt located in a 10 km long narrow valley, situated 50 km east of Leh. The community is positioned at an elevation between 3,300-4,100 meters and has a natural glacier about 6 km from the AIR site at an altitude above 5,400 meters. Despite the presence of this natural glacier, the village has consistently faced water scarcity during the crucial spring sowing season.</p>
            </div>
            
            <div class="section">
                <h3>Water Management History</h3>
                <p>The village has a long history of implementing water conservation strategies. In 2009, two sets of artificial glaciers were built at Phu under the Watershed Development Programme and Operation Sadbhavana. In 2014, another set of 26 structures was built with RBS (UK) funding. In 2021, an 'ice stupa' was built when Igoo participated in an ice stupa competition, winning first prize. But all ice reservoir initiatives were abandoned since then until we revived the village's Water Management Committee.</p>
            </div>
            
            <div class="section">
                <h3>AIR Implementation Experience</h3>
                <p>Funded by NABARD, the 2024-25 season marked our second winter of ice reservoir development in Igoo. We initiated the system on November 6, with consistent local team involvement. A significant design evolution occurred between the two seasons, transitioning from fountains mounted on vertical metal pipes to those mounted on hanging HDPE pipelines with three fountains, dramatically altering the structure's shape and increasing ice volume.</p>
            </div>
            
            <div class="section">
                <h3>Results</h3>
                <p>The automated system achieved a maximum ice volume of 41 lakh litres by March 13, 2025, a significant 33% increase compared to the previous year's maximum of 27.60 lakh litres. Igoo maintained the second highest ice volume among all project sites. The site experienced mean air temperatures of -8°C (with minimums reaching -20°C), ideal water temperatures averaging 4°C, and discharge rates averaging 3.5 liters per second. The automation system kept the fountain spraying for around 90% of the time with no pipeline freezing events, though water use efficiency was only 13%.</p>
            </div>
            
            <div class="section">
                <h3>Community Impact</h3>
                <p>Household surveys showed varied responses based on geographical location within the village. About half of the 52 respondents reported increased crop yields, while the rest saw little or no change, with the difference largely correlated to their location within the village. Most reported slight improvements in agricultural income, with only a minority experiencing significant improvement.</p>
            </div>
        </div>`,
        stats: {
            households: "260",
            distance: "50 km east of Leh",
            waterSources: "Glacial meltwater, springs",
            maxIceVolume: "41 lakh liters",
            waterUseEfficiency: "13%",
            avgAirTemp: "-8°C"
        },
        image: "images/igoo.jpg"
    },
    {
        position: [34.22027778, 76.89722222],
        title: "Ursi Village",
        description: `<div class="case-study">
            <div class="section">
                <h3>Community Profile</h3>
                <p>Ursi is a remote mountain village situated at an altitude of 3,700 meters, nestled between the Zanskar and Indus rivers. With only 16 households, it is one of the smallest communities in the project. The village has historically faced severe water shortages, relying solely on spring sources with no natural glacier in the area. At one point, villagers even considered abandoning the settlement entirely due to the persistent lack of water for agriculture and daily use.</p>
            </div>
            
            <div class="section">
                <h3>Water Management History</h3>
                <p>Many years ago, Padmashree Chewang Norphel attempted to build cascade-type structures to address the water crisis, but these efforts were largely unsuccessful. Later, inspired by the ice stupa concept, the youth of Ursi took initiative and began building ice structures in the village. This winter marked the seventh consecutive year of ice stupa construction in Ursi, but the first using automated technology.</p>
            </div>
            
            <div class="section">
                <h3>AIR Implementation Experience</h3>
                <p>Funded by Mercy Corps Ventures, we installed the AIR system in Ursi on November 14, 2024. This site presented the most challenging installation environment, located in a gorge at high altitude. Accessing the site required crossing a hill, climbing difficult terrain, and manually transporting all equipment. The entire village community came together to assist with carrying the pipes, demonstrating strong local buy-in.</p>
            </div>
            
            <div class="section">
                <h3>Results</h3>
                <p>The Ursi AIR system achieved an impressive maximum ice volume of 46 lakh litres, making it the largest ice reservoir among our sites. The system performed well despite challenging conditions, with mean air temperatures of -4°C (with minimums reaching -13°C) and moderate water temperatures averaging 4°C. Due to the ice reservoir being shaded in a gorge, temperature conditions were always favorable, allowing the automation system to keep the fountain continuously operating.</p>
            </div>
            
            <div class="section">
                <h3>Community Impact</h3>
                <p>Household surveys revealed that seven out of eight participants observed substantial improvements in water availability, directly attributing these improvements to the AIR system. Almost all participants reported increased agricultural income due to better water availability. The success at Ursi is particularly significant given the village's complete dependence on ice reservoirs for water availability.</p>
            </div>
        </div>`,
        stats: {
            households: "16",
            distance: "Between Zanskar and Indus rivers",
            waterSources: "Spring water only, no glacier",
            maxIceVolume: "46 lakh liters",
            avgAirTemp: "-4°C",
            elevation: "3,700 meters"
        },
        image: "images/ursi.jpg"
    },
    {
        position: [33.7639167, 77.8610556],
        title: "Tunah Village",
        description: `<div class="case-study">
            <div class="section">
                <h3>Community Profile</h3>
                <p>Tuna is a small hamlet of only 5 households situated at an elevation of 3,939 meters. Despite its small size, the area is rich in wildlife and biodiversity. The community faces severe water challenges, which have been exacerbated by a series of natural disasters over recent years.</p>
            </div>
            
            <div class="section">
                <h3>Water Management History</h3>
                <p>The village has experienced significant ecological disruptions due to flash floods in 2006, 2010, and 2019. These events have dramatically diminished spring water availability and blocked traditional water channels, intensifying an already severe water crisis. In response to these challenges, local residents have been actively building resilience strategies to mitigate the impacts of climate change on their water resources.</p>
            </div>
            
            <div class="section">
                <h3>AIR Implementation Experience</h3>
                <p>We installed the AIR system in Tuna on January 9, 2025, making it the last site to be established in our implementation schedule. The system design incorporated the lessons learned from earlier installations. To ensure sustainable operation, we established a local Water Management Committee comprising village representatives. However, due to improper choice of water source, our systems had to be shifted 2 km higher than the old location around mid-February.</p>
            </div>
            
            <div class="section">
                <h3>Results</h3>
                <p>Due to the water source relocation, we had a shortened freezing window and faced difficulties conducting measurement and maintenance campaigns in peak winter. Therefore, comprehensive measurement campaigns were not carried out, so detailed ice volume data and efficiency metrics are not available. The site data shows Tuna experienced mean air temperatures of -5°C (with minimums reaching -14°C) and water temperatures averaging 2°C.</p>
            </div>
        </div>`,
        stats: {
            households: "5",
            elevation: "3,939 meters",
            waterSources: "Spring water, diminished by flash floods",
            avgAirTemp: "-5°C",
            avgWaterTemp: "2°C",
            installationDate: "January 9, 2025"
        },
        image: "images/tunah.jpg"
    },
    {
        position: [34.06350485, 77.82494797],
        title: "Sakti Village",
        description: `<div class="case-study">
            <div class="section">
                <h3>Community Profile</h3>
                <p>Sakti is a large village with approximately 360 households, situated 55 km east of Leh at an elevation of 4,470 meters. The village is positioned above Chemre and Kharu, with which it shares the same water sources. What makes Sakti particularly unique is its location within a remarkable wildlife hotspot, where wolves, lynx, urials, and marmots roam the high-altitude landscape. Despite its size and established infrastructure, Sakti faces acute water shortages throughout the growing season.</p>
            </div>
            
            <div class="section">
                <h3>Water Management History</h3>
                <p>The village relies primarily on two glaciers for its water supply—one at Warila, which feeds the western part of the village (Taknak), and another at Changla, supplying the eastern part (Takkar). Artificial glacier initiatives in Sakti date back to the 1990s, when the first set was built under the Watershed Development Programme at Zingrul. The village also participated in the 'Ice Stupa' competition in 2018, but since 2023, there have been no maintenance and the old structures have become dysfunctional.</p>
            </div>
            
            <div class="section">
                <h3>AIR Implementation Experience</h3>
                <p>Supported by the Irrigation and Flood Control Department, we installed the AIR system in Sakti on December 9, 2024. This location proved to be our highest and harshest site, and it was our first time doing the construction campaign when ambient air temperatures were below -15°C. An unexpected challenge came in the form of wildlife interactions, with some of our wiring damaged by animal activity.</p>
            </div>
            
            <div class="section">
                <h3>Results</h3>
                <p>Despite numerous challenges, the Sakti AIR system achieved a maximum ice volume of 18 lakh litres. The site experienced the coldest conditions of all locations, with mean air temperatures of -10°C and minimums reaching -22°C. Water temperatures averaged just 2°C, creating a narrow operational window. Unlike other sites where weather conditions primarily constrained spray decisions, at Sakti, water temperature was the limiting factor, resulting in the lowest percentage of active spray time (62%) among all implementation locations. Fountain water use efficiency was also low at 6%.</p>
            </div>
        </div>`,
        stats: {
            households: "360",
            distance: "55 km east of Leh",
            elevation: "4,470 meters",
            waterSources: "Two glaciers (Warila and Changla)",
            maxIceVolume: "18 lakh liters",
            avgAirTemp: "-10°C (minimum -22°C)",
            sprayTime: "62% of period",
            waterUseEfficiency: "6%"
        },
        image: "images/sakti.jpg"
    },
    {
        position: [34.12639019, 77.70943888],
        title: "Stakmo Village",
        description: `<div class="case-study">
            <div class="section">
                <h3>Community Profile</h3>
                <p>Stakmo is a small village of approximately 40 households located 30 km from Leh, above Thiksay, at an elevation of 3,910 meters. The community relies primarily on a small glacier and a few natural springs as its main water sources, which have historically been insufficient during critical agricultural periods.</p>
            </div>
            
            <div class="section">
                <h3>Water Management History</h3>
                <p>The village has a significant history of water conservation innovation. In 2006, a cascade ice reservoir system with diversion channels was built at Chhumik Tangpo under the Watershed Development Programme. A second similar structure was constructed at Phu in 2009 under Operation Sadhbhavana. These structures served the community effectively until they were destroyed during the 2010 flash floods. Since then, Stakmo had been without any artificial glacier structures until our current implementation.</p>
            </div>
            
            <div class="section">
                <h3>AIR Implementation Experience</h3>
                <p>We installed the AIR system in Stakmo on December 2, 2024. The implementation faced an early challenge when villagers decided to lower the water source below the Jal Jeevan pipes, requiring us to remove and reinstall the entire pipeline system. The pipeline from the source to the drain valve became the second-longest among all our project sites, increasing vulnerability to freezing. Indeed, freezing events occurred several times during the season.</p>
            </div>
            
            <div class="section">
                <h3>Results</h3>
                <p>The Stakmo AIR system achieved a maximum ice volume of 27 lakh litres, placing it in the middle range among our implementation sites. The system operated under moderately cold conditions with mean air temperatures of -6°C (with minimums reaching -16°C) and water temperatures averaging 2°C. Discharge rates averaged 2.2 liters per second. Due to the site being shaded and the water temperatures being very cold, the automation system sprayed the fountain 97% of the time until March. However, water use efficiency in Stakmo was poor at 17%.</p>
            </div>
        </div>`,
        stats: {
            households: "40",
            distance: "30 km from Leh",
            elevation: "3,910 meters",
            waterSources: "Small glacier and natural springs",
            maxIceVolume: "27 lakh liters",
            avgAirTemp: "-6°C (minimum -16°C)",
            avgWaterTemp: "2°C",
            dischargeRate: "2.2 liters/second",
            sprayTime: "97% of period",
            waterUseEfficiency: "17%"
        },
        image: "images/stakmo.jpg"
    },
    {
        position: [34.31777778, 77.23805556],
        title: "Likir Village",
        description: `<div class="case-study">
            <div class="section">
                <h3>Community Profile</h3>
                <p>Likir, with approximately 300 households, is a vibrant village located 60 km west of Leh at an elevation of 4,470 meters. Agriculture serves as the primary livelihood for residents, with tourism providing a secondary source of income. The village is renowned for its agricultural products, particularly apricots and peas, which form an important part of the local economy.</p>
            </div>
            
            <div class="section">
                <h3>Water Management History</h3>
                <p>Despite having access to a natural glacier and several springs, Likir faces persistent challenges with water availability during the crucial sowing season. In 2016, the LEHO (Ladakh Environment and Health Organization) constructed a cascade-type artificial glacier with a 20-meter-long holding wall on a stream at Phu, approximately a two-hour walk above the village. However, due to the location not being sufficiently shaded, ice accumulation has historically been minimal.</p>
            </div>
            
            <div class="section">
                <h3>AIR Implementation Experience</h3>
                <p>In collaboration with the Irrigation and Flood Control Department, we installed the AIR system in Likir on November 27, 2024. The site utilized a unique water source that combined glacial and spring water—an innovative approach suggested by the community themselves. Initially, we attempted to implement the hanging fountains design that had proven successful in Igoo, but later transitioned to a vertical metal pipe design due to installation challenges.</p>
            </div>
            
            <div class="section">
                <h3>Results</h3>
                <p>The Likir AIR system achieved a maximum ice volume of 31 lakh litres by March 19, 2025. The automation system performed well under the site's specific conditions, with mean water temperatures of 3°C and average air temperatures of -6°C (with minimums reaching -17°C). The site's data showed moderate discharge rates averaging 1.70 liters per second. The automation system kept the fountain spraying for around 90% of the time until March 2025, with fountain water use efficiency at 20%. The water reserve created represents a significant improvement over previous artificial glacier attempts in the area.</p>
            </div>
        </div>`,
        stats: {
            households: "300",
            distance: "60 km west of Leh",
            elevation: "4,470 meters",
            waterSources: "Natural glacier and springs, combined water source",
            maxIceVolume: "31 lakh liters",
            avgAirTemp: "-6°C (minimum -17°C)",
            avgWaterTemp: "3°C",
            dischargeRate: "1.70 liters/second",
            sprayTime: "90% of period",
            waterUseEfficiency: "20%",
            crops: "Apricots and peas"
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
        // Create a table for the stats
        statsHTML = `<div class="village-stats-container">
            <h3>Key Statistics</h3>
            <table class="village-stats-table">`;
            
        // Add each stat as a row in the table
        for (const [key, value] of Object.entries(location.stats)) {
            // Convert camelCase keys to Title Case labels
            const label = key
                .replace(/([A-Z])/g, ' $1') // Add space before capital letters
                .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
                .replace(/([A-Za-z])([A-Z])/g, '$1 $2'); // Add space between words
                
            statsHTML += `
                <tr>
                    <td class="stat-label">${label}</td>
                    <td class="stat-value">${value}</td>
                </tr>
            `;
        }
        
        statsHTML += `</table></div>`;
    }
    
    sidebarContent.innerHTML = `
        <div class="location-info">
            <h2>${location.title}</h2>
            ${imageHTML}
            ${location.description || 'No description available'}
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
    const text = encodeURIComponent('Check out this interactive map of ice reservoir projects in Ladakh villages!');
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

// Add CSS for the case studies and stats
const styleElement = document.createElement('style');
styleElement.textContent = `
    .case-study {
        margin-bottom: 20px;
    }
    
    .section {
        margin-bottom: 15px;
    }
    
    .section h3 {
        font-size: 18px;
        margin-bottom: 8px;
        color: #2c3e50;
        font-weight: 600;
    }
    
    .section p {
        margin: 0;
        line-height: 1.6;
        color: #34495e;
    }
    
    .village-stats-container {
        margin-top: 20px;
        border-top: 1px solid #eee;
        padding-top: 15px;
    }
    
    .village-stats-container h3 {
        font-size: 18px;
        margin-bottom: 12px;
        color: #2c3e50;
    }
    
    .village-stats-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .village-stats-table tr {
        border-bottom: 1px solid #f5f5f5;
    }
    
    .village-stats-table tr:last-child {
        border-bottom: none;
    }
    
    .village-stats-table td {
        padding: 8px 4px;
    }
    
    .stat-label {
        font-weight: 600;
        color: #666;
        width: 40%;
    }
    
    .stat-value {
        color: #333;
    }
`;
document.head.appendChild(styleElement);

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
