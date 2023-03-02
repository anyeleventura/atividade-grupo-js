let sunday = ['Frango', 'Suíno', 'Peixe'];
let monday = ['Frango', 'Suíno', 'Peixe'];
let tuesday = ['Frango', 'Suíno', 'Peixe'];
let wednesday = ['Frango ', 'Suíno', 'Peixe'];
let thursday = ['Frango', 'Suíno', 'Peixe'];
let friday = ['Frango ao molho', 'Bife de suíno', 'Vatapá de peixe'];
let saturday = ['Frango', 'Suíno', 'Peixe'];

let showsunday = sunday.values();
let showmonday = monday.values();
let showtuesday = tuesday.values();
let showwednesday = wednesday.values();
let showthursday = thursday.values();
let showfriday = friday.values();
let showsaturday = saturday.values();

function showSunday() {
    event.preventDefault();
    for(let elements of showsunday){
        list.innerHTML += `<li>${elements}</li>`}
}
function showMonday() {
    event.preventDefault();
    for(let elements of showmonday){
        list.innerHTML += `<li>${elements}</li>`}
}
function showTuesday() {
    event.preventDefault();
    for(let elements of showtuesday){
        list.innerHTML += `<li>${elements}</li>`}
}
function showWednesday() {
    event.preventDefault();
    for(let elements of showwednesday){
        list.innerHTML += `<li>${elements}</li>`}
}
function showThursday() {
    event.preventDefault();
    for(let elements of showthursday){
        list.innerHTML += `<li>${elements}</li>`}
}
function showFriday() {
    event.preventDefault();
    for(let elements of showfriday){
        list.innerHTML += `<li>${elements}</li>`}
}
function showSaturday() {
    event.preventDefault();
    for(let elements of showsaturday){
        list.innerHTML += `<li>${elements}</li>`}
}