import React, {Component} from 'react'
import MusicList from './MusicList'


class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return (
            <div className = "page">
                <h1>MUSIC DATABASE</h1>
                <MusicList></MusicList>
            </div>
        )
    }

}

export default HomePage