const expr=require('express')
const app=expr()
// app.use(expr.static(__dirname))
app.use(expr.static(__dirname,{index:'2.html'}))
app.listen(9090)