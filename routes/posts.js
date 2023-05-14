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
router.post('/', checkAuth, createPost)

//Get All Posts
//http://localhost:3002/api/posts
router.get('/', getAll)

//Get Post By Id
//http://localhost:3002/api/posts/:id
router.get('/:id', getById)

//Get My Posts
//http://localhost:3002/api/posts/user/me
router.get('/user/me', checkAuth, getMyPosts)

//Delete Post By Id
//http://localhost:3002/api/posts/:id
router.delete('/:id', checkAuth, deletePost)

//Update Post
//http://localhost:3002/api/posts/:id
router.put('/:id', checkAuth, updatePost)

//Get Post Comments
//http://localhost:3002/api/posts/comments/:id
router.get('/comments/:id', getPostCommets)

export default router