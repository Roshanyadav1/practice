import api from './interceptor';

export function PostData(url, data) {
    return new Promise((resolve, reject) => {
        api.post(url, data)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
}

