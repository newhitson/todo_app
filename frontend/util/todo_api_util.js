export const apiRequest = () => (
   $.ajax({ method: 'GET', url: '/api/todos' })
);

window.apiRequest = apiRequest;
