import React from 'react'

const Dashboard = ({userobj}) => {


    console.log(userobj)

    return ( <div className="container text-center mt-5">
        <p>This is {userobj.name}</p>
        <table>
            <thead>
                <th>Destination</th>
                <th>Cost</th>
                <th>Date</th>
            </thead>
            <tbody>
                {userobj.bookings.map( booking => <tr id={booking._id}>
                    <td>{booking.destination}</td>
                    <td>{booking.cost}€</td>
                    <td>{booking.createdAt}</td>
                    </tr>)}
            </tbody>

        </table>
    </div>);
}
 
export default Dashboard;