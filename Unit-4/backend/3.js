const path=require('path')
const sp=path.join(__dirname,"../")
const expr=require('express')
const app=expr()
app.use(expr.static(sp,{index:'3.html'}))
app.listen(9090)
