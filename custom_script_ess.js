//BEGIN EA CUSTOM FUNCTIONS --------------------------------------------------------------
function switchSubcategory(selectedSubcategory) {
    var categories = {
        accountsAndLogIns: [
        {Title: "I'm having trouble logging in to...",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "New account request (non-email)",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Db1656904b4e7c10096370c9e26dac430%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,b1656904b4e7c10096370c9e26dac430"},
        {Title: "New email account request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D09b7d962a59009009637a3d5b5301cc5%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,09b7d962a59009009637a3d5b5301cc5"},
        {Title: "Email account access request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De5875522a59009009637a3d5b5301c9a%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e5875522a59009009637a3d5b5301c9a"},
        {Title: "Password reset request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D956b19c0b4e7c10096370c9e26dac443%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,956b19c0b4e7c10096370c9e26dac443"},
        {Title: "FTP access request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dec94a4cc605451009637fb67a49efaf8%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,ec94a4cc605451009637fb67a49efaf8"}
        ],
        applications: [
        {Title: "I'm having trouble with an application",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "I'm having trouble with Citrix",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "I have a question about using an application",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dc7510764a59c85009637a3d5b5301c66%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,c7510764a59c85009637a3d5b5301c66"},
        {Title: "Online meeting request (Adobe Connect)",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D773a679409d55500963780fde6ca6e36%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,773a679409d55500963780fde6ca6e36"},
        {Title: "New application or software request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dbd79e0aaa55009009637a3d5b5301c8d%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,bd79e0aaa55009009637a3d5b5301c8d"},
        {Title: "Mobile application or service request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Da4e4caf4e0de2900952891e7adc46363%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,a4e4caf4e0de2900952891e7adc46363"},
        {Title: "View all Applications requests with descriptions...",
        Link: "application_services.do"}
        ],
        borrowEquipment: [
        {Title: "Borrow a laptop",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D65a98f0009b9d540963780fde6ca6e76%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,65a98f0009b9d540963780fde6ca6e76"},
        {Title: "PCI device request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D059c9eed09c55100963780fde6ca6e03%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,059c9eed09c55100963780fde6ca6e03"},
        {Title: "Borrow a hotspot, presentation clicker, etc.",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D5e4086a1870431009637d0ae59434d55%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,5e4086a1870431009637d0ae59434d55"}
        ],
        computerEquipment: [
        {Title: "I'm having trouble with computer hardware",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "Schedule a computer move",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dd263c724a59c85009637a3d5b5301c28%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,d263c724a59c85009637a3d5b5301c28"},
        {Title: "New mouse request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D87dddd22a59009009637a3d5b5301ce7%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,87dddd22a59009009637a3d5b5301ce7"},
        {Title: "New keyboard request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D109d1da2a59009009637a3d5b5301cae%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,109d1da2a59009009637a3d5b5301cae"},
        {Title: "New monitor request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D47ae9169b41b410096370c9e26dac452%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,47ae9169b41b410096370c9e26dac452"},
        {Title: "New laptop request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D6f09dd62a59009009637a3d5b5301cbc%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,6f09dd62a59009009637a3d5b5301cbc"},
        {Title: "Computer upgrade request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D069a24aaa55009009637a3d5b5301c3b%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,069a24aaa55009009637a3d5b5301c3b"},
        {Title: "Request hardware not listed above...",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D076da2f9bdba610095288482cadef6a2%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,076da2f9bdba610095288482cadef6a2"},
        {Title: "Computer speakers request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D484ed1a2a59009009637a3d5b5301c91%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,484ed1a2a59009009637a3d5b5301c91"},
        {Title: "View all hardware requests with descriptions...",
        Link: "hardware_services.do"}
        ],
        crm: [
        {Title: "I'm having trouble with CRM",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D0911fd4460e25500963747b1852be6d5%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,0911fd4460e25500963747b1852be6d5"},
        {Title: "I have a question about using CRM",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D067b610460e25500963747b1852be675%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,067b610460e25500963747b1852be675"},
        {Title: "CRM access request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D6f79714860e25500963747b1852be66d%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,6f79714860e25500963747b1852be66d"},
        {Title: "I have a suggestion related to CRM",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Da72b028c60e25500963747b1852be688%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,a72b028c60e25500963747b1852be688"}
        ],
        email: [
        {Title: "I'm having trouble with Outlook / email",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "I have a question about using Outlook / email",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dc7510764a59c85009637a3d5b5301c66%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,c7510764a59c85009637a3d5b5301c66"},
        {Title: "New email account request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D09b7d962a59009009637a3d5b5301cc5%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,09b7d962a59009009637a3d5b5301cc5"},
        {Title: "Email account access request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De5875522a59009009637a3d5b5301c9a%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e5875522a59009009637a3d5b5301c9a"},
        {Title: "Additional mailbox capacity request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D57c7a46aa55009009637a3d5b5301cde%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,57c7a46aa55009009637a3d5b5301cde"},
        {Title: "Email name change request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D4e479962a59009009637a3d5b5301ca8%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,4e479962a59009009637a3d5b5301ca8"},
        {Title: "Email distribution list request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dd72c68d4b45b010096370c9e26dac42d%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,d72c68d4b45b010096370c9e26dac42d"},
        {Title: "View all email requests with descriptions...",
        Link: "email_services.do"}
        ],
        filesAndSharedDrives: [
        {Title: "I'm having trouble with files or shared drives",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "I have a question about files or shared drives",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dc7510764a59c85009637a3d5b5301c66%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,c7510764a59c85009637a3d5b5301c66"},
        {Title: "File recovery request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D2178fc5cb45b010096370c9e26dac4ab%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,2178fc5cb45b010096370c9e26dac4ab"},
        {Title: "Shared drive access request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D89476c6aa55009009637a3d5b5301c50%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,89476c6aa55009009637a3d5b5301c50"},
        {Title: "New Shared folder request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D6ed1752ea59009009637a3d5b5301c7a%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,6ed1752ea59009009637a3d5b5301c7a"},
        {Title: "Network drive capacity increase request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D64082c2aa55009009637a3d5b5301c47%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,64082c2aa55009009637a3d5b5301c47"},
        {Title: "View all file & shared drive requests with descriptions...",
        Link: "file_services.do"}
        ],
        mobileDevices: [
        {Title: "I'm having trouble with a mobile device",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "I have a question about using a mobile device",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dc7510764a59c85009637a3d5b5301c66%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,c7510764a59c85009637a3d5b5301c66"},
        {Title: "Mobile application or service request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Da4e4caf4e0de2900952891e7adc46363%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,a4e4caf4e0de2900952891e7adc46363"},
        {Title: "New mobile phone request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D71e6775ca50805009637a3d5b5301c47%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,71e6775ca50805009637a3d5b5301c47"},
        {Title: "New tablet request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Df8f8dd62a59009009637a3d5b5301c6b%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,f8f8dd62a59009009637a3d5b5301c6b"}
        ],
        networkAndWiFi: [
        {Title: "I'm having trouble connecting to...",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "I have a question about connecting to...",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dc7510764a59c85009637a3d5b5301c66%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,c7510764a59c85009637a3d5b5301c66"},
        {Title: "Website or DNS request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D070f5dd40024690096375e9feb8c1ff6%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,070f5dd40024690096375e9feb8c1ff6"}
        ],
        printersAndScanners: [
        {Title: "I have a question about a printer or scanner",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dc7510764a59c85009637a3d5b5301c66%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,c7510764a59c85009637a3d5b5301c66"},
        {Title: "I'm having trouble with a printer or scanner",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "I need to be connected to a printer",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D3c3994bc87920d0095288e8609434d69%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,3c3994bc87920d0095288e8609434d69"},
        {Title: "New printer request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Db668586387e1050095288e8609434d30%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,b668586387e1050095288e8609434d30"},
        {Title: "New scanner request",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dc3ed5da2a59009009637a3d5b5301c89%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,c3ed5da2a59009009637a3d5b5301c89"}
        ],
        misc: [
        {Title: "I need help with something not in the listed categories",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3De27875e109c55100963780fde6ca6e3c%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,e27875e109c55100963780fde6ca6e3c"},
        {Title: "I have a question not in the listed categories",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dc7510764a59c85009637a3d5b5301c66%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,c7510764a59c85009637a3d5b5301c66"},
        {Title: "I have a request not in the listed categories",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D3c3994bc87920d0095288e8609434d69%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,3c3994bc87920d0095288e8609434d69"},
        {Title: "Schedule a computer move",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3Dd263c724a59c85009637a3d5b5301c28%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,d263c724a59c85009637a3d5b5301c28"},
        {Title: "I have a suggestion",
        Link: "catalog_item.do?sysparm_content_url=com.glideapp.servicecatalog_cat_item_view.do%3Fsysparm_id%3D2a5cec2709411500963780fde6ca6edf%26sysparm_no_search%3Dtrue&sysparm_document_key=sc_cat_item,2a5cec2709411500963780fde6ca6edf"}
        ]
    };

    //CREATE SUBCATEGORY ITEMS
    var subcategoryList = document.getElementById('subcategoryList');
    var subcategoryPlaceholder = document.getElementById('subcategoryPlaceholder');
    subcategoryList.innerHTML = "";
    subcategoryList.style.display = "inline";
    subcategoryPlaceholder.style.display = "none";

    console.log("Selected Subcategory" + selectedSubcategory);
    
    for (var i = 0; i < categories[selectedSubcategory].length; i++) {
        console.log(categories[selectedSubcategory][i].Title);
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        var chevronImage = document.createElement('img');
        subcategoryList.appendChild(listItem);
        listItem.appendChild(button);
        listItem.appendChild(chevronImage);
        chevronImage.className = "subcategoryChevron";
        chevronImage.src = "chevron.pngx";
        button.type = "button";
        button.innerHTML = categories[selectedSubcategory][i].Title;
        button.href = categories[selectedSubcategory][i].Link;
        button.onclick =  function(arg) {
            return function() {
                javascript:window.location.href = arg;
            }
        }(categories[selectedSubcategory][i].Link);
    }
}
// NEW BUTTON STATE CHANGING FUNCTION*****************************************
function switchCategoryHighlight(selectedButton) {
    console.log("calling switch category highlight");
    var buttonsToReset = document.getElementsByClassName('selectedCategory');
    for (i = 0; i < buttonsToReset.length; i++) {
        buttonsToReset[i].className = "";
    }
    selectedButton.className = "selectedCategory";
}
// END NEW BUTTON STATE CHANGING FUNCTION****************************************************
//END EA CUSTOM FUNCTIONS --------------------------------------------------------------

function tsResubmit(searchText) {
	$("sysparm_search").value = searchText;
	$("kb_view").submit();
}

function changeSort(value) {
	if (self.opener) {
		self.opener.eval("setKbSortOrder('"+value+"')");
	}
	gel("sysparm_order").value = value;
	$("kb_view").submit();
}

function setPageSize(pageSize) {
	_setUrl("sys_nav_count",pageSize);
}

function setStartRow(startRow) {
	_setUrl("sysparm_current_row",startRow);
}

function changeRowCount(element){
	setPageSize(element.value);
}

function changeRowCountFromMenu(value){
	setPageSize(value);
}

var timerHandle = null;
function gotoRow(pageSize,totalRows,element){
	if (timerHandle != null)
		clearTimeout ( timerHandle );
	timerHandle = setTimeout("_gotoRow("+pageSize+","+totalRows+",'"+element.id+"')",1000);
}

function _gotoRow(pageSize,totalRows,elementId){
	var startRow = document.getElementById(elementId).value;
	var pageStart = startRow;
	if (pageStart > totalRows)
		pageStart = totalRows - pageSize + 1;
	if (pageStart <= 0)
		pageStart = 1;
	setStartRow(pageStart);
}

function nextPage(pageSize,totalRows,startRow){
	var pageStart = startRow + pageSize;
	if (pageStart > totalRows)
		pageStart = totalRows - pageSize + 1;
	if (pageStart <= 0)
		pageStart = 1;
	setStartRow(pageStart);
}

function lastPage(pageSize,totalRows,startRow){
	var pageStart = totalRows - pageSize + 1;
	if (pageStart <= 0)
		pageStart = 1;
	setStartRow(pageStart);
}

function previousPage(pageSize,totalRows,startRow){
	var pageStart = startRow - pageSize;
	if (pageStart <= 0)
		pageStart = 1;
	setStartRow(pageStart);
}

function firstPage(pageSize,totalRows,startRow){
	setStartRow(1);
}

function _setUrl(key,value) {
	var url = _getUrlExcludingParam(key);
	if (url.hasParams)
		url.url += "&";
	else
		url.url += "?";
	url.url += key+'='+value;
	url.url += "&sysparm_rollbased="+roleBased;
	window.location.href = url.url;
	
}

function _getUrlExcludingParam(paramName) {
	var seperator = "";
	var hasParams = false;
	if (window.location.pathname.substring(0,1) != "/")
		seperator = "/";
	
	var baseURL = window.location.protocol + "//" + window.location.host + seperator + window.location.pathname;
	seperator = "?";
	var parts = window.location.href.replace(/[?&]+([^=&]+)=?([^&]*)/gi, function(full,key,value) {
		if ((key != paramName) && (key != "sysparm_rollbased")) {
			baseURL += seperator + key;
			if ((value != null) &&(value != ""))
				baseURL += "=" + value;
			seperator = "&";
			hasParams = true;
		}
	});
	return {
		url : baseURL,
		hasParams : hasParams
	};
}






// On Load calling the prototype event for observing the iframe loading
var actionName = null;
if($$("iframe").length > 0){
   $$("iframe")[0].observe("load", function(event){
      actionName = this.src;
      if(this.contentWindow.document.forms["back_form"] != undefined){
         this.contentWindow.document.forms["back_form"].action = actionName;
      }
   });
}

//Dropdown Menu Function

function dropDownMenu() {
   
   var dropdownLinks = $jUC(".dropdown-link");
   var dropdownWrapper = $jUC(this).next(".dropdown-wrapper");
   var dropdownSpacer = $jUC("#dropdown-spacer");
   var hasSubMenu = $jUC(this).next('.dropdown-wrapper').length;
   
   
   if (hasSubMenu > 0) {
      
      if (!($jUC(dropdownLinks).hasClass("selected"))) {
         
         $jUC(this).addClass("selected");
         var closeflag = $jUC(dropdownWrapper).find('.close').length;
         if (closeflag == 0) {
            $jUC(dropdownWrapper).append('<a class="close" href="javascript:void()">Close (X)</a>');
         }
         var dropdown_height = $jUC(dropdownWrapper).height();
         $jUC(dropdownSpacer).animate({
            height: dropdown_height
         }, "fast");
         
         
         $jUC(dropdownWrapper).slideDown("fast");
         
      } else if ($jUC(this).hasClass("selected")) {
         $jUC(this).removeClass("selected");
         var closeflag = $jUC(dropdownWrapper).find('.close').length;
         if (closeflag == 0) {
            $jUC(dropdownWrapper).append('<a class="close" href="javascript:void()">Close (X)</a>');
         }
         $jUC(dropdownSpacer).animate({
            height: "0"
         }, "fast");
         $jUC(dropdownWrapper).slideUp("fast");
      }
      //if another dropdown menu is open
      else if ($jUC(dropdownLinks).not(this).hasClass("selected")) {
         $jUC(dropdownLinks).removeClass("selected");
         $jUC(this).addClass("selected");
         var closeflag = $jUC(dropdownWrapper).find('.close').length;
         if (closeflag == 0) {
            $jUC(dropdownWrapper).append('<a class="close" href="javascript:void()">Close (X)</a>');
         }
         $jUC(".dropdown-wrapper").hide();
         $jUC(dropdownWrapper).show();
      }
      
      //don't follow the link
      
      return false;
   }
}

function highlightNav(sectionName) {
   var listClassName = "li.portaltab-" + sectionName;
   $jUC(listClassName).find("a").css("color", "#FFF100");
}
function setIframeSizeToContentHeight() {
   var frame = $jUC("table.ess_layout").find("iframe").get(0);
   var frameBodyHeight = $jUC(frame).contents().find("body").height();
   if(frameBodyHeight > $jUC(frame).height()) {
      $jUC(frame).css("min-height", frameBodyHeight + "px");
   }
   $jUC(frame).css("overflow", "auto");	
}
function resizeContainerHeight() {
   // code for setting background height for drop zone so that the background image spans fully on any page
   var heightToBeReduced = $jUC("#header").height() + $jUC("#topBar").height() + $jUC("#footer").height();
   var $windowHeight = $jUC(window).height();
   if($jUC("table.ess_layout").find("iframe").length) {
      
      var frame = $jUC("table.ess_layout").find("iframe").get(0);
      $jUC(frame).css("min-height",($jUC(window).height() - heightToBeReduced) + "px");
      window.setInterval(setIframeSizeToContentHeight, 500);
   } 
   else  {
	  var bannerImageHeight = $jUC(".billboardtile").length ? $jUC(".billboardtile").height() : 0
      $jUC("#main-content").css("min-height",($jUC(window).height() - heightToBeReduced - bannerImageHeight) + "px");// 350 is the height of the banner image
   }
}
/*
In Safari empty table cells without width are ignored. To add an appropriate width for left and right drop zones we need to calculate
the width of the window dynamically and reduce the fixed width of the main table cell.

 */

function resizeDropZoneTables() {
   var viewportWidth = $jUC(window).width();
   var widthForLeftAndRightCells = ($jUC(window).width() - 960)/2;
   if($jUC("div.cms_menu_vertical_section_container").length) {
      if(viewportWidth > 1500) {
         $jUC("#dropzone0").width(Math.floor(widthForLeftAndRightCells) + "px");
         $jUC("#dropzone2").width(Math.floor(widthForLeftAndRightCells) + "px");
         $jUC("div.cms_menu_vertical_section_container").css("left",Math.floor(widthForLeftAndRightCells -  245)); /* 240 is the width of the container and 5 px for padded space*/
      } else if (viewportWidth >= 1200 && viewportWidth <= 1500) {
         $jUC("#dropzone0").width("240px");
         $jUC("#dropzone2").width((viewportWidth - 1200) + "px");
         $jUC("div.cms_menu_vertical_section_container").css("left", "0px");
      } else {
         $jUC("#dropzone0").width("25%");
         $jUC("#dropzone1").width("75%").css("overflow", "auto");
         $jUC("div.cms_menu_vertical_section_container").css("left", "0px");
      }
   } else {
      $jUC("#dropzone0").width(Math.floor(widthForLeftAndRightCells) + "px");
      $jUC("#dropzone2").width(Math.floor(widthForLeftAndRightCells) + "px");
   }
}


function changeItemLinks(){
	var hrefLinks=  $jUC(".itemLinks");
	if(hrefLinks.length){
		for(var i=0; i< hrefLinks.length; i++){
			var str = $jUC(hrefLinks[i]).attr("href");
			var pos = str.lastIndexOf("/") + 1;
			var extractedString = str.substring(pos);
			var newURl =  "catalog_item.do?sysparm_content_url=" + extractedString;
			$jUC(hrefLinks[i]).attr("href",newURl )
			
		}
	}
}	

/* :::::::::::::::::::::::::::::::::::::::::::::::::::
WHEN DOM IS LOADED - Jquery
:::::::::::::::::::::::::::::::::::::::::::::::::::*/

(function ($jUC) {
   $jUC(function () {
      
      // code for navigational submenu drop down
      
      $jUC('#portal-header').append('<div id="dropdown-spacer"></div>');
      $jUC('#main-nav').children().find('a').addClass('dropdown-link');
      
      $jUC(document).on("click", ".dropdown-link", dropDownMenu);//on dropdown menu function
      
      $jUC(document).on("click", ".close",function () { //close menu
      $jUC('.selected').focus();
      $jUC(".dropdown-link").removeClass('selected');
      $jUC(this).parents(".dropdown-wrapper").slideUp("fast");
      $jUC("#dropdown-spacer").animate({
         height: ""
      }, "fast");
      
	  	  
      return false;
   });
   // code for resizing the background and center table cells
   // safari browser fix included
   $jUC(window).on("load resize",function(e){
      resizeContainerHeight();
      resizeDropZoneTables();
   });
   
   
   // Code for accordion on status secttion
   $jUC("div#accordion  h3.sectionTitle").click(function(event){
      var $currentSectionTitle = $jUC(this);
      $jUC("div.sectionBody").slideUp(100);
      $currentSectionTitle.next("div.sectionBody").slideToggle(300, function(){
         if(this.style.display === "none") {
            $currentSectionTitle.removeClass("accordion-arrow-right").addClass("accordion-arrow-down");
         } else {
            $currentSectionTitle.removeClass("accordion-arrow-down").addClass("accordion-arrow-right");
         }
      });
      
      $currentSectionTitle.siblings("h3.sectionTitle").removeClass("accordion-arrow-right").addClass("accordion-arrow-down");
   });
   if($jUC("div#accordion").size() > 0){
      $jUC("div#accordion  h3.sectionTitle").get(0).click();
   }
   
   // code for status page wherein menu lists needs to be positioned correctly
   
   
   // code for hightlighting left menu items in help page
   $jUC("a.cms_menu_vertical_item").click(function(event){
      var obj = this;
      $jUC(obj).css("font-weight", "bold");
      $jUC("a.cms_menu_vertical_item").not($jUC(obj)).css("font-weight", "normal");
   });
   $jUC("a.cms_menu_vertical_item").filter(":first").click();
   
   // code for highlighting menu items in header and footer
   
   var str = window.location.pathname;
   var fileNameStartingPoint = str.lastIndexOf("/");
   var fileName =  str.substring(fileNameStartingPoint+1);
   switch(fileName){
      case "catalog.do" : highlightNav("catalog");
      break;
      case "kb.do" : highlightNav("knowledge");
      break;
      case "help.do" : highlightNav("help");
      break;
      case "about.do" : highlightNav("about");
      break;
	  case "index.do" : highlightNav("home");
	  break;
      default: 
		   if(navTitle != null || navTitle != undefined){
		   highlightNav(navTitle);
		   } else  { 
		   highlightNav("home");
		   }	   
      break;
   }
   
   
   
   // code for cookie handling - splash intro
   // checks if the cookie is already set and if yes, it does not display the splash intro
   // number of expiration days has been set to 30.
	   
   if($jUC.getCookie && !($jUC.getCookie("splashIntroShown"))) {
      $jUC("#splashIntro").show();
      $jUC("#splashIntro button").on("click", function(event) {
         $jUC.setCookie("splashIntroShown", true, {days : 30});
         $jUC("#splashIntro").hide();
      });
   }
   // change item links in pages except for catalog item
   changeItemLinks();   
});
})($jUC);

