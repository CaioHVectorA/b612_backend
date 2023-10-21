import request from 'supertest'
import { app } from '../../src/app'
import { describe, expect, test } from '@jest/globals';
import { avisos } from '../../src/utils/mockup';

describe('As rotas de aviso devem funcionar corretamente', () => {
    test('Deve criar avisos com sucesso 1', async () => {
        const response = await request(app).post('/aviso/').send(avisos[0])
        expect(response.statusCode).toBe(200)
    })
    test('Deve criar avisos com sucesso 2', async () => {
        const response = await request(app).post('/aviso/').send(avisos[1])
        expect(response.statusCode).toBe(200)
    })
    test('Deve criar avisos com sucesso 3', async () => {
        const response = await request(app).post('/aviso/').send(avisos[2])
        expect(response.statusCode).toBe(200)
    })
    test('Deve receber os avisos com sucesso', async () => {
        const response = await request(app).get('/aviso/')
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveLength(3)
    })
    test(`Deve deletar todos os avisos`, async () => {
        const response = await request(app).delete('/aviso/deleteall/')
        expect(response.statusCode).toBe(200)
    })
})