export const sendToken = (res, user, statusCode, message) => {
    const token = user.getJWTToken()
    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 60 * 1000)
    }
    const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        userid: user.userid,
        pickups: user.pickups,
        type: user.type
    }
    res.status(statusCode).cookie("token", token, options).json({ success: true, message, user: userData })
}