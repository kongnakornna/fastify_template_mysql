export class _publicfunction {
  passwordValidator(inputData: any) { 
        let Return_Data:any= passwordValidator(inputData);
      return Return_Data;
  } 
  generatePassword(inputData: any) { 
      let Return_Data:any= generatePassword(inputData);
    return Return_Data;
  } 
  getRandomString(inputData: any) { 
      let Return_Data:any= getRandomString(inputData);
    return Return_Data;
  } 
  getRandomint(inputData: any) { 
    if (inputData == null) {let inputData:number = 6; }
      let Return_Data:any= getRandomint(inputData);
    return Return_Data;
  } 
  toThaiDate(inputData: any) { 
      let Return_Data:any= toThaiDate(inputData);
    return Return_Data;
  } 
  toEnDate(inputData: any) { 
      let Return_Data:any= toEnDate(inputData);
    return Return_Data;
  } 
  typeofdata(input: any) {   
        const datachecktype = typeof (input); 
              console.log('input ',input);
              console.log('type of ',datachecktype); 
        return datachecktype
  } 
  timeConverter(inputData: any) { 
      let Return_Data:any= timeConverter(inputData);
    return Return_Data;
  } 
  throwIfInvalid(inputData: any) { 
      let Return_Data:any= throwIfInvalid(inputData);
    return Return_Data;
  } 
  getRandomsrtsmall(inputData: any) { 
      let Return_Data:any= getRandomsrtsmall(inputData);
    return Return_Data;
  } 
  getRandomsrtbig(inputData: any) { 
      let Return_Data:any= getRandomsrtbig(inputData);
    return Return_Data;
  }  
}
function passwordValidator(inputtxt: any) { 
    var paswd :any= "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    if(inputtxt.match(paswd)){  
        console.log('Your validate password  Correct, try another...:'+inputtxt);
        return true;
    }else{  
            console.log('You validate password Wrong...:'+inputtxt);
        return false;
    }
}  
function generatePassword(passwordLength: any) {
      var numberChars = "0123456789";
      var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowerChars = "abcdefghijklmnopqrstuvwxyz";
      var vaChars = "!@#$%^&*";
      var allChars = numberChars + upperChars + lowerChars+ vaChars;
      var randPasswordArray = Array(passwordLength);
      randPasswordArray[0] = numberChars;
      randPasswordArray[1] = upperChars;
      randPasswordArray[2] = lowerChars;
      randPasswordArray = randPasswordArray.fill(allChars, 3);
      return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}
function shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}
function getRandomString(length: any) {
    var randomChars: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    var randomChars2: any =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result: any =  ''
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return result
}  
function getRandomint(length: any) { 
  var randomChars: any =  '0123456789';
  var result: any =  ''
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
  }
  return result
}
function toThaiDate(date: any) { 
	  let monthNames = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]; 
      let year = date.getFullYear() + 543;
      let month = monthNames[date.getMonth()];
      let numOfDay = date.getDate();
      let hour = date.getHours().toString().padStart(2, "0");
      let minutes = date.getMinutes().toString().padStart(2, "0");
      let second = date.getSeconds().toString().padStart(2, "0");
    return `${numOfDay} ${month} ${year} ` +`${hour}:${minutes}:${second} น.`;
}
function toEnDate(date: any) { 
		let monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]; 
		let monthNameslong = ["January", "February", "March.", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
		let year = date.getFullYear()+ 0;
		let month = monthNameslong[date.getMonth()];
		let numOfDay = date.getDate();
		let hour = date.getHours().toString().padStart(2, "0");
		let minutes = date.getMinutes().toString().padStart(2, "0");
		let second = date.getSeconds().toString().padStart(2, "0");
    return `${numOfDay} ${month} ${year} ` +`${hour}:${minutes}:${second}`;
}
function timeConverter(UNIX_timestamp:any){
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
}  
function getRandomsrtsmall(length: any) { 
    var randomChars: any =  'abcdefghijklmnopqrstuvwxyz';
    var result: any =  ''
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return result
}
function getRandomsrtbig(length: any) { 
    var randomChars: any =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result: any =  ''
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return result
}  
function throwIfInvalid(value: any) {
      const max : Number = 1000000;
      const min : Number = 1;
      const values: Number =value.length;
      if(values < min || values > max){ 
            var rts = {
                        response: { 
                          message: 'Value must be between '+min+' and '+max,
                          message_th: 'ค่าต้องอยู่ระหว่าง น้อยสุด ' + min + '  หรือค่ามากสุด ' + max,
                          status: '400',
                          time_ms: null,
                        },
                        data: 0,
                    };
            } else {
                    var rts = {
                      response: { 
                          message: 'ok',
                          message_th: 'ok',
                          status: '200',
                          time_ms: null, 
                      },
                      data: 1,
                  };
            }
      return rts;
}