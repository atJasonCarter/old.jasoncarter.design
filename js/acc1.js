
document.addEventListener("DOMContentLoaded", function(event) { 


var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName("panel");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

});




document.addEventListener("DOMContentLoaded", function(event) { 


    var acc2 = document.getElementsByClassName("accordion2");
    var panel2 = document.getElementsByClassName("panel2");
    
    for (var i = 0; i < acc2.length; i++) {
        acc2[i].onclick = function() {
            var setClasses = !this.classList.contains('active');
            setClass(acc2, 'active', 'remove');
            setClass(panel2, 'show', 'remove');
    
            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }
    
    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }
    
    });