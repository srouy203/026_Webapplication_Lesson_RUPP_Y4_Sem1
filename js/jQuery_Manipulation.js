$(function(){
    $("#butSet").click(function(){
        $("#divStatus").html("<h1 id='status'>status</h1>");
        $("#status").text("Set Status");
        $("#status").css("textAlign","center");
        $("#status").text($(this).attr("value"))
    });
});