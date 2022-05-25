import React from 'react';
import '../index.css'

const imageList = (props)=>{
    
    const renderImageList = ()=>{
        return props.imageList.map((image)=><img key = {image.id} src={image.urls.regular}/>)
    }
    return <div className='wrapper'>
        <div className='box'>{renderImageList()}</div>
        </div>
}


export default imageList;
