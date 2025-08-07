// Test cases for semantic pattern analysis

// Case 1: fetch() calls - should be detected by context
fetch('/api/users');
fetch('/v1/posts/123');

// Case 2: axios calls - should be detected by context
axios.get('/api/auth/login');
axios.post('/rest/data');

// Case 3: Variable assignments with API-related names
const apiEndpoint = '/graphql/users';
let userUrl = '/api/profile';
const baseApiUrl = '/api/v2';

// Case 4: Object properties with url/endpoint keys
const config = {
    url: '/api/settings',
    endpoint: '/auth/token',
    path: '/users/me'
};

// Case 5: Template literals in fetch context
const userId = 123;
fetch(`/api/users/${userId}/profile`);
axios.get(`/v1/posts/${userId}`);

// Case 6: String concatenation that should be detected
const basePath = '/api/';
const endpoint = basePath + 'users';

// Case 7: Mixed context - some should be detected, others not
const regularString = '/home/user/file.txt';  // Should NOT be detected (file path)
const apiPath = '/api/data';  // Should be detected by structure
fetch('/static/image.png');  // Should be detected by fetch context

// Case 8: jQuery AJAX
$.get('/api/comments');
$.ajax({url: '/rest/posts'});

// Case 9: XHR usage
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/notifications');

// Case 10: Non-endpoint strings that should be filtered out
const title = 'Hello World';
const number = '12345';
const email = 'user@example.com';