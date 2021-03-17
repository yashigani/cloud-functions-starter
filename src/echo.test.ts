import {
  getServer,
  SignatureType,
} from '@google-cloud/functions-framework/build/src/invoker'
import supertest from 'supertest'
import {echo} from './echo'

describe('cloud function', () => {
  const app = getServer(echo(), SignatureType.HTTP)

  it('should return 200', async done => {
    supertest(app)
      .get('/echo')
      .expect(200)
      .expect('Hello, Cloud Functions', done)

    supertest(app)
      .post('/echo')
      .send({user: 'John'})
      .expect(200)
      .expect('Hello, John', done)
  })
})
