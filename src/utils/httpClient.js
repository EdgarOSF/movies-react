const API = 'https://api.themoviedb.org/3';

export function get(path) {
  return fetch( API + path, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWM3NTc5YjU5ZGNkMjE0ZTJiYWVmZTQ4YjVkZTViYSIsInN1YiI6IjYwY2JhNjNmODhiMTQ4MDA3OGRhYTA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PA7awvsY5kFT6n6n9Qq4lwJ-XiZVTsQU49uk5mYDNXs',
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((result) => result.json())    
}
