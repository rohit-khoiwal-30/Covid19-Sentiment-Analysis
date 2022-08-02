let ans;
let classes = {
    "0" : "Neutral",
    "1" : "Positive",
    "-1" : "Negative"
}
let probs = {}
$(document).ready(function()
{
    $("#predict").click(function(){
        var inputText = $("#inputTweet").val()
        if (inputText == "") return;
        fetch("http://127.0.0.1:5000/test", {
            method :"POST",
            body: inputText
        }).then(result => result.json()).then((data) => {
            ans = data.class;
            probs["0"] = data.probs[0][0];
            probs["1"] = data.probs[0][1];
            probs["2"] = data.probs[0][2];
            $("#answerClass").html("Sentiment of Tweet is : <br>" + classes[ans]);
            $("#predProbs").hide(); 
            $("#predSentiment").show();
        })
    });

    $("#predictedClass").on("click",function(){
        $("#predProbs").hide(); 
        $("#predSentiment").show();
    })

    $("#predictedProbs").on('click',function()
    {
        $("#predSentiment").hide();
        $("#answerPos").html("Prob of Positive : <br>" + probs["2"].toFixed(2))
        $("#answerNeutral").html("Prob of Neutral  : <br>" + probs["1"].toFixed(2))
        $("#answerNeg").html("Prob of Negative : <br>" + probs["0"].toFixed(2))
        $("#predProbs").show();  
    })
})