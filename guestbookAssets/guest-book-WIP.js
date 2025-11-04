window.onload = fetchGuestBook_Entries();

function fetchGuestBook_Entries() {

    // Fetching Spreadsheet JSON Data	
    fetch(
        `https://opensheet.elk.sh/${Google_Form_ID}/${Google_Form_Name}`
    )
        .then((res) => res.json())
        .then((data) => {

            // reversing JSON data to make things easier
            let sortedInput = (data.reverse())

            /// Adding all entries to all entry section

            data.forEach((row) => {

                // Sanitize Data
                let SantizeResponses = encodeHTML(row.Guestbook_Entry)

                let SantizeName = encodeHTML(row.Name)

                // Split timestamp data
                var splitTime = row.Timestamp.split(' ')[0];
                var splitTime_1 = row.Timestamp.split(' ').pop();

                // Work in Progress - Convert to 24 Hour
                let ConvertedTime = tConvert(splitTime_1)
                
                document.getElementById("json").innerHTML += `
            <article>
                    <div class="post-header">
                        ${SantizeName}
                        <span class="timestamp">${splitTime}, ${ConvertedTime}</span>
                    </div>
                    ${SantizeResponses}
                </article>`

            });
        });


}


// On Submit - Validating Text Before Sending For Profanities
var Gform = document.getElementById("gform")
Gform.addEventListener('submit', (e) => {
    validateRecaptcha();
})

// Validate Recaptcha
function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    
    if (response.length === 0) {
        // if Captcha not passed - do no nothing. 
        return false;
    } else {
        // if Captcha Passed - Validate Text For Swearing Etc.
        document.gform.submit();

    }
    // Timeout is needed for form to properly submit with animation

    setTimeout(function () {


        // Hide the form values 
        Gform.setAttribute("style", "display:none;");
        var subscribeForm = document.getElementById("SendForm")


        // Show the user message their entry has been added
        subscribeForm.innerHTML = `	<a class="close" href="#">&times;</a>
<h1 style="text-align: center;
    margin-top: 2em;">Your Guestbook Entry Has Added! It will appear shortly!</h1> `

    }, 500);
    return true;
}

// Convert 24 hour timestamp to 12 hour format - Work in Progress

// https://stackoverflow.com/questions/13898423/javascript-convert-24-hour-time-of-day-string-to-12-hour-time-with-am-pm-and-no

function tConvert(time) {

    return time; // return adjusted time or original string
}

function encodeHTML(sanizitedInput) {
    return sanizitedInput.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
