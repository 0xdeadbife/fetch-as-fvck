// Sample JavaScript file with various API calls for testing

// Native fetch calls
fetch('/api/users');
fetch('https://api.example.com/data');
fetch(`/api/posts/${postId}`);

// Axios calls
import axios from 'axios';
axios.get('/api/users');
axios.post('https://api.example.com/users', userData);
axios.put(`/api/users/${userId}`, updateData);

// jQuery AJAX
$.ajax({
  url: '/api/login',
  method: 'POST',
  data: credentials
});

$.get('/api/profile');
$.post('/api/logout');

// XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/settings');
xhr.send();

// Dynamic URL construction
const baseUrl = 'https://api.service.com';
const version = 'v1';
const endpoint = baseUrl + '/api/' + version + '/users';

// Template literals with variables
const userId = 123;
const userEndpoint = `${baseUrl}/users/${userId}`;
const apiCall = `https://api.example.com/v2/posts/${postId}/comments`;

// React hooks (if using custom hooks)
const { data } = useFetch('/api/dashboard');
const { mutate } = useMutation('/api/users');

// Vue.js HTTP calls
this.$http.get('/api/notifications');

// Angular HTTP calls
this.http.get('/api/reports').subscribe();

// Superagent
superagent
  .get('/api/analytics')
  .end(callback);

// More complex constructions
const API_BASE = 'https://jsonplaceholder.typicode.com';
const USERS_ENDPOINT = API_BASE + '/users';
const POSTS_ENDPOINT = `${API_BASE}/posts`;

// GraphQL
fetch('/graphql', {
  method: 'POST',
  body: JSON.stringify({ query: '...' })
});

// RESTful patterns
fetch('/rest/v1/customers');
fetch('/api/v2/orders/123/items');

// File endpoints
fetch('/uploads/documents.json');
fetch('/data/config.xml');

// Non-API calls that should be ignored
console.log('debugging');
window.location.href = '#section1';
const title = 'My App';
const number = 42;