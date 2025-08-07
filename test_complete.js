// Comprehensive test for semantic endpoint detection

// 1. Direct fetch calls with various patterns
fetch('/api/users/123');
fetch('/v1/posts');  
fetch(`/api/comments/${id}`);

// 2. Axios calls
axios.get('/rest/data');
axios.post('/api/auth/login');
axios.put(`/api/users/${userId}/update`);

// 3. jQuery AJAX
$.get('/api/notifications');
$.post('/auth/logout');
$.ajax({
    url: '/api/dashboard',
    method: 'GET'
});

// 4. XMLHttpRequest  
var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/profile/settings');

// 5. Variable assignments with API context
const API_BASE = '/api/v2';
let userEndpoint = '/users/profile';
const authUrl = '/oauth/token';

// 6. Object configurations
const config = {
    baseURL: 'https://api.example.com',
    endpoints: {
        users: '/api/users',
        posts: '/api/posts'  
    }
};

// 7. React hooks (if detected)
const { data } = useFetch('/api/user/me');
const { mutate } = useMutation('/api/posts/create');

// 8. Template literals with complex expressions
fetch(`${baseUrl}/api/users/${userId}/posts?limit=${limit}`);

// 9. String concatenation
const endpoint = '/api/' + 'users/' + userId;

// 10. Non-endpoints that should be filtered out
const filePath = '/home/user/documents/file.txt';
const imagePath = '/static/images/logo.png';
const title = 'User Profile Page';
const count = 42;
const email = 'user@example.com';
const jsUrl = 'javascript:void(0)';

// 11. Edge cases
fetch('/'); // Root path - should be detected in fetch context
const emptyString = '';
const singleChar = 'a';

// 12. Modern frameworks patterns
// Vue.js
this.$http.get('/api/data');

// Angular
this.http.get('/api/services');

// Superagent
request.get('/api/status').end(callback);