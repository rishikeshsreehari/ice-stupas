margin: 15px 0;
        border-radius: 0 4px 4px 0;
    }
    
    .highlight-label {
        font-weight: 600;
        color: #444;
        display: flex;
        align-items: center;
        margin-bottom: 4px;
    }
    
    .highlight-label i {
        margin-right: 6px;
        color: #0077cc;
    }
    
    .highlight-value {
        color: #333;
    }
    
    .history-highlight {
        background: #fff3cd;
        border-left: 4px solid #ffc107;
        padding: 12px 15px;
        margin: 15px 0;
        border-radius: 0 4px 4px 0;
        font-style: italic;
        color: #856404;
    }
    
    .history-highlight i {
        color: #856404;
        margin-right: 6px;
    }
    
    .results-chart {
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 8px;
        flex-wrap: wrap;
    }
    
    .chart-title {
        width: 100%;
        text-align: center;
        font-weight: 600;
        margin-bottom: 10px;
        color: #333;
    }
    
    .chart-description {
        width: 100%;
        text-align: center;
        color: #666;
        font-size: 0.9em;
        margin-bottom: 15px;
    }
    
    .result-metric {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 15px;
        border-radius: 8px;
        background: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        min-width: 80px;
    }
    
    .result-metric.highlight {
        background: #e3f2fd;
        border: 1px solid #bbdefb;
    }
    
    .metric-value {
        font-size: 24px;
        font-weight: 700;
        color: #0077cc;
        margin-bottom: 5px;
    }
    
    .metric-label {
        font-size: 12px;
        color: #666;
        text-align: center;
        line-height: 1.2;
    }
    
    .results-data {
        margin: 15px 0;
        background: #f8f9fa;
        padding: 12px;
        border-radius: 6px;
    }
    
    .data-item {
        display: flex;
        justify-content: space-between;
        padding: 6px 0;
        border-bottom: 1px solid #eee;
    }
    
    .data-item:last-child {
        border-bottom: none;
    }
    
    .data-label {
        font-weight: 600;
        color: #555;
    }
    
    .data-value {
        color: #0077cc;
    }
    
    .impact-visualization {
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
        flex-wrap: wrap;
    }
    
    .impact-stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        background: #f1f8e9;
        border-radius: 8px;
        min-width: 120px;
        margin: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    
    .impact-value {
        font-size: 22px;
        font-weight: 700;
        color: #558b2f;
        margin-bottom: 5px;
    }
    
    .impact-label {
        font-size: 12px;
        color: #558b2f;
        text-align: center;
        line-height: 1.3;
    }
    
    /* Village Stats Styles */
    .village-stats-container {
        margin-top: 25px;
        background: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
    }
    
    .village-stats-container h3 {
        font-size: 18px;
        margin-bottom: 15px;
        color: #2c3e50;
        padding-bottom: 8px;
        border-bottom: 1px solid #e1e1e1;
    }
    
    .grouped-stats {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    
    .stats-section {
        flex: 1 1 45%;
        min-width: 200px;
        margin-bottom: 15px;
    }
    
    .stats-section h4 {
        font-size: 15px;
        color: #333;
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #eee;
    }
    
    .stats-section h4 i {
        color: #0077cc;
        margin-right: 6px;
    }
    
    .stats-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .stats-table tr {
        border-bottom: 1px solid #f1f1f1;
    }
    
    .stats-table tr:last-child {
        border-bottom: none;
    }
    
    .stats-table td {
        padding: 8px 4px;
        vertical-align: top;
    }
    
    .stat-label {
        font-weight: 500;
        color: #666;
        width: 45%;
    }
    
    .stat-value {
        color: #333;
    }
    
    .location-header {
        margin-bottom: 15px;
    }
    
    .location-header h2 {
        margin-bottom: 8px;
        color: #2c3e50;
    }
    
    .location-highlights {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 15px;
    }
    
    .location-highlights > div {
        background: #f1f1f1;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 13px;
        display: flex;
        align-items: center;
    }
    
    .location-highlights .key-fact {
        background: #e3f2fd;
        color: #0277bd;
    }
    
    .location-highlights .funding-partner {
        background: #e8f5e9;
        color: #2e7d32;
    }
    
    .location-highlights .installation-date {
        background: #ede7f6;
        color: #5e35b1;
    }
    
    .location-highlights i {
        margin-right: 5px;
    }
    
    .village-image {
        margin-bottom: 15px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    }
    
    .village-image img {
        width: 100%;
        display: block;
    }
    
    .action-buttons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    
    .btn {
        background: #0077cc;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
        cursor: pointer;
        font-weight: 500;
        display: flex;
        align-items: center;
        transition: background 0.2s;
    }
    
    .btn:hover {
        background: #0066b3;
    }
    
    .btn i {
        margin-right: 6px;
    }
    
    /* Project Overview Styles */
    .project-overview {
        padding: 10px 0;
    }
    
    .project-overview h2 {
        margin-bottom: 15px;
        color: #2c3e50;
    }
    
    .overview-image {
        margin-bottom: 15px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    }
    
    .overview-image img {
        width: 100%;
        display: block;
    }
    
    .overview-description {
        margin-bottom: 20px;
        line-height: 1.6;
    }
    
    .project-overview h3 {
        font-size: 18px;
        margin: 25px 0 15px;
        color: #2c3e50;
        padding-bottom: 8px;
        border-bottom: 1px solid #e1e1e1;
    }
    
    .project-overview h3 i {
        color: #0077cc;
        margin-right: 8px;
    }
    
    .key-results {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 20px;
    }
    
    .result-item {
        background: #f8f9fa;
        padding: 12px 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        flex: 1 1 40%;
        min-width: 150px;
    }
    
    .result-label {
        font-size: 13px;
        color: #666;
        margin-bottom: 5px;
    }
    
    .result-value {
        font-size: 18px;
        font-weight: 600;
        color: #0077cc;
    }
    
    .key-learnings {
        padding-left: 20px;
        margin-bottom: 20px;
    }
    
    .key-learnings li {
        margin-bottom: 10px;
        line-height: 1.5;
    }
    
    .village-comparison {
        margin-top: 25px;
    }
    
    .comparison-chart {
        margin-top: 15px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    }
    
    .comparison-chart img {
        width: 100%;
        display: block;
    }
    
    /* Dashboard Styles */
    .dashboard {
        padding: 15px;
    }
    
    .dashboard-header {
        margin-bottom: 20px;
        text-align: center;
    }
    
    .dashboard-header h2 {
        margin-bottom: 5px;
        color: #2c3e50;
    }
    
    .dashboard-header p {
        color: #7f8c8d;
    }
    
    .dashboard-stats {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    
    .stat-card {
        background: #fff;
        border-radius: 8px;
        padding: 15px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        text-align: center;
        flex: 1;
        margin: 0 5px;
    }
    
    .stat-icon {
        margin-bottom: 10px;
        font-size: 20px;
        color: #0077cc;
    }
    
    .stat-value {
        font-size: 22px;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 5px;
    }
    
    .stat-label {
        font-size: 12px;
        color: #7f8c8d;
    }
    
    .village-list {
        margin-bottom: 25px;
    }
    
    .village-list h3 {
        margin-bottom: 15px;
        color: #2c3e50;
        font-size: 16px;
        padding-bottom: 5px;
        border-bottom: 1px solid #ecf0f1;
    }
    
    .village-list ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .village-item {
        padding: 10px;
        border-radius: 6px;
        margin-bottom: 8px;
        cursor: pointer;
        background: #f8f9fa;
        transition: background 0.2s;
    }
    
    .village-item:hover {
        background: #e3f2fd;
    }
    
    .village-name {
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 3px;
    }
    
    .village-info {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #7f8c8d;
    }
    
    .dashboard-footer {
        text-align: center;
    }
    
    .overview-btn {
        width: 100%;
        padding: 10px;
        justify-content: center;
    }
`;
document.head.appendChild(styleElement);

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
