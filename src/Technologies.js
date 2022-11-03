import React from 'react'
import Technology from './Technology'
import './Technologies.css'

function Technologies() {
  return (
    <div className='techs'>
        <h1>Technologies I Use</h1>
        <div className='techs-list'>
           <Technology img={"res/react-logo.png"} title={"React"}/> 
           <Technology img={"res/js-logo.png"} title={"Javascript"}/> 
           <Technology img={"res/swift-logo.png"} title={"Swift"}/> 
           <Technology img={"res/flutter-logo.webp"} title={"Flutter"}/> 
           <Technology img={"res/c++-logo.png"} title={"C++"}/> 
           <Technology img={"res/c-sharp-logo.png"} title={"C#"}/> 
           <Technology img={"res/unity-logo.png"} title={"Unity"}/> 
        </div>
    </div>
  )
}

export default Technologies