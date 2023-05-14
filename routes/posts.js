import {Router} from 'express'
import { 
    createPost, 
    getAll, 
    getById, 
    getMyPosts, 
    deletePost,
    updatePost,
    getPostCommets 
} from '../controllers/posts.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

//Create Post
//http://localhost:3002/api/posts
router.post('/api/posts', checkAuth, createPost)

//Get All Posts
//http://localhost:3002/api/posts
router.get('/api/posts', getAll)

//Get Post By Id
//http://localhost:3002/api/posts/:id
router.get('/api/posts/:id', getById)

//Get My Posts
//http://localhost:3002/api/posts/user/me
router.get('/api/posts/user/me', checkAuth, getMyPosts)

//Delete Post By Id
//http://localhost:3002/api/posts/:id
router.delete('/api/posts/:id', checkAuth, deletePost)

//Update Post
//http://localhost:3002/api/posts/:id
router.put('/api/posts/:id', checkAuth, updatePost)

//Get Post Comments
//http://localhost:3002/api/posts/comments/:id
router.get('/api/posts/comments/:id', getPostCommets)

export default router
