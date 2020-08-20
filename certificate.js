import React,{ Component } from 'react'
export default class Certificate extends Component
{
    render()

    {
          const certificate={
            fontSize: '16px'
            
            }
        return (
        
            <div>
                
                <table><h4>Certificate</h4></table>
                    <table style={certificate}>
                    
                
                   <tr>
                   <td>Linkedin</td><td>Full stack web development using flask</td>
                   </tr>
                   <tr><td>Pirple</td><td>HTML and CSS</td></tr>
                   <tr><td>TCS iON</td><td>Career Edge-Soft Skills</td></tr>
                   </table>
            </div>
        );
    }  
}