$(".EXLSummary").find(".EXLSummaryFields").each(function () {
    var almaId = $(".EXLResultSnippet", this).attr("id").replace("text you want to replace", "new text"); // this grabs the Alma ID and cleans it - edit as needed
    var shelfmark = $(".EXLResultFourthLine", this).text().replace("text you want to replace", "new text"); // this grabs the shelfmark IF DISPLAYED - edit as needed
    console.log(shelfmark, almaId);
});