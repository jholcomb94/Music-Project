import axios from 'axios'

class AlbumDataService{
    retrieveAllAlbums(){
        return axios.get('http://localhost:8080/retrieveAllAlbums');
    }
    retrieveAlbum(id){
        return axios.get('http://localhost:8080/retrieveAlbum/${id}');
    }
    updateAlbum(album){
        return axios.put('http://localhost:8080/updateAlbum',album);
    }
    addAlbum(album){
        return axios.post('http://localhost:8080/addAlbum',album)
    }
    deleteAlbum(id){
        return axios.delete('http://localhost:8080/deleteAlbum/${id}');
    }

}
export default new AlbumDataService();