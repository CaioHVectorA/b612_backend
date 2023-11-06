import { Router } from 'express'
import AdminLoginController from '../controllers/AdminLogin/adminLoginController'
import CreateAdminController from '../controllers/createAdmin/createAdminController'
import LoginGoogleController from '../controllers/LoginGoogle/LoginGoogleController'

export const adminRoutes = Router()
const loginController = new AdminLoginController()
const createController = new CreateAdminController()
const googleController = new LoginGoogleController()
// BASE: /admin
adminRoutes.post('/', createController.handle)
adminRoutes.post('/login',loginController.handle)
adminRoutes.post('/google', googleController.handle)