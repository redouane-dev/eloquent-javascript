import ordinal from "ordinal";
import {days, months} from "date-names";

export function formatDateEcma (date, format) {
    return format.replace (/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        else if (tag == "M") return date.getMonth();
        else if (tag == "MMMM") return months[date.getMonth()];
        else if (tag == "D") return date.getDate();
        else if (tag == "Do") return ordinal(date.getDate());
        else if (tag == "dddd") return days[date.getDate()];
    });
}