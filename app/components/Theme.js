import PropTypes from 'prop-types';
import indexStyle from '../styles/vendor/bootstrap.min.css';

const Theme = ({ children }) => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        {children}
    </div>
);

Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
};

export default Theme;
