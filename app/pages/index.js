import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Theme from '../components/Theme';

// Straight away require/import scss/css just like in react.
import indexStyle from '../styles/index.scss';

const Index = () => (
    // Wrap your page inside <Theme> HOC to get bootstrap styling.
    // Theme can also be omitted if react-bootstrap components are not used.
    <Theme>
        {
            /*
            Set indexStyling via dangerouslySetInnerHTML.
            This step will make the below classes to work.
            */
        }
        
    </Theme>
);

export default Index;
