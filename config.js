module.exports = {
    port: process.env.PORT || 3333,
    db: process.env.MONGODB || 'mongodb://localhost:27017/tasks'
}