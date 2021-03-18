import React, {Component} from 'react'
import AlbumDataService from '../services/AlbumDataService';
import SongDataService from '../services/SongDataService';


class MusicList extends Component{
    constructor(props){
        super(props)
        this.state={
            songs: [],
            albums: [],
            SongFilter: "",
            AlbumFilter:"", 
            ArtistFilter:"",
            GenreFilter:"Alternative Rock"
        }
        this.refreshList = this.refreshList.bind(this)
        this.AlbumFilterSet = this.AlbumFilterSet.bind(this)
        this.ArtistFilterSet = this.ArtistFilterSet.bind(this)
        this.GenreFilterSet = this.GenreFilterSet.bind(this)
        this.SongFilterSet = this.SongFilterSet.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        SongDataService.retrieveAllSongs().then( Response => {
            this.setState({
                songs: Response.data
            })
            //console.log(Response.data)
        })
        AlbumDataService.retrieveAllAlbums().then( Response =>{
            this.setState({
                albums: Response.data,
                ArtistFilter: Response.data[0].artist
            })
            //console.log(Response.data)
        })
    }
    AlbumFilterSet(){
        const result = this.state.albums.filter(album => album.name === this.state.AlbumFilter)
        this.setState({
            albums:result
        })
    }
    ArtistFilterSet(){
        const result = this.state.albums.filter(album => album.artist === this.state.ArtistFilter)
        this.setState({
            albums:result
        })
    }
    GenreFilterSet(){
        const result = this.state.albums.filter(album => album.genre === this.state.GenreFilter)
        this.setState({
            albums:result
        })
    }

    SongFilterSet(){
        console.log(this.state.SongFilter)
        const result = this.state.songs.filter(song => song.title === this.state.SongFilter)
        this.setState({
            songs:result
        })
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        //console.log(event.target.name)
    }



    render(){
        return (
            <div>
                <table  className = "table">
                    <thead>
                        <table>
                            <td><h3>FILTERS: </h3></td>

                            <td><th>Artist:</th></td>
                            <td><th>
                                <select name = "ArtistFilter" onChange = {this.handleChange} >{
                                        this.state.albums.map(
                                            Album=>
                                            <option value = {Album.artist}>{Album.artist}</option>
                                        )
                                    }
                                </select></th>
                            </td>
                            <td><th><button onClick = {this.ArtistFilterSet}>submit</button></th></td>

                            <td><th>Genre</th></td>
                            <td><th><select name = "GenreFilter" onChange = {this.handleChange}>{
                                    <option value = "Alternative Rock">Alternative Rock</option>
                            }</select></th></td>
                            <td><th><button onClick = {this.GenreFilterSet}>submit</button></th></td>

                            <td><th>Song title:</th></td>
                            <td><th><input type = "text" name = "SongFilter" onChange = {this.handleChange}></input></th></td>
                            <td><th><button onClick = {this.SongFilterSet}>submit</button></th></td>

                            <td><th>Album title:</th></td>
                            <td><th><input type = "text" name = "AlbumFilter" onChange = {this.handleChange}></input></th></td>
                            <td><th><button onClick = {this.AlbumFilterSet}>submit</button></th></td>

                        </table>
                    </thead>

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
                                                    
                                                    <td><a  href = {albums.art} ><img alt = "" src = {albums.art} style = {{height:"500px", width: "500px"}}></img></a></td>
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