import React, { Component } from 'react'

import service from '../../api/service'

export default class Addmovie extends Component {
    state={
        title:'',
        description:'',
        imageUrl:''
    }

    handleChange = (e)=>{
        const {name,value}= e.target
        this.setState({[name]:value})
    }

    handleFileUpload=(e)=>{
        const uploadData= new FormData()
        uploadData.append('imageUrl',e.target.files[0])
        console.log(uploadData,e.target.files[0])
        service.handleUpload(uploadData)
        .then((result) => {
            console.log(result)
            this.setState({imageUrl:result.secure_url})
        }).catch((err) => {
            console.log('error while uploading',err)
        });
    }

    handleSubmit = e=>{
        e.preventDefault()
        service.saveNewMovie(this.state)
        .then((result) => {
            console.log('added new movie',result)
        }).catch((err) => {
            console.log('error while adding',err)
        });
    }

    render() {
        return (
            <div>
        <h2>New Movie</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
 
          <label>Description</label>
          <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange} />

          <p>Image preview</p>
          {this.state.imageUrl && <img alt="preview" src={this.state.imageUrl} />}
          <input type="file" onChange={this.handleFileUpload} /> 
          <button type="submit">Save new movie</button>
        </form>
      </div> 
        )
    }
}
