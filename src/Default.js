import React from 'react'

function Default(props) {
    console.log(props)
    
    return (
        <div className='row'>
            <div className='col-10 mx-auto text-center text-uppercase pt-5'>
                <h1 className='display-3'>404</h1>
                <h1>Error</h1>
                <h2>page not found</h2>
                <h3>The requested Url 
                    <span className='text-danger'> { props.location.pathname } </span>
                     was not found</h3>
            </div>
        </div>

        
    )
}

export default Default