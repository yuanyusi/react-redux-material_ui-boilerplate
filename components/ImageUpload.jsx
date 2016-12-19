import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import ImageFileSelector from "react-image-select-component";

import {
		Icon
} from 'react-mdl';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;

	$imagePreview = (
				<Avatar
				  src={imagePreviewUrl? imagePreviewUrl:this.props.image}
				  size={200}			  
				/>
	)
    return (
	<div>
	  <div className="file_input_div">
		<div className="file_input">
		  <label className="image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored" style={{position:'absolute'}}>
		   <Icon name="add_a_photo"/>     	
			<input id="file_input_file" className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} hidden/>
		  </label>
		  {$imagePreview}
		</div>
	  </div>
  
      {/*
	  
	  	<ImageFileSelector
    ref="imageFileSelector"
    onSelect={this.selectImage} //required
    onRemoveImage={this.onRemoveImage}
    onInvalidImage={this.onInvalidImage}  //required
    maxImageFileSize={this.maxImageFileSize}
    notImage='not image'
    imageTooLarge='image large'
    imageTooSmall='image small'
    minSize='150'/>
	
	  <div className="previewComponent">
	  <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>*/}
	  
	</div>
    )
  }
}
 