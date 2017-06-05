var tabsList = [
        "Map",
        "Spots",
        "Chats",
        "Messages",
        "Profile"
];
var activeTab = "Map";

function initApplication() {
    console.log( "Init starts ... " );

    // PhoneGap specific. When device is ready!!!
    // TBD !!!
    document.addEventListener( "deviceready", this.onDeviceReady, false );
    
    $(document).on("pagecreate", "#ViewPage", function() {
        console.log("**** Page Create ***");

        setupNavbar();
        
        // Listen for tabs tapping
        $("#tab_bar a").on("tap", function() {

            console.log( "Tap tab: " + $(this).text());

            activatePage( $(this) );

        });

        activatePage( $("[data-role=navbar] ul").children().first());

    });

}

    

function setupNavbar( activateTab ) {
  
    var aEl = $("[data-role=navbar] ul").children().first();
    
    for ( i = 0; i < tabsList.length;i++ ) {
//        aEl.text( tabsList[ i ] );
        aEl = aEl.next();
    }
    
    
    
    
}

var mapWasRead = false;
function activatePage( clickedTab ) {
	console.log( "Activated tab No.: " + clickedTab.attr( "href" ));

	$("[data-role=main]").children().each( function() {
        $( this ).hide();
    });

    switch ( clickedTab.attr( "href" )) {
        case "#mapview":
            if ( mapWasRead ) {
                $( "#mapview" ).show();
            } else {
                $( "#mapview" ).show( mapManipulator.showMap());
                mapWasRead = true;
            }
            break;
        case "#spotsview":
            $( "#spotsview" ).show();
            break;
        case "#commentsview":
            $( "#commentsview" ).show();
            break;
        case "#messagesview":
            $( "#messagesview" ).show();
            break;
        case "#profileview":
            $( "#profileview" ).show();
            break;
        default:
            console.log( "Wrong tab name specified!" );
          break;
	}
	
}


function onDeviceReady() {
	console.log( "onDeviceReady ... " );
}

