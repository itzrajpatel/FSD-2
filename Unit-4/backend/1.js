const path=require('path')
const sp=path.join(__dirname,"../frontend")
const expr=require('express')
const app=expr()
app.use(expr.static(sp))
app.listen(9090)
