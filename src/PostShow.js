import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: {},
            users: [],
            comments: []
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

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            const posts = response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => {
            const comments = response.data
            this.setState({comments})
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    

    render() {
        return (
            <div>
                <h1> USER NAME - {this.state.users.name}</h1>
                <h2> TITLE - {this.state.posts.title}</h2>
                <h3> BODY - {this.state.posts.body} </h3><hr/>  
                <h2> COMMENTS </h2>
                <ul>
                    {
                        this.state.comments.map(comment => {
                            return <li key = {comment.id}> {comment.body}  </li>
                        })
                    }
                </ul>   
                <hr/>
                <h3><Link to={`/users/${this.state.posts.id}`}> More posts of author : {this.state.users.name} </Link></h3>       
            </div>
        )
    }
}

export default PostShow