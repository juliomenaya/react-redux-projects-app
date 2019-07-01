import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

/**
 * Dando click en "Log Out" se liga a la propiedad signOut que es accedida
 * por mapDispatchToProps y tiene como valor dispatch(signOut())
 * signOut() es la accion que viene desde authActions
 * 
 */

const SignInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    /**
     * De esta forma podemos acceder desde el componente SignInLinks a la propiedad
     * signout
     */
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks)

