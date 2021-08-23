import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import UserCard from '../UserCard/UserCard';
import { getUser } from './../../js/actions/userAction';
import './UserList.css'

const UserList = () => {
    const { users, loading } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    console.log(users)
    return (
        <div  >
            {
                (loading) ? (
                    <h1>Loading ...</h1>
                ) : (<div className="list">
                    {
                        users.map(user => <UserCard user={user} key={user._id} />)
                    }
                </div>)
            }
        </div>
    )
}

export default UserList
