import React from 'react'

const Body =(imageData)=>{
    console.log(imageData.imageData)
    return (
    <div>
        <div>
        {
          imageData.imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
    </div>
    )
}
export default Body;