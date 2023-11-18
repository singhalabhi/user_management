import React, { useState, useEffect } from 'react'
import Navbar from "./Navbar"
export default function Home() {

    const [searchname, setSearchName] = useState("")
    const [searchEmail, setSearchEmail] = useState("")
    const [searchPhone, setSearchPhone] = useState("")
    const [userData, setUserData] = useState([])

    const loadData = async () => {
        let dt = await fetch("http://localhost:5000/api/userData", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        });
        let pt = await dt.json();
        setUserData(pt[0])
        console.log(pt[0])

    }
    useEffect(() => {
        loadData();
    }, [])
    const handleOnChangeName = (ev) => {
        setSearchName(ev.target.value);
    }
    const handleOnChangeEmail = (ev) => {
        setSearchEmail(ev.target.value);
    }
    const handleOnChangePhone = (ev) => {
        setSearchPhone(ev.target.value);
    }
    return (
        <div>
            <Navbar />

            <h2 style={{textAlign:'center'}} className='m-2 p-2'>User Details</h2>

            <div>
            <div class="d-flex flex-row">
  <div class="p-2">  <div>Search by Name</div><input type="text" onChange={handleOnChangeName}/></div>
  <div class="p-2">  <div>Search by email</div><input type="text" onChange={handleOnChangeEmail}/></div>
  <div class="p-2"><div>Search by phone</div><input type="text" onChange={handleOnChangePhone}/></div>
</div>
              
              
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Creation Date</th>
                            <th scope="col"> Report  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData
                        .filter((i)=>i.name.toLowerCase().includes(searchname.toLowerCase()) && i.email.toLowerCase().includes(searchEmail.toLowerCase()) && i.phone.toLowerCase().includes(searchPhone.toLowerCase()))
                        .map((el, index) => {
                            return (
                                
                                <tr key={el._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.phone}</td>
                                    <td>{el.date}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                            User Report
                                        </button>


                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel"> Report</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sed aperiam obcaecati similique inventore dolorum adipisci quae facilis iusto. Modi ab tempore illo ut dolore iste. Blanditiis quas numquam quaerat voluptatem? Quod inventore possimus ex, enim delectus voluptate consequatur, perferendis accusamus explicabo odio ut omnis, earum architecto nisi aliquid expedita!
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>



            </div>



        </div>
    )
}
