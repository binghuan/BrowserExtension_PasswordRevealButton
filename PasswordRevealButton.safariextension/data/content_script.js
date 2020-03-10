var DBG = false;

function isInTargetArea(e, inputPos) {
    //console.log('inputFieldPos right:' + inputPos.right + ', bottom:' + inputPos.bottom);

    var offX = (e.offsetX || e.clientX - $(e.target).offset().left);
    var offY = (e.offsetY || e.clientY - $(e.target).offset().top);
    var eventPos = {
        x: offX,
        y: offY
    };

    var width;
    if (inputPos.width == undefined) {
        width = inputPos.right - inputPos.left;
    } else {
        width = inputPos.width;
    }

    return ((width - eventPos.x) <= 20);
}

var pwdField = $('input[type=password]');

if (DBG) console.log("#1: ", pwdField.length);

var modifiedBackgroundImg = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAEJGlDQ1BJQ0MgUHJvZmlsZQAAOBGFVd9v21QUPolvUqQWPyBYR4eKxa9VU1u5GxqtxgZJk6XtShal6dgqJOQ6N4mpGwfb6baqT3uBNwb8AUDZAw9IPCENBmJ72fbAtElThyqqSUh76MQPISbtBVXhu3ZiJ1PEXPX6yznfOec7517bRD1fabWaGVWIlquunc8klZOnFpSeTYrSs9RLA9Sr6U4tkcvNEi7BFffO6+EdigjL7ZHu/k72I796i9zRiSJPwG4VHX0Z+AxRzNRrtksUvwf7+Gm3BtzzHPDTNgQCqwKXfZwSeNHHJz1OIT8JjtAq6xWtCLwGPLzYZi+3YV8DGMiT4VVuG7oiZpGzrZJhcs/hL49xtzH/Dy6bdfTsXYNY+5yluWO4D4neK/ZUvok/17X0HPBLsF+vuUlhfwX4j/rSfAJ4H1H0qZJ9dN7nR19frRTeBt4Fe9FwpwtN+2p1MXscGLHR9SXrmMgjONd1ZxKzpBeA71b4tNhj6JGoyFNp4GHgwUp9qplfmnFW5oTdy7NamcwCI49kv6fN5IAHgD+0rbyoBc3SOjczohbyS1drbq6pQdqumllRC/0ymTtej8gpbbuVwpQfyw66dqEZyxZKxtHpJn+tZnpnEdrYBbueF9qQn93S7HQGGHnYP7w6L+YGHNtd1FJitqPAR+hERCNOFi1i1alKO6RQnjKUxL1GNjwlMsiEhcPLYTEiT9ISbN15OY/jx4SMshe9LaJRpTvHr3C/ybFYP1PZAfwfYrPsMBtnE6SwN9ib7AhLwTrBDgUKcm06FSrTfSj187xPdVQWOk5Q8vxAfSiIUc7Z7xr6zY/+hpqwSyv0I0/QMTRb7RMgBxNodTfSPqdraz/sDjzKBrv4zu2+a2t0/HHzjd2Lbcc2sG7GtsL42K+xLfxtUgI7YHqKlqHK8HbCCXgjHT1cAdMlDetv4FnQ2lLasaOl6vmB0CMmwT/IPszSueHQqv6i/qluqF+oF9TfO2qEGTumJH0qfSv9KH0nfS/9TIp0Wboi/SRdlb6RLgU5u++9nyXYe69fYRPdil1o1WufNSdTTsp75BfllPy8/LI8G7AUuV8ek6fkvfDsCfbNDP0dvRh0CrNqTbV7LfEEGDQPJQadBtfGVMWEq3QWWdufk6ZSNsjG2PQjp3ZcnOWWing6noonSInvi0/Ex+IzAreevPhe+CawpgP1/pMTMDo64G0sTCXIM+KdOnFWRfQKdJvQzV1+Bt8OokmrdtY2yhVX2a+qrykJfMq4Ml3VR4cVzTQVz+UoNne4vcKLoyS+gyKO6EHe+75Fdt0Mbe5bRIf/wjvrVmhbqBN97RD1vxrahvBOfOYzoosH9bq94uejSOQGkVM6sN/7HelL4t10t9F4gPdVzydEOx83Gv+uNxo7XyL/FtFl8z9ZAHF4bBsrEwAAAAlwSFlzAAAXEgAAFxIBZ5/SUgAAArlJREFUOBF9UztoU2EU/u8jafMqSdNGA2JKCqHQQkww2qaCgzgVHJRmdHNQwQ4OTi6dXCo62UHs4iC0iIKDFBxcEoKBIC0EhehgSmyCFfN+3Jvr993m1tLBA9895z+v//znnCuJfyRDNIYQs7Oziw6H47KiKDOSJPnpZhjGr8FgUGi32x93d3fT1IGkIQbWQSwvLyubm5s6FdFo9LrT6Xxgs9kuAALJqD4iJBX9fp/INhqNRzs7O2+GRgVcp7cpgMuJRGLd7XbfQlVC0zQDyfrQg0n0YYW8FMywq6oqdF0X9Xp9PZfL3aYdhMjDZwoke+X1em/iSaSeLMsqoEBWUI2EYIlnEqvGuQsuu1yuxMTERGRvb+81c5nvicVi98bHx58iWOf1iFFbrdYfYAvPelcsFr/DWZqenp7yeDzX0NsbaMsYkmosnxcdHBzcyefzz1ihOxwOP0e//EjYRrLRWq2WyWazS/v7+xuo2ohEIpeCweAZDONToVB4USqV3vr9/vNIfJYxSGhHHWHoN6S5ubmrgUBgG0pBoKLf6XQ6iot+oA1PUMkKh4MAcxio+jF6dh/2qWQy+Rk9H0NSQaCAKwpumoHzPPr0rdvt9hHwEoateDx+1+fzrQ77pcGHrZBR1QKq/lkulz/AfkrX9NO9Xq/Y6XRawDZ7qAKjAIktaAL6/MJ8xu1yX8S0uziPAKQupjvSbDbTmUxmEWcb4ADMHQTvMJkGNIDj5JEl2ctnguhjkTrU+aBwAi2Aq3VE/DtYJTlh7ht4HS34iidCFD0kGRCUqYPtC+QWdNYeW/ESBZZBZ0LnXwMuqtXqGgakYSAO9o6gjEXuVSqVNfqkUinGc9mt+MM9pPEE8WYjFAotTU5Ortrtdv7PBppfwDAeYj3ew276nIj775EBJAemeg5/BFfJGp5lMx2Of/4Ck01VdCPg/qoAAAAASUVORK5CYII=)";
if (($(pwdField).css("background-image") !== "none") &&
    ($(pwdField).css("background-image") != undefined) &&
    ($(pwdField).css("background-image") !== "")) {
    var originalBackgroundImg = $(pwdField).css("background-image");
    modifiedBackgroundImg = modifiedBackgroundImg + ", " + originalBackgroundImg;

    if (DBG) console.log("#1.1: ", pwdField.length);
}

if (DBG) console.log("#2");

$(pwdField).css("background-image", modifiedBackgroundImg)
    //.css("padding-right", "18px")
    .css("background-attachment", "scroll")
    .css("background-position", "100% 50%")
    .css("background-repeat", "no-repeat");

if (DBG) console.log("#3");

$(pwdField).on('mousemove', function(e) {
    //console.log(this.getBoundingClientRect());
    var inputFieldPos = this.getBoundingClientRect();
    if (isInTargetArea(e, inputFieldPos) === true) {
        $(this).css('cursor', 'pointer');
    } else {
        $(this).css('cursor', '');
    }
});

if (DBG) console.log("#4");

var backupValue = "";
var backupPlacehoder = [];

for (var i = 0; i < pwdField.length; i++) {
    backupPlacehoder.push($(pwdField)[i].getAttribute("placeholder"));
    if (DBG) console.log("backup placeholder: ", backupPlacehoder[i])
}

var USE_SOLUTION_1 = false;

$(pwdField).on("mousedown", function(e) { // just bind the first input field
    var inputFieldPos = this.getBoundingClientRect();
    if (isInTargetArea(e, inputFieldPos) === true) {
        if (DBG) console.log('hit in area !!: ' + e.target.value, $(this).val());
        backupValue = $(this).val();
        if ((e.target.value.length === 0) ||
            (e.target.value === "")) {
            return;
        }

        if (USE_SOLUTION_1 === true) {
            //console.log(e.target.value.length, e.target.value);
            $(this).attr("placeholder", $(this).val());
            $(this).val("");
        } else {
            $(this).attr("type", "text");
        }
    }
});

$(pwdField).on("mouseup", function(e) { // just bind the first input field
    var inputFieldPos = this.getBoundingClientRect();
    if (isInTargetArea(e, inputFieldPos) === true) {
        if (DBG) console.log('hit in area !!: ' + e.target.value, $(this).val());

        if (USE_SOLUTION_1 === true) {
            $(this).attr("placeholder", "");
            $(this).val(backupValue);
        } else {
            $(this).attr("type", "password");
        }
    }
});

if (USE_SOLUTION_1 === true) {

    $(pwdField).on('input', function(e) {
        if (DBG) console.log("input ...", e.target.value.length)
        if ((e.target.value.length === 0) ||
            e.target.value === "") {
            for (var j = 0; j < $(pwdField).length; j++) {
                if ($(pwdField)[j] == e.target) {
                    $(this).attr("placeholder", backupPlacehoder[j]);
                }
            }
        }

    });

}
