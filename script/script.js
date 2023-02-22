
document.getElementById('show').addEventListener("submit", (e) => {
    e.preventDefault();
    let date = document.getElementById("birthdate").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById('result');
    let birthDate = new Date(date);
    if (today() < birthDate) {
        alert("Invalid date");
        result.innerHTML="";
    } else {
        switch (unit) {
            case "1":
                result.innerHTML = getDays(date) + " Days";
                break;
            case "2":
                result.innerHTML = getWeeks(date) + " Weeks";
                break;
            case "3":
                result.innerHTML = getMonths(date) + " Months";
                break;
            case "4":
                result.innerHTML = getYears(date) + " Years";
                break;
            case "5":
                result.innerHTML = getHours(date) + " Hours";
                break;
            case "6":
                result.innerHTML = getMinutes(date) + " Minutes";
                break;
            case "7":
                result.innerHTML = getSeconds(date) + "  Seconds";
                break;
            case "8":
                result.innerHTML = getMiliseconds(date) + "  Miliseconds";
                break;
            default:
                result.innerText = "Invalid Input";
                break;
        }
    }

});
const today = () => {
    return new Date();
}
const difference = (date) => {
    var birthdate = new Date(date);
    var difference = today().getTime() - birthdate.getTime();
    return difference;
}
const getMiliseconds = (date) => {
    return difference(date);
}
const getSeconds = (date) => {
    return Math.round(difference(date) / (1000));
}
const getMinutes = (date) => {
    return Math.round(difference(date) / (1000 * 60));
}
const getHours = (date) => {
    return Math.round(difference(date) / (1000 * 3600));
}
const getDays = (date) => {
    return Math.round(difference(date) / (1000 * 3600 * 24));
}
const getWeeks = (date) => {
    return Math.round(difference(date) / (1000 * 3600 * 24 * 7));
}
const getMonths = (date) => {
    return Math.round(difference(date) / (1000 * 3600 * 24 * 30));
}
const getYears = (date) => {
    return Math.round(difference(date) / (1000 * 3600 * 24 * 365));
}