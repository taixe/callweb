jQuery(document).ready(function($){
  // $('head').append('<link rel="stylesheet" type="text/css" media="screen" href="https://ctynhanhoa.vfone.vn/plugin/font-awesome/css/all.min.css" />');
  var _host = window.location.host;
  var el = document.getElementsByClassName("myBtn");
  $(document).on('click',".vf-btn-call",function(){
    if(appid_vf){
      var url = "https://ctynhanhoa.vfone.vn/callnew.php?appIds=holvas59856254acla&appid="+appid_vf+"&host="+_host+"&version=0.1.8&dev=hoangthiep&nhanhoa";
      var name= "Gọi miễn phí";
      var width  = 375;
     var height = 550;
     var left   = 460;
     var top    = 100;
     var params = 'width='+width+', height='+height;
     params += ', top='+top+', left='+left;
     params += ', directories=no';
     params += ', location=no';
     params += ', menubar=no';
     params += ', resizable=no';
     params += ', scrollbars=no';
     params += ', status=no';
     params += ', toolbar=no';
      var newWin  = window.open(url, name, params);
      if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
      { 
          //POPUP BLOCKED
      }
    }else{
      $('#vfone_call').html("ID ứng dụng không hợp lệ. Vui lòng khai báo lại.");
      return false;
    }
  });
});
function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];

      // split our query string into its component parts
      var arr = queryString.split('&');

      for (var i = 0; i < arr.length; i++) {
        // separate the keys and the values
        var a = arr[i].split('=');

        // set parameter name and value (use 'true' if empty)
        var paramName = a[0];
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

        // (optional) keep case consistent
        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

        // if the paramName ends with square brackets, e.g. colors[] or colors[2]
        if (paramName.match(/\[(\d+)?\]$/)) {

          // create key if it doesn't exist
          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];

          // if it's an indexed array e.g. colors[2]
          if (paramName.match(/\[\d+\]$/)) {
            // get the index value and add the entry at the appropriate position
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            // otherwise add the value to the end of the array
            obj[key].push(paramValue);
          }
        } else {
          // we're dealing with a string
          if (!obj[paramName]) {
            // if it doesn't exist, create property
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            // if property does exist and it's a string, convert it to an array
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            // otherwise add the property
            obj[paramName].push(paramValue);
          }
        }
      }
    }

    return obj;
}