// interface IData {
//     timezone: number;
// }

export function getLocalTime(timezone: number) {
    // let timezone = data.timezone;
    let tzInHours = timezone/3600;//-6
    let hoursInMoment = new Date().getHours();//15
    let hoursGlobal = new Date().getUTCHours();//10
    let GMT = hoursInMoment - hoursGlobal;//5
    let timeInThisLocation = hoursInMoment - (GMT - tzInHours);
    // console.log(timeInThisLocation);

    return timeInThisLocation;
}