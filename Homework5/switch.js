
const validateValueAndLabel = (value, label) => {
    let valid = false;
    switch(label){
        case 'hour':
        case 'minute':
        case 'day':
        case 'second':
            valid = value == 1 ? true : false;
            break;
        case 'hours':
        case 'minutes':
        case 'days':
        case 'seconds':
            valid = value > 1 ? true : false;
            break;
        default:
            break;
    }
    return valid;
}

const convertToSeconds = (value, label ) => {
    let seconds = 0;
    switch(label){
        case 'hour':
        case 'hours':
            seconds =  value * 60 * 60;
            break;
        case 'minute':
        case 'minutes':
            seconds =  value * 60;
            break;
        case 'day':
        case 'days':
            seconds =  value * 60 * 60 * 24;
            break;
        default:
            seconds = value
            break;
    }
    return seconds;
}

const convertSecondsToHumanReadable = (seconds) => {
    let s = 0;
    let m = 0;
    let h = 0;
    let d = 0;
    d = seconds / ( 24 * 60 * 60);
    h = seconds / ( 60 * 60);
    m = seconds / 60;
    if(Number.isInteger(d) && d > 0){
        return [d, d > 1 ? "days" : "day"];
    } else if (Number.isInteger(h) && h > 0) {
        return [h, h > 1 ? "hours" : "hour"];
    } else if (Number.isInteger(m) && m > 0) {
        return [m, m > 1 ? "minutes" : "minute"];
    } else {
        return [s, s > 1 ? "seconds" : "second"];
    }
}

const timeAdder = (value1,label1,value2,label2) => {
    let validate1 = validateValueAndLabel(value1, label1);
    let validate2 = validateValueAndLabel(value2, label2);
    console.log(validate1, validate2);
    if( validate1 && validate2) {
        totalSeconds = convertToSeconds(value1,label1) + convertToSeconds(value2,label2);
        console.log(convertSecondsToHumanReadable(totalSeconds));
    } else {
        console.log("Please enter correct details, make sure you follow singular and plural correctly for labels ( hours, hours)")
    }
}

timeAdder(20,'hours',4,'hours');
timeAdder(1,'hour',4,'hours');
timeAdder(2,'hours',5,'minutes');
timeAdder(20,'days',4,'hours');
timeAdder(1,'hour',4,'minutes');