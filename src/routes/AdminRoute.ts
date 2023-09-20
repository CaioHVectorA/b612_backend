import { Router } from 'express'
import AdminLoginController from '../controllers/AdminLogin/adminLoginController'
import CreateAdminController from '../controllers/createAdmin/createAdminController'

export const adminRoutes = Router()
const loginUseCase = new AdminLoginController()
const createUseCase = new CreateAdminController()
adminRoutes.post('/', createUseCase.handle)
adminRoutes.post('/login',loginUseCase.handle)