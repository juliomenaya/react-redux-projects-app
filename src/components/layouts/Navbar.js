import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'


const NavBar = ({ auth, profile }) => {    
    const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Julio</Link>
                { links }                                
            </div>            
        </nav>
    )
}

const mapStateToProps = (state) => {    
    // Las propiedades de este objeto podrán ser accedidas en el componente
    // por ejemplo se puede hacer la deestruturing de esta foma { auth }     
    return ({
        auth: state.firebase.auth,
        profile: state.firebase.profile
    })
}
export default connect(mapStateToProps)(NavBar)