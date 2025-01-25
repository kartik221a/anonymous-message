import mongoose from 'mongoose'

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "",{})

        console.log("DELETE - this is the db ---->", db)

        connection.isConnected = db.connections[0].readyState

        console.log("DELETE - this is connection ---->", db.connections)

        console.log("Connected to database successfully")

    } catch (error) {
        console.log("database connection failed", error)
        process.exit(1)
    }

}

export default dbConnect