
$('input[type="text"] ').keyup(function(){

    var that = this, $allListElements = $('ul > li');

   var $matchingListElements = $allListElements.filter(function(i, li){
       var listItemText = $(li).text().toUpperCase(), 
          searchText = that.value.toUpperCase();
       return ~listItemText.indexOf(searchText);
 });

   $allListElements.hide();
 $matchingListElements.show();

});






function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction2() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL1");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction3() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput3");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL2");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction4() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput4");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL4");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction5() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput5");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL5");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction6() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput6");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL6");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function myFunction6() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput6");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL6");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction7() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput7");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL7");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction8() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput8");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL8");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction9() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput9");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL9");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}