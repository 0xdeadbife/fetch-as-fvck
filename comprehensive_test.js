// Comprehensive test with various endpoint patterns

// Direct fetch calls
fetch('/api/users');
fetch('/api/v1/posts');
fetch('/rest/customers/123');
fetch('https://api.github.com/user');
fetch('/graphql', { method: 'POST' });

// Axios patterns
axios.get('/api/profile');
axios.post('/api/auth/login', credentials);
axios({
  method: 'get',
  url: '/api/orders',
  headers: { 'Authorization': 'Bearer token' }
});

// jQuery patterns
$.ajax({
  url: '/api/notifications',
  type: 'GET'
});

$.get('/api/settings');
$.post('/api/logout', { token: userToken });

// XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('POST', '/api/upload');

// Dynamic construction
const API_BASE = 'https://api.example.com';
const API_VERSION = 'v2';
const endpoint = `${API_BASE}/${API_VERSION}/data`;
const userUrl = API_BASE + '/users/' + userId;

// Complex template literals
const resourceType = 'posts';
const resourceId = 123;
const commentsUrl = `https://api.service.com/${resourceType}/${resourceId}/comments`;

// Variable usage in calls
fetch(endpoint);
axios.get(userUrl);
$.ajax({ url: commentsUrl });

// React hooks and framework calls
const { data } = useFetch('/api/dashboard');
const { mutate } = useQuery('/api/user/profile');

// Angular HTTP
this.http.get('/api/reports').subscribe();
this.httpClient.post('/api/analytics', data);

// Vue.js
this.$http.get('/api/stats');

// Superagent
superagent
  .get('/api/metrics')
  .query({ start: startDate })
  .end(callback);

// Next.js API routes
fetch('/api/auth/session');
fetch('/api/users/[id]');

// More complex patterns
const config = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  endpoints: {
    users: '/users',
    posts: '/posts',
    comments: '/comments'
  }
};

// WebSocket (should not be detected as HTTP API)
const ws = new WebSocket('wss://api.example.com/socket');

// Non-API strings (should be filtered out)
const title = "Welcome to My App";
const message = "Hello World";
const path = "/home/user/documents";
const email = "user@example.com";

// File paths that might be endpoints
fetch('/uploads/data.json');
fetch('/static/config.xml');
fetch('/files/report.pdf');

// REST-style endpoints
fetch('/api/v1/projects/123/tasks');
fetch('/rest/customers/456/orders/789');

// GraphQL variations
fetch('/graphql', { body: JSON.stringify({ query: 'query { user { id } }' }) });
fetch('/v1/graphql');

// Third-party service endpoints
fetch('https://maps.googleapis.com/maps/api/geocode/json');
fetch('https://api.stripe.com/v1/charges');
fetch('https://api.twitter.com/2/tweets');

// Conditional endpoints
const isDev = process.env.NODE_ENV === 'development';
const apiUrl = isDev ? 'http://localhost:3000/api' : 'https://prod.api.com/api';
fetch(apiUrl + '/status');