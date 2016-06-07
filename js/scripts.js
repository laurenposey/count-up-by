var num =[];
var arrayLength = num.length;
function countBy (numEnd, numCount) {
  for (var i = numCount; i <= numEnd; i += numCount) {
    var num1 = numEnd;
    var num2 = numCount;
    if (numCount <= 0 || numEnd <= 0) {
      alert('That\'s not a positive number');
      break;
    }
    else if ((typeOf numCount) != 'number' || (typeOf numEnd) != 'number') {
      alert('That\'s not a number');
      break;
    }
    else if (num2 > num1) {
      alert('Count by number is larger than the count to number');
      break;
    }
    else {
      alert(n);
    }
    };
  };

countBy (); //should alert 'That's not a number'
countBy ('hello', 9) //should alert 'That's not a number'
countBy (23, -2); //should alert 'That's not a positive number'
countBy (23, 70); //should alert 'Count by number is larger than the count to number'
