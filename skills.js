import React,{ Component } from 'react'
export default class Skills extends Component
{
    render()

    {
        
            const skills={
            fontSize: '16px'
            
            }
        return (
        
            <div>
                
                <table><h4>Skills</h4></table>
                    <table style={skills}>
                    
                    
                   <tr>
                   <td>Languages</td><td>C,C++,Javascript,,Python</td>
                   </tr>
                   <tr><td>Database</td><td>MySQL,MongoDB</td></tr>
                   <tr><td>Web Technology</td><td>HTML,CSS,Flask</td></tr>
                   <tr><td>Tools</td><td>VS Code,MongoDB Compass</td>
                   </tr>
                   </table>
                

            </div>
        );
    }   
}