import React, {Component} from 'react'
import AlbumDataService from '../services/AlbumDataService';
import SongDataService from '../services/SongDataService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment, { relativeTimeThreshold } from 'moment'

class Editdb extends Component{
    constructor(props){
        super(props)
        this.state={
            songs: [],
            albums: [],
            date: moment().format('MM/DD/YYYY'),
            dateToAdd: moment().format(),
            artist:"",
            title:"",
            genre:"",
            ID: 0,
            songTitle: "",
            length: "",
            songArtist: "",
            songAlbum: "",
            albumArt: ""

        }
        this.refreshList = this.refreshList.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAlbumAdd = this.handleAlbumAdd.bind(this)
        this.handleAlbumDelete = this.handleAlbumDelete.bind(this)
        this.handleAlbumUpdate = this.handleAlbumUpdate.bind(this)

        this.handleSongAdd = this.handleSongAdd.bind(this)
        this.handleSongUpdate = this.handleSongUpdate.bind(this)
        this.handleSongDelete = this.handleSongDelete.bind(this)
    }

    componentDidMount(){
        this.refreshList();
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    refreshList(){
        SongDataService.retrieveAllSongs().then( Response => {
            this.setState({
                songs: Response.data,
                
            })
            
        })
        AlbumDataService.retrieveAllAlbums().then( Response =>{
            this.setState({
                albums: Response.data,
                songAlbum: Response.data[0].id
            })
            console.log(Response.data)
            console.log(Response.data[0].id)
        })
    }
    handleAlbumAdd(){
        let newAlbum={
            artist: this.state.artist,
            name: this.state.title,
            genre: this.state.genre,
            releaseDate: this.state.dateToAdd,
            art:this.state.albumArt
        }
        AlbumDataService.addAlbums(newAlbum)
        console.log(newAlbum)
        this.refreshList()
    }
    handleAlbumUpdate(){
        let newAlbum={
            id: this.state.ID,
            artist: this.state.artist,
            name: this.state.title,
            genre: this.state.genre,
            releaseDate: this.state.dateToAdd,
            art: this.state.albumArt
        }
        AlbumDataService.updateAlbum(newAlbum)
        console.log(newAlbum)
        this.refreshList()
    }
    handleAlbumDelete(){
        AlbumDataService.deleteAlbum(this.state.ID)
        alert("deleted album with id:" + this.state.ID)
    }
    handleSongAdd(){
        let newSong={
            title: this.state.songTitle,
            length: this.state.length,
            artist: this.state.songArtist,
            albumID: this.state.songAlbum
            
        }
        SongDataService.addSong(newSong)
        console.log(newSong)
        this.refreshList()
    }
    handleSongUpdate(){
        let newSong={
            id:this.state.ID,
            title: this.state.songTitle,
            length: this.state.length,
            artist: this.state.songArtist,
            albumID: this.state.songAlbum
        }
        SongDataService.updateSong(newSong)
        console.log(newSong)
        this.refreshList()
    }
    handleSongDelete(){
        SongDataService.deleteSong(this.state.ID)
        alert("deleted song with id:" + this.state.ID)
    }
    

    render(){
        return (
            <div className = "page">
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
                                        <td>{albums.art}</td>
                                    </tr>
                                )
                            }
                    </tbody>
                    <th>ADD ALBUM</th>
                    <tbody>
                        <td></td>
                        <td><input type = "text" placeholder = "artist" onChange = {this.handleChange} name = "artist"></input></td>
                        <td><input type = "text" placeholder = "album name" onChange ={this.handleChange} name = "title"></input></td>
                        <td><input type = "text" placeholder = "genre" onChange = {this.handleChange} name = "genre"></input></td>
                        <td><DatePicker placeholderText = {this.state.date} onChange={(newDate) => this.setState({date: moment(newDate).format('MM/DD/YYYY'), dateToAdd: moment(newDate).format()})}></DatePicker></td>
                        <td><input type = "text" placeholder = "album art" onChange = {this.handleChange} name = "albumArt"></input></td>
                        <td><button onClick = {this.handleAlbumAdd}>submit</button></td>
                    </tbody>

                    <th>UPDATE ALBUM</th>
                    <tbody>
                        <td><input type = "text" placeholder = "ID" onChange = {this.handleChange} name = "ID"></input></td>
                        <td><input type = "text" placeholder = "artist" onChange = {this.handleChange} name = "artist"></input></td>
                        <td><input type = "text" placeholder = "album name" onChange ={this.handleChange} name = "title"></input></td>
                        <td><input type = "text" placeholder = "genre" onChange = {this.handleChange} name = "genre"></input></td>
                        <td><DatePicker placeholderText = {this.state.date} onChange={(newDate) => this.setState({date: moment(newDate).format('MM/DD/YYYY'), dateToAdd: moment(newDate).format()})}></DatePicker></td>
                        <td><input type = "text" placeholder = "album art" onChange = {this.handleChange} name = "albumArt"></input></td>
                        <td><button onClick = {this.handleAlbumUpdate}>submit</button></td>
                    </tbody>
                    <th>DELETE ALBUM</th>
                    <tbody>
                        <td><input type = "text" placeholder = "ID" onChange = {this.handleChange} name = "ID"></input></td>
                        <td><button onClick = {this.handleAlbumDelete}>submit</button></td>
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
                    <th>ADD SONG</th>
                    <tbody>
                        <td></td>
                        <td><input type = "text" placeholder = "title" onChange = {this.handleChange} name = "songTitle"></input></td>
                        <td><input type = "text" placeholder = "length" onChange ={this.handleChange} name = "length"></input></td>
                        <td><input type = "text" placeholder = "Artist" onChange = {this.handleChange} name = "songArtist"></input></td>
                        <td><select onChange = {this.handleChange} name = "songAlbum">{
                            this.state.albums.map(
                                albums =>
                                <option value = {albums.id}>{albums.name}</option>
                            )
                        }</select></td>
                        <td><button onClick = {this.handleSongAdd}>submit</button></td>
                    </tbody>

                    <th>UPDATE SONG</th>
                    <tbody>
                        <td><input type = "text" placeholder = "ID" onChange = {this.handleChange} name = "ID"></input></td>
                        <td><input type = "text" placeholder = "title" onChange = {this.handleChange} name = "songTitle"></input></td>
                        <td><input type = "text" placeholder = "length" onChange ={this.handleChange} name = "length"></input></td>
                        <td><input type = "text" placeholder = "Artist" onChange = {this.handleChange} name = "songArtist"></input></td>
                        <td><select onChange = {this.handleChange} name = "songAlbum">{
                            this.state.albums.map(
                                albums =>
                                <option value = {albums.id}>{albums.name}</option>
                            )
                        }</select></td>
                        <td><button onClick = {this.handleSongUpdate}>submit</button></td>
                    </tbody>
                    <th>DELETE SONG</th>
                    <tbody>
                        <td><input type = "text" placeholder = "ID" onChange = {this.handleChange} name = "ID"></input></td>
                        <td><button onClick = {this.handleSongDelete}>submit</button></td>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Editdb