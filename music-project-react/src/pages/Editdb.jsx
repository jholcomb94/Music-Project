import React, {Component} from 'react'
import AlbumDataService from '../services/AlbumDataService';
import SongDataService from '../services/SongDataService';

class Editdb extends Component{
    constructor(props){
        super(props)
        this.state={
            songs: [],
            albums: [],
            songFilter: "", 
            artistFilter:""
        }
        this.refreshList = this.refreshList.bind(this)
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        SongDataService.retrieveAllSongs().then( Response => {
            this.setState({
                songs: Response.data
            })
            console.log(Response.data)
        })
        AlbumDataService.retrieveAllAlbums().then( Response =>{
            this.setState({
                albums: Response.data
            })
            console.log(Response.data)
        })
    }

    render(){
        return (
            <div>
                <th>album list</th>
                <table className = "table">
                    <thead>
                        <td>ID</td>
                        <td><th>artist</th></td>
                        <td><th>album title</th></td>
                        <td><th>genre</th></td>
                        <td><th>album release date</th></td>
                    </thead>
                    <tbody>
                            {
                                this.state.albums.map(
                                    albums=>
                                    <tr >
                                        <td>{albums.id}</td>
                                        <td>{albums.artist}</td>
                                        <td>{albums.name}</td>
                                        <td>{albums.genre}</td>
                                        <td>{albums.releaseDate}</td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>

                <th>songlist</th>
                <table className = "table">
                    <thead>
                        <td>ID</td>
                        <td><th>title</th></td>
                        <td><th>length</th></td>
                        <td><th>artist</th></td>
                        <td><th>album</th></td>
                    </thead>
                    <tbody>
                            {
                                this.state.songs.map(
                                    songs=>
                                    <tr >
                                        <td>{songs.id}</td>
                                        <td>{songs.title}</td>
                                        <td>{songs.length}</td>
                                        <td>{songs.artist}</td>
                                        <td>{songs.albumID}</td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Editdb