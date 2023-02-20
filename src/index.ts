import { AppDataSource } from "./data-source"
import * as express from "express"
import { Users } from "./entity/User"
import { Profile } from "./entity/Profiles"


const app = express()
const poort = 3000

AppDataSource.initialize().then(async () => {
  
    const profile = new Profile()
    profile.gender = "male"
    profile.photo = "me.jpg"
    await AppDataSource.manager.save(profile)



    console.log("Inserting a new user into the database...")
    const user = new Users()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    user.email= 'hassanadewunmi@gmail.com'
    user.bod
    user.isActive = true
    user.password = 'hass203'
    user.createdAt

    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Users)
    console.log("Loaded users: ", users)

    app.use("/", (req, res) => {})

    app.listen(3000, () => console.log("App running at port http://localhost:3000"))
}).catch(error => console.log(error))
