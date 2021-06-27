import slug from 'slug';
import { url as baseURL } from './config';
import base64 from 'base-64';

export default function User(name, email, website) {
  return { name, email, website };
}

export function createURL(name) {
  return `${baseURL}/users/${slug(name)}`;
}

export function gravatar(email) {
  const hash = base64.encode(email);
  return `https://www.gravatar.com/avatar/${hash}`;
}
