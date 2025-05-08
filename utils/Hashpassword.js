import bcrypt from "bcrypt"

const HashPassword = async (password) =>{
	try {
		return await bcrypt.hash(password, 10);
	}
	catch (err){
		console.log(err)
		return null
	}
}

export {HashPassword}