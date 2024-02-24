const Fc = {
    team1:"Real madrid",
    team2: "Barcelona",
    team3: "Man utd"
}

for (const key in Fc) {
    console.log(key,'=>',Fc[key])
}

const teams = ["fcb","rm","manu"]
for (const key in teams) {
    console.log(key,'::',teams[key])
}