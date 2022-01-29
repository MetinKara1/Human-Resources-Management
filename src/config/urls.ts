const root = process.env.NODE_ENV === 'development' ? 'https://jsonplaceholder.typicode.com' : 'https://jsonplaceholder.typicode.com';// https://localhost:44331/

const candidates = root.concat('/');

export const get_candidates = candidates.concat('users');