import React,{ Component } from 'react'
export default class Projectsandtraining extends Component
{
    render()

    {
            const pt={
            fontSize: '16px'
            
            }
        return (
        
            <div>
        
                 <table>
                    <h4>Projects and Training</h4></table>
                    <table style={pt}>
                   <tr>
                   Retail Banking Management-build using python,flask,html and css
                   </tr>
                   <tr>Pieozoelectric Walking Charger-build using piezoelectricity and wireless power transmission technology</tr>
                   <tr>BSNL Training in RTTC,Bhubaneswar</tr>
                   <tr>C and C++ Training in Internshala
                   </tr>
                   </table>
                   
                

            </div>
        );
    }

   
}