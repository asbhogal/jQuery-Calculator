$(document).ready(function() {
    var thisValue = 0;
    var valueOne = 0;
    var valueTwo = 0;

    $(".x1").click(function(event) {
        $(".symble").css({"pointer-events":"auto"});
        if($(".x1").hasClass("first-active")){
            thisValue = $(this).text();
            $(".valueOne").append(thisValue);
            valueOne = $(".valueOne").text();
        } else if($(".x1").hasClass("second-active")){
            thisValue = $(this).text();
            $(".valueTwo").append(thisValue);
            valueTwo = $(".valueOne").text();
        }
    })
});

$(".symble").click(function() {
    sy
})