var tempmindays = [];
for (i = 0; i < response.data.list.length; i += 8) {
    let tempminarray = []

    week.push(response.data.list[i]);
    for (x = 0; x < 8; x++) {
        tempminarray.push(response.data.list[x + i].main.temp - min);
    }
    mintempday = Math.min(tempminarray);
    tempmindays.push(mintempday)

}