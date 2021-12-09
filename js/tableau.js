function initViz() {
    var containerDiv = document.getElementById("TableauTables"),
    url = "https://public.tableau.com/views/WebsiteFinalTableau/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}
