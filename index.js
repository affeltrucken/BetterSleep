
function intToTime(time) {
    if (time < 10) {
        time = "0" + time
    }

    return time
}

function sleepNow() {

    if (time_already_checked) {
        return;
    }

    time_already_checked = true;

    var d = new Date();
    var current_hour = d.getHours();
    var current_minute = d.getMinutes();

    let min_cycles = 1;
    let max_cycles = 6;

    current_minute += 15;

    checkMinutes(current_minute, current_hour)
    h2 = document.getElementById("vakna").style.display = "block";

    for (i = min_cycles; i <= max_cycles; i++) {
        
        time = (i * 90 / 60)

        let hours = ~~time;
        let minutes = time % 1 * 60;
        let wake_up_hour = current_hour + hours;
        let wake_up_minute = current_minute + minutes;


        checkHour(wake_up_hour)

        wake_up_time = intToTime(wake_up_minute)
        wake_up_time = wake_up_hour + ":" + wake_up_minute

        wake_up_p = document.createElement("time");
        wake_up_p.innerText = wake_up_time;

        document.getElementById("time-wrapper").appendChild(wake_up_p)
        wake_up_p.classList.add("round")
    }
}


function createSelection(element, start, stop) {
    selection_menu = document.getElementById(element)

    for (i = start; i <= stop; i++) {
        selection = document.createElement("option")

        i = intToTime(i)
        selection.value = i
        selection.innerText = i
        selection_menu.appendChild(selection)
    }
}


function checkMinutes(minutes, hour) {
    if (minutes >= 60) {
        hour++;
        minutes = minutes - 60;
    }
}

function checkHour(hour) {
    if (hour >= 24) {
        hour -= 24
    } 
}

time_already_checked = false

sleepNow()
createSelection("minute-selection", 0, 59)
createSelection("hour-selection", 0, 23)
