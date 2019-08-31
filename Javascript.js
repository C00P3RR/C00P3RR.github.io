function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1Na44BhYCXnVx9D9J3COsU-y5NE5Hmk47KQzEZ88RVaM',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
