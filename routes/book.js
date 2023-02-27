const { Booking } = require('../model/booking')
const { User } = require('../model/users')

exports.getBookings = async (req, res, next) => {
    try {
        const bookings = await Bookings.find({}, { _id: 0, __v: 0 }).populate('createdBy', '-id -__v -password')
        return res.status(200).json({
            success: true,
            count: bookings.length,
            data: bookings
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addBooking = async (req, res, next) => {
    const { currentlocation, destination, distance, cost, paymethod } = req.body;

    try {
        const booking = new Booking({
            currentlocation,
            destination,
            distance,
            cost,
            paymethod
        })

        const result = await booking.save();
        const createdBy = await User.findById(req.userId);

        createdBy.bookings.push(result)
        createdBy.save();

        if (result) {
            res.status(200).json({
                success: true,
                message: "Booking created",
                booking: result,
                createdBy: {
                    _id: createdBy._id, name: createdBy.email
                }
            })
        }

    } catch (err) {
        console.log(err)
        next(err.message)
    }
}