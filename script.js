<!DOCTYPE html>
<html>
<head>
    <title>AIR Project Map</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
        }
        
        #map {
            height: 100%;
            width: 100%;
            position: absolute;
        }
        
        .sidebar {
            width: 350px;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            background: white;
            padding: 15px;
            overflow-y: auto;
            transform: translateX(100%);
            transition: transform 0.3s;
            box-shadow: -2px 0 5px rgba(0,0,0,0.1);
            z-index: 1000;
        }
        
        .sidebar.active {
            transform: translateX(0);
        }
        
        .left-sidebar {
            width: 250px;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: white;
            padding: 15px;
            overflow-y: auto;
            transform: translateX(-100%);
            transition: transform 0.3s;
            box-shadow: 2px 0 5px rgba(0,0,0,0.1);
            z-index: 1000;
        }
        
        .left-sidebar.active {
            transform: translateX(0);
        }
        
        .close-sidebar {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 18px;
        }
        
        .toggle-btn {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 1001;
            background: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
        
        /* Case Study Styles */
        .case-study h3 {
            color: #2c3e50;
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 18px;
        }
        
        .case-study p {
            line-height: 1.5;
            margin-bottom: 12px;
        }
        
        .village-stats {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #eee;
        }
        
        .village-stats h3 {
            color: #2c3e50;
            margin-bottom: 10px;
            font-size: 16px;
        }
        
        .village-stats table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .village-stats tr {
            border-bottom: 1px solid #f5f5f5;
        }
        
        .village-stats td {
            padding: 8px 4px;
        }
        
        .stat-label {
            font-weight: bold;
            color: #666;
            width: 40%;
        }
        
        .stat-value {
            color: #333;
        }
        
        .village-image {
            margin-bottom: 15px;
        }
        
        .village-image img {
            max-width: 100%;
            border-radius: 4px;
        }
        
        .dashboard h2 {
            margin-bottom: 10px;
        }
        
        .dashboard p {
            margin-bottom: 15px;
            line-height: 1.5;
        }
        
        .key-results {
            margin-bottom: 20px;
        }
        
        .key-results h3, .village-list h3 {
            font-size: 16px;
            margin-bottom: 10px;
            color: #2c3e50;
        }
        
        .key-results ul, .village-list ul {
            list-style-type: none;
            padding-left: 0;
        }
        
        .key-results li {
            margin-bottom: 5px;
        }
        
        .village-item {
            padding: 8px 0;
            cursor: pointer;
            border-bottom: 1px solid #f5f5f5;
        }
        
        .village-item:hover {
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <div class="sidebar">
        <button class="close-sidebar">×</button>
        <div class="sidebar-content"></div>
    </div>
    <div class="left-sidebar"></div>
    <button class="toggle-btn">☰</button>
    
    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    
    <script>
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

    // Updated locations data with case studies from the 2025 report
    const locations = [
        {
            position: [34.83568449, 77.47910294],
            title: "Ayee Village",
            description: `<div class="case-study">
                <h3>Community Profile</h3>
                <p>Ayee is a small village of approximately 40 households located in the Nubra Valley, around 200 km from Leh. Situated at an altitude of 3,500 meters, this community relies solely on a small spring for its water needs, which cannot provide sufficient flow for agricultural activities during the crucial spring growing season.</p>
                
                <h3>Water Management History</h3>
                <p>Without glacial water sources, Ayee has been particularly proactive in developing alternative water storage solutions. The local Youth Association has been constructing ice reservoirs for the past five years, demonstrating strong community engagement.</p>
                
                <h3>AIR Implementation Results</h3>
                <p>Our AIR system achieved a maximum ice volume of 21 lakh litres. Despite being our warmest site with mean air temperatures of -2°C, the system performed efficiently with discharge rates averaging 3.3 liters per second. The fountain water use efficiency was relatively high at 20% with no pipeline freezing events.</p>
            </div>`,
            stats: {
                households: "40",
                distance: "200 km",
                elevation: "3,500 meters",
                waterSources: "Small spring",
                maxIceVolume: "21 lakh liters",
                waterUseEfficiency: "20%"
            },
            image: "https://placehold.co/600x400?text=Ayee+Village"
        },
        {
            position: [33.92229758, 77.88109547],
            title: "Igoo Village",
            description: `<div class="case-study">
                <h3>Community Profile</h3>
                <p>Igoo, with around 260 households, is a south-facing village in the Indus belt located 50 km east of Leh. Despite having a natural glacier nearby, the village faces severe water scarcity during the crucial spring sowing season.</p>
                
                <h3>Water Management History</h3>
                <p>The village has implemented various water conservation strategies since 2009. In 2021, they built an 'ice stupa' and won first prize in a competition, but all initiatives were abandoned until we revived the village's Water Management Committee.</p>
                
                <h3>AIR Implementation Results</h3>
                <p>The automated system achieved a maximum ice volume of 41 lakh litres by March 2025, a 33% increase from the previous year. The site experienced mean air temperatures of -8°C, and the system kept the fountain spraying for around 90% of the time with no pipeline freezing events.</p>
            </div>`,
            stats: {
                households: "260",
                distance: "50 km east of Leh",
                elevation: "3,300-4,100 meters",
                waterSources: "Glacial meltwater, springs",
                maxIceVolume: "41 lakh liters",
                waterUseEfficiency: "13%"
            },
            image: "https://placehold.co/600x400?text=Igoo+Village"
        },
        {
            position: [34.22027778, 76.89722222],
            title: "Ursi Village",
            description: `<div class="case-study">
                <h3>Community Profile</h3>
                <p>Ursi is a remote mountain village with only 16 households, situated at 3,700 meters between the Zanskar and Indus rivers. The village has historically faced severe water shortages, relying solely on spring sources with no natural glacier.</p>
                
                <h3>Water Management History</h3>
                <p>Many years ago, attempts were made to build cascade-type structures, but these were largely unsuccessful. Later, the youth of Ursi began building ice structures. This winter marked their seventh consecutive year of ice stupa construction, but the first using automated technology.</p>
                
                <h3>AIR Implementation Results</h3>
                <p>The Ursi AIR system achieved an impressive maximum ice volume of 46 lakh litres, making it the largest ice reservoir among our sites. Due to the ice reservoir being shaded in a gorge, temperature conditions were always favorable, allowing continuous fountain operation.</p>
            </div>`,
            stats: {
                households: "16",
                distance: "Between Zanskar and Indus rivers",
                elevation: "3,700 meters",
                waterSources: "Spring water only, no glacier",
                maxIceVolume: "46 lakh liters",
                sprayTime: "100% of period"
            },
            image: "https://placehold.co/600x400?text=Ursi+Village"
        },
        {
            position: [33.7639167, 77.8610556],
            title: "Tunah Village",
            description: `<div class="case-study">
                <h3>Community Profile</h3>
                <p>Tuna is a small hamlet of only 5 households situated at an elevation of 3,939 meters. The community faces severe water challenges, which have been exacerbated by a series of natural disasters.</p>
                
                <h3>Water Management History</h3>
                <p>The village has experienced significant ecological disruptions due to flash floods in 2006, 2010, and 2019, which have dramatically diminished spring water availability and blocked traditional water channels.</p>
                
                <h3>AIR Implementation Results</h3>
                <p>Due to an improper choice of water source, our systems had to be relocated 2 km higher in mid-February, shortening the freezing window. Comprehensive measurements were not carried out, so detailed ice volume data and efficiency metrics are not available.</p>
            </div>`,
            stats: {
                households: "5",
                elevation: "3,939 meters",
                waterSources: "Spring water, diminished by flash floods",
                avgAirTemp: "-5°C (min -14°C)",
                avgWaterTemp: "2°C"
            },
            image: "https://placehold.co/600x400?text=Tunah+Village"
        },
        {
            position: [34.06350485, 77.82494797],
            title: "Sakti Village",
            description: `<div class="case-study">
                <h3>Community Profile</h3>
                <p>Sakti is a large village with approximately 360 households, situated 55 km east of Leh at an elevation of 4,470 meters. It's uniquely located within a wildlife hotspot, where wolves, lynx, urials, and marmots roam the high-altitude landscape.</p>
                
                <h3>Water Management History</h3>
                <p>The village relies primarily on two glaciers for its water supply. Artificial glacier initiatives in Sakti date back to the 1990s, but since 2023, the old structures have become dysfunctional.</p>
                
                <h3>AIR Implementation Results</h3>
                <p>Despite numerous challenges, the Sakti AIR system achieved a maximum ice volume of 18 lakh litres. The site experienced the coldest conditions of all locations, with mean air temperatures of -10°C and minimums reaching -22°C. This resulted in the lowest percentage of active spray time (62%) among all implementation locations.</p>
            </div>`,
            stats: {
                households: "360",
                distance: "55 km east of Leh",
                elevation: "4,470 meters",
                waterSources: "Two glaciers (Warila and Changla)",
                maxIceVolume: "18 lakh liters",
                waterUseEfficiency: "6%"
            },
            image: "https://placehold.co/600x400?text=Sakti+Village"
        },
        {
            position: [34.12639019, 77.70943888],
            title: "Stakmo Village",
            description: `<div class="case-study">
                <h3>Community Profile</h3>
                <p>Stakmo is a small village of approximately 40 households located 30 km from Leh, above Thiksay, at an elevation of 3,910 meters. The community relies primarily on a small glacier and a few natural springs.</p>
                
                <h3>Water Management History</h3>
                <p>In 2006, a cascade ice reservoir system was built, with a second structure added in 2009. These served the community effectively until they were destroyed during the 2010 flash floods. Since then, Stakmo had been without any artificial glacier structures until our implementation.</p>
                
                <h3>AIR Implementation Results</h3>
                <p>The Stakmo AIR system achieved a maximum ice volume of 27 lakh litres. The system operated under moderately cold conditions with mean air temperatures of -6°C and water temperatures averaging 2°C. The automation system sprayed the fountain 97% of the time until March, though water use efficiency was poor at 17%.</p>
            </div>`,
            stats: {
                households: "40",
                distance: "30 km from Leh",
                elevation: "3,910 meters",
                waterSources: "Small glacier and natural springs",
                maxIceVolume: "27 lakh liters",
                waterUseEfficiency: "17%"
            },
            image: "https://placehold.co/600x400?text=Stakmo+Village"
        },
        {
            position: [34.31777778, 77.23805556],
            title: "Likir Village",
            description: `<div class="case-study">
                <h3>Community Profile</h3>
                <p>Likir, with approximately 300 households, is located 60 km west of Leh at an elevation of 4,470 meters. The village is renowned for its agricultural products, particularly apricots and peas.</p>
                
                <h3>Water Management History</h3>
                <p>Despite having access to a natural glacier and several springs, Likir faces persistent water shortages. Previous artificial glacier attempts had minimal success due to insufficient shading at the chosen locations.</p>
                
                <h3>AIR Implementation Results</h3>
                <p>The Likir AIR system achieved a maximum ice volume of 31 lakh litres by March 2025. The site utilized a unique water source that combined glacial and spring water. The automation system kept the fountain spraying for around 90% of the time, with fountain water use efficiency at 20%.</p>
            </div>`,
            stats: {
                households: "300",
                distance: "60 km west of Leh",
                elevation: "4,470 meters",
                waterSources: "Natural glacier and springs",
                maxIceVolume: "31 lakh liters",
                waterUseEfficiency: "20%"
            },
            image: "https://placehold.co/600x400?text=Likir+Village"
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
                    <h3>Village Statistics</h3>
                    <table>`;
                    
            // Add each stat as a row in the table
            Object.entries(location.stats).forEach(([key, value]) => {
                // Convert camelCase keys to Title Case labels
                const label = key
                    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
                    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
                    
                statsHTML += `
                    <tr>
                        <td class="stat-label">${label}</td>
                        <td class="stat-value">${value}</td>
                    </tr>
                `;
            });
            
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
        document.querySelector('.left-sidebar').classList.remove('active');
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

    // Project summary for the left sidebar
    const projectSummary = {
        title: "AIR Project 2024-25",
        description: "The Automated Ice Reservoir (AIR) project successfully implemented AIRs across seven villages in Ladakh during 2024-25, addressing seasonal water shortages in this high-altitude region.",
        keyResults: [
            "Total Ice Volume: 184 lakh liters",
            "Highest Volume: Ursi (46 lakh liters)",
            "Best Efficiency: Ayee (20%)",
            "Cost: ₹0.23 per liter"
        ]
    };

    // Create dashboard in left sidebar
    function createDashboard() {
        leftSidebar.innerHTML = `
            <div class="dashboard">
                <h2>${projectSummary.title}</h2>
                <p>${projectSummary.description}</p>
                
                <div class="key-results">
                    <h3>Key Results</h3>
                    <ul>
                        ${projectSummary.keyResults.map(result => `<li>${result}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="village-list">
                    <h3>Villages</h3>
                    <ul>
                        ${locations.map(location => `
                            <li class="village-item" data-position="${location.position}">
                                ${location.title} - ${location.stats.maxIceVolume || 'N/A'}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        // Add event listeners to village items
        document.querySelectorAll('.village-item').forEach(item => {
            item.addEventListener('click', () => {
                const posStr = item.getAttribute('data-position');
                const pos = posStr.split(',').map(Number);
                
                // Find the corresponding location
                const location = locations.find(loc => 
                    loc.position[0] === pos[0] && loc.position[1] === pos[1]
                );
                
                if (location) {
                    // Fly to location
                    map.flyTo(location.position, 12, {
                        duration: 2,
                        easeLinearity: 0.25
                    });
                    
                    // Show location info
                    setTimeout(() => {
                        updateSidebar(location);
                    }, 2000);
                }
            });
        });
    }

    // Initialize the dashboard
    createDashboard();

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
    </script>
</body>
</html>
