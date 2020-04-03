import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            posts : []
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const users = response.data
            this.setState({users})
        })
        .catch((err)=>{
            console.log(err)
        })
        
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            const posts = response.data
            this.setState({posts})  
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render() {
        return (
            <div>
                <h1> USER NAME - {this.state.users.name} </h1>
                <h2> Posts Written By User </h2>
                <ul>
                    {
                        this.state.posts.map(post => {
                            return <li key = {post.id}> <Link to = {`/posts/${this.state.users.id}`}>{post.title}</Link> </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserShow