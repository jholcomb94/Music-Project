import axios from 'axios'

class SongDataService{
    retrieveAllSongs(){
        return axios.get(`http://localhost:8080/retrieveAllSongs`);
    }
    retrieveSong(id){
        return axios.get(`http://localhost:8080/retrieveSong/${id}`);
    }
    updateSong(song){
        return axios.put(`http://localhost:8080/updateSong`,song);
    }
    addSong(song){
        return axios.post(`http://localhost:8080/addSong`,song)
    }
    deleteSong(id){
        return axios.delete(`http://localhost:8080/deleteSong/${id}`);
    }

}
export default new SongDataService();