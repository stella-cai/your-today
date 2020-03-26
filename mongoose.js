const connectionString = 'mongodb+srv://chenpan:sD71fAu72N67Vm80@chenpan-8zw68.azure.mongodb.net/today?authSource=admin&replicaSet=chenpan-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true'
const mongoose = require('mongoose')
mongoose.connect(connectionString)

module.exports = mongoose