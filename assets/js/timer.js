// Creates variables.

var buttonArray = new Map();
var ansArr = new Map();
ansArr.set("q1", "2");
ansArr.set("q2", "0");
ansArr.set("q3", "0");
ansArr.set("q4", "0");
ansArr.set("q5", "2");
ansArr.set("q6", "0");
ansArr.set("q7", "0");

var Timer = {};
Timer = ({
    startTimer: function () {
        // Set the date we're counting down to
        var countDownSeconds = 120;

// Update the count down every 1 second
        var x = setInterval(function () {
            countDownSeconds--;
            // Output the result in an element with id="demo"
            document.getElementById("timer").innerHTML = "Times Remaining: " + countDownSeconds + "s ";

            // If the count down is over, write some text
            if (countDownSeconds < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
                $("#evalQuiz").click();
            }
        }, 1000);
    },


    initBindData: function () {
        var cl = "click";

        $("#startQuiz").bind(cl, this.startQuiz);
        $("input").bind(cl, this.inputClick);
        $("#evalQuiz").bind(cl, this.evalQuiz);
        this.startTimer();

    },

    removeBinding: function () {
        var cl = "click";
        $("#startQuiz").unbind(cl, this.startQuiz);
        $("#evalQuiz").unbind(cl, this.evalQuiz);
        $("input").unbind(cl, this.inputClick);
    },
    startQuiz: function (event) {
        window.location.href = "Question.html";

    },
    evalQuiz: function (event) {
        console.log("tesitng");
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;
        if (buttonArray.size < 8) {
            unanswered = 7 - buttonArray.size;
            for (var [key, value] of buttonArray) {
                if (ansArr.get(key) === value)
                    correct++;
                else
                    incorrect++;
            }
        }
        $("#gg").hide();
        $("#lay").show();
        var finalOut = "<h1>HTML QUIZ!!!</h1>\n" +
            "    <p> All Done!!!</p>\n" +
            "    <p>Correct Answers: " + correct + " </p>\n" +
            "    <p>Incorrect Answers: " + incorrect + " </p>\n" +
            "    <p>Unanswered: " + unanswered + " </p>";

        $("#lay").html(finalOut);


    },
    inputClick: function (event) {
        var the_value = event.target.value;
        var button_id = event.target.name;
        buttonArray.set(button_id, the_value);

    }
});


$(document).ready(function () {
    Timer.initBindData();
    $("#lay1").show();
    $("#lay").hide();
});

