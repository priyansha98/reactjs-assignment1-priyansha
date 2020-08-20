import React,{ Component } from 'react'
import Skills from './skills'
import Education from './education'
import Projectsandtraining from './projectsandtraining'
import Certificate from './certificate'



export default class MyComponent extends Component 
{
    render()
    {
        
        return (
        
            <div>
               
                <Education/>
                <Skills/>
                <Projectsandtraining/>
                <Certificate/>
                
            </div>
        );
    }
}