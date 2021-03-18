import React, {Component} from 'react'
import AlbumDataService from '../services/AlbumDataService';
import SongDataService from '../services/SongDataService';


class MusicList extends Component{
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
                <table  className = "table">
                    <th>FILTERS: </th>
                    <tr>
                        <table>
                            <tbody>
                                {
                                    this.state.albums.map(
                                        albums=>
                                        <div >
                                            <h3>{albums.artist}</h3>
                                            <h4>{albums.name}</h4>
                                            <tr className = "songs">
                                                
                                                <td><a><img src = {albums.art} style = {{height:"500px", width: "500px"}}></img></a></td>
                                                {
                                                    this.state.songs.map(
                                                        songs=>
                                                            <tr>
                                                                {
                                                                songs.albumID === albums.id ?
                                                                <td>{songs.title}</td>: <td></td>
                                                                }
                                                                {
                                                                    songs.albumID === albums.id ?
                                                                    <td>{songs.length}</td>: <td></td>
                                                                }
                                                            </tr>
                                                        )
                                                }
                                            </tr>
                                        </div>
                                    )
                                }
                            </tbody>
                        </table>
                    </tr>
                </table>
                <br></br>
          
            </div>
        )
    }

}

export default MusicList