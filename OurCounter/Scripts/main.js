var clock;

$(document).ready(function () {
    var mainClock;
    // Grab the current date
    var currentDate = new Date();

    // Set some date in the past. In this case, it's always been since Jan 1
    var pastDate = new Date(2013, 8, 18, 20, 0, 0);

    // Calculate the difference in seconds between the future and current date
    var meetDate = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;

    mainClock = $('#mainClock').FlipClock(meetDate, {
        clockFace: 'DailyCounter',
        autoStart: false,
        language: 'russian',
        callbacks: {
            stop: function () {
                $('.mainClockMessage').html('');
            }
        }
    });

    mainClock.setCountdown();
    mainClock.start();

    var distributionEndDate = new Date(2019, 7, 15, 20, 0, 0);
    var distributionDate = distributionEndDate.getTime() / 1000 - currentDate.getTime() / 1000;

    var distributionClock = $('#distributionClock').FlipClock(distributionDate, {
        clockFace: 'DailyCounter',
        autoStart: false,
        language: 'russian',
        callbacks: {
            stop: function () {
                $('.distributionClockMessage').html('');
            }
        }
    });

    distributionClock.setCountdown();
    distributionClock.start();

    $("#ourDate").change(function () {
        var oneDay = 24 * 60 * 60 * 1000;
        var secondDate = new Date($(this).val());
        var diffDays = Math.round((secondDate.getTime() - pastDate.getTime()) / (oneDay));
        $("#resultDays").text(diffDays);
    });

    $("#dayText").change(function () {
        var dayToTrack = $("#dayText").val();
        var futureDate = addDays(pastDate, dayToTrack);
        $("#calculatedDate").val(futureDate.toISOString().substring(0, 10));
    });

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + parseInt(days));
        return result;
    }
});