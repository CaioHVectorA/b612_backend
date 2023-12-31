import request from 'supertest'
import { app } from '../../src/app'
import { describe, expect, test } from '@jest/globals';
describe('Deve converter o excel para JSON e responder na API', () => {
    test('1001', async () => {
        const response = await request(app).get('/horario/1001')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('1002', async () => {
        const response = await request(app).get('/horario/1002')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('1003', async () => {
        const response = await request(app).get('/horario/1003')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('1004', async () => {
        const response = await request(app).get('/horario/1004')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('2001', async () => {
        const response = await request(app).get('/horario/2001')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('2002', async () => {
        const response = await request(app).get('/horario/2002')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('2003', async () => {
        const response = await request(app).get('/horario/2003')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('2004', async () => {
        const response = await request(app).get('/horario/2004')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('3001', async () => {
        const response = await request(app).get('/horario/3001')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('3002', async () => {
        const response = await request(app).get('/horario/3002')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('3003', async () => {
        const response = await request(app).get('/horario/3003')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('3004', async () => {
        const response = await request(app).get('/horario/3004')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    })
    afterAll(done => {
        done()
    })
})