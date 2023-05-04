import React from 'react';
const Resume_File_URL = 'http://localhost:3000/Chris_Miller_Web_Developer_Resume.pdf'
const Resume = () =>{
    const DownfileAtURL=(url)=>{
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download','Chris_Miller_Web_Developer_Resume.pdf')
        document.body.append(aTag)
        aTag.click();
        aTag.remove();
    }
 return(
    <div id='resume-button'>
        <button onClick={()=>{DownfileAtURL(Resume_File_URL)}}>Download Resume</button>

    </div>
 )
    
}

export default Resume;