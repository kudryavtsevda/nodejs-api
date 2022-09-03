import { login, renew } from '../../src/authorization/authController';
import { getRefreshToken } from '../../src/authorization/services/tokenService';
import { createRequest, createResponse } from 'node-mocks-http';

describe('User ', () => {
  test('is logged successfully', async () => {
    const getAccount = async () => ({
      login: 'admin',
      password:
        'fe0c891b348621251e46dfde05c633a2184db69326a4095ce53455d57d7d98859480670f7a5eb2143065c05664a0ab01cbaf9db8ed3475fd622245bdf817fb2b',
      salt: '7030c42c8c9a35f56393f8e4d13a1181',
    });
    const req = createRequest({
      body: {
        login: 'admin',
        password: 'pass@word1',
      },
    });
    const res = createResponse();

    await login(getAccount)(req, res);

    expect(res.statusCode).toBe(200);
  });

  test('failed to login', async () => {
    const getAccount = async () => ({
      login: 'admin',
      password:
        'fe0c891b348621251e46dfde05c633a2184db69326a4095ce53455d57d7d98859480670f7a5eb2143065c05664a0ab01cbaf9db8ed3475fd622245bdf817fb2b',
      salt: '7030c42c8c9a35f56393f8e4d13a1181',
    });
    const req = createRequest({
      body: {
        login: 'admin',
        password: 'pass@word',
      },
    });
    const res = createResponse();

    await login(getAccount)(req, res);

    expect(res.statusCode).toBe(401);
  });

  test('renewed token successfully', () => {
    const req = createRequest({
      body: getRefreshToken({ login: 'admin' }),
    });
    const res = createResponse();

    renew(req, res);

    expect(res.statusCode).toBe(200);
  });

  test('failed to renew because of expired token', () => {
    const req = createRequest({
      body: {
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjU2NjIwNTAwLCJleHAiOjE2NTcyMjUzMDB9.3QReObQ0CAHZBYP1xjmm0UhXvvpEfAVs55EP15z6b4w',
      },
    });
    const res = createResponse();

    renew(req, res);

    expect(res.statusCode).toBe(401);
  });

  test('failed to renew because of inconsistent token', () => {
    const req = createRequest({
      body: {
        refreshToken:
          'eyJhGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjU2NjIwNTAwLCJleHAiOjE2NTcyMjUzMDB9.3QReObQ0CAHZBYP1xjmm0UhXvvpEfAVs55EP15z6b4w',
      },
    });
    const res = createResponse();

    renew(req, res);

    expect(res.statusCode).toBe(401);
  });
});
