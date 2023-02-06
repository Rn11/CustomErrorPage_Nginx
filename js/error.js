window.addEventListener("DOMContentLoaded", function() {
// code to animate numeric http status counter
function animateNumeric(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// code to animate http status message
  function animateString(obj, start, end, duration) {
    let startTimestamp = null;
    let currValue;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      currValue = Math.floor(progress * (end - start) + start);
      // check if current iterator has code else pick random
      if (httpStatusCodeMessage.has(currValue)) {
        obj.innerHTML = httpStatusCodeMessage.get(currValue);
      } else {
        // search for valid key by spraying range
        var isResponsecodeValid = false;
        while (!isResponsecodeValid) {
          let randomKey = Math.floor(Math.random() * (511 - 400 + 1) + 400);
          if(httpStatusCodeMessage.has(randomKey)) {
            isResponsecodeValid = true;
            obj.innerHTML = httpStatusCodeMessage.get(randomKey);
          }
        };
      }
      if (progress < 1) {
        setTimeout(() => {
        window.requestAnimationFrame(step);
        }, 45);
      }
    };
    window.requestAnimationFrame(step);
    obj.innerHTML = httpStatusCodeMessage.get(end);
  }

 const httpStatusCodeMessage = new Map();

 httpStatusCodeMessage.set(400, 'Bad Request');
 httpStatusCodeMessage.set(401, 'Unauthorized');
 httpStatusCodeMessage.set(402, 'Payment Required');
 httpStatusCodeMessage.set(403, 'Forbidden');
 httpStatusCodeMessage.set(404, 'Not Found', );
 httpStatusCodeMessage.set(405, 'Method Not Allowed');
 httpStatusCodeMessage.set(406, 'Not Acceptable');
 httpStatusCodeMessage.set(407, 'Proxy Authentication Required');
 httpStatusCodeMessage.set(408, 'Request Timeout');
 httpStatusCodeMessage.set(409, 'Conflict');
 httpStatusCodeMessage.set(410, 'Gone');
 httpStatusCodeMessage.set(411, 'Length Required' );
 httpStatusCodeMessage.set(412, 'Precondition Failed');
 httpStatusCodeMessage.set(413, 'Payload Too Large');
 httpStatusCodeMessage.set(414, 'URI Too Long');
 httpStatusCodeMessage.set(415, 'Unsupported Media Type');
 httpStatusCodeMessage.set(416, 'Range Not Satisfiable');
 httpStatusCodeMessage.set(417, 'Expectation Failed');
 httpStatusCodeMessage.set(418, 'I\'m a teapot');
 httpStatusCodeMessage.set(421, 'Misdirected Request');
 httpStatusCodeMessage.set(422, 'Unprocessable Entity');
 httpStatusCodeMessage.set(423, 'Locked');
 httpStatusCodeMessage.set(424, 'Failed Dependency');
 httpStatusCodeMessage.set(425, 'Too Early');
 httpStatusCodeMessage.set(426, 'Upgrade Required');
 httpStatusCodeMessage.set(428, 'Precondition Required');
 httpStatusCodeMessage.set(429, 'Too Many Requests');
 httpStatusCodeMessage.set(431, 'Request Header Fields Too Large');
 httpStatusCodeMessage.set(451, 'Unavailable For Legal Reasons');
 httpStatusCodeMessage.set(500, 'Internal Server Error');
 httpStatusCodeMessage.set(501, 'Not Implemented');
 httpStatusCodeMessage.set(502, 'Bad Gateway');
 httpStatusCodeMessage.set(503, 'Service Unavailable');
 httpStatusCodeMessage.set(504, 'Gateway Timeout');
 httpStatusCodeMessage.set(505, 'HTTP Version Not Supported');
 httpStatusCodeMessage.set(506, 'Variant Also Negotiates');
 httpStatusCodeMessage.set(507, 'Insufficient Storage');
 httpStatusCodeMessage.set(508, 'Loop Detected');
 httpStatusCodeMessage.set(510, 'Not Extended');
 httpStatusCodeMessage.set(511, 'Network Authentication Required');


  // body
  const numObj = document.querySelector(".number");
  const stringObj = document.querySelector(".statusmessage");
  
  var statuscode = 500//document.querySelector(".hiddenstatuscode").innerHTML; //replace 500 with document.querySelector(".hiddenstatuscode").innerHTML

  animateNumeric(numObj, 0, statuscode, 2700);
  animateString(stringObj, 0, statuscode, 2700);
}, false);



//countUp(startNr);