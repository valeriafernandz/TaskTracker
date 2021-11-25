import PropTypes from 'prop-types';
import Button from './Button'

export const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header className ='header'>
            <h1>{title}</h1>
            <Button color='pink' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: '#000000',
//     fontSize: '50px'
// }
export default Header;
