function convert() {
    const input = document.getElementById('1').value;
const words = input.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
output = words.join(" ");
document.getElementById('1').value = output ;
}