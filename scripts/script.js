var str = '';

var i = 0;
while(i < 5) {
  // J
  var j = 0;
  while(j < 5) {
    if (j == 4 || i == 4 || (i >= 3 && i <= 4) && j == 0) {
      str += '*&nbsp;'
    } else {
      str += '&nbsp;&nbsp;'
    }
    j++;
  }

  // A
  str += '&nbsp;&nbsp;';
  j = 0;
  while(j < 5) {
    if (j == 0 || j == 4 || i == 0 || i == 3) {
      str += '*&nbsp;'
    } else {
      str += '&nbsp;&nbsp;'
    }
    j++;
  }

  // Y
  str += '&nbsp;&nbsp;';
  j = 0;
  while(j < 5) {
    if (((i >= 0 && i <= 2) && (i == j)) || ((i >= 0 && i <= 2) && ((i + j) == 4)) || ((i >= 2 && i <= 4) && (j == 2))) {
      str += '*&nbsp;'
    } else {
      str += '&nbsp;&nbsp;'
    }
    j++;
  }

  // M
  str += '&nbsp;&nbsp;';
  j = 0;
  while(j < 5) {
    if (((i >= 0 && i <= 2) && (i == j)) || ((i >= 0 && i <= 2) && ((i + j) == 4)) || (j == 0) || (j == 4)) {
      str += '*&nbsp;'
    } else {
      str += '&nbsp;&nbsp;'
    }
    j++;
  }

  // I
  str += '&nbsp;&nbsp;';
  j = 0;
  while(j < 5) {
    if ((i == 0) || (i == 4) || (j == 2)) {
      str += '*&nbsp;'
    } else {
      str += '&nbsp;&nbsp;'
    }
    j++;
  }

  // N
  str += '&nbsp;&nbsp;';
  j = 0;
  while(j < 5) {
    if ((j == 0) || (j == 4) || (i == j)) {
      str += '*&nbsp;'
    } else {
      str += '&nbsp;&nbsp;'
    }
    j++;
  }

  str += '<br>';
  i++;
}

document.body.innerHTML = str;