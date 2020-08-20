import React,{ Component } from 'react'
export default class Education extends Component
{
   render()

    {
        const education={
        fontSize: '16px'
        
        }
        return (
        
            <div>
                
                
                <table><h4>Education</h4></table>
                    <table style={education}>
                    
                   <tr>
                   <td>2016-2020</td><td>VSSUT,Burla,Odisha<br/>B.Tech,Electronics and Telecommunication<br/>CGPA 8.53</td>
                   </tr>
                   <tr><td>2014-2016</td><td>DAV Public School,Burla,Odisha<br/>Intermediate<br/>93%</td></tr>
                   <tr><td>2014</td><td>Guru Nanak Public School,Sambalpur,Odisha<br/>Matriculation<br/>CGPA 9.6</td></tr>
                   </table>
            </div>
        );
    }  
}