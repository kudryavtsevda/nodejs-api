import { getToken } from '../../src/authorization/models/tokens';
import { validateToken, getAccessToken } from '../../src/authorization/services/tokenService';

describe('Token service', () => {
  test('should return proper token', () => {
    const token = getToken({
      accessToken: getAccessToken({ login: 'admin' }).accessToken,
    });

    const decodedToken = validateToken(token);

    expect(decodedToken.login).toBe('admin');
  });

  test('should failed', async () => {
    const token = getToken({
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjYxNDI3MzIxLCJleHAiOjE2NjE0MzA5MjF9.hJAcA9_4yOPuLNJb16ofiQagDCq5Om-pauHLMmvqvnM',
    });

    expect(() => validateToken(token)).toThrow();
  });
});
