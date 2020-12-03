

function sendPostBack(){
   var clickid = readCookie('rubyhill_click');
   if(clickid){
       var postbackImg = document.createElement("IMG");
       var postbackUrl = "https://track1.menolparkreport.com/click.php?cnv_id=";
       postbackUrl += clickid;
       postbackUrl += "&payout=" + {{ total_price | money_without_currency | times: 0.35 }};
       postbackImg.src = postbackUrl;
   }
}

if(window.readCookie){
    sendPostBack();
}else{
    function readCookie(key) {
        var nameEQ = key + "=";
        var ca = document.cookie.split(';');
        for (var i = 0, max = ca.length; i < max; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    sendPostBack();
}
