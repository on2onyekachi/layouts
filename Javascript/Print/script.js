const details = {
    name: "kachi",
    heigth: "176.6cm",
    country: "Nigeria"
}
let data = []
for(let detail in details){
    alert(`${detail} : ${details[detail]}`)
    data.push(detail)
}
let output = `<p>${data[0]}: <strong>${details.name}</strong>, ${data[1]}: <strong>${details.heigth}</strong>, ${data[2]}: <strong>${details.country}</strong></p>`;
document.body.innerHTML = output
