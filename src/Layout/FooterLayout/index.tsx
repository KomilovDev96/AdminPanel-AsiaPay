import { Footer } from 'antd/lib/layout/layout';
import StyledFooter from './Style'

export function FooterLayout() {
    return (
        <StyledFooter>
            <Footer style={{ textAlign: 'center' }}><p>Footer</p></Footer>
        </StyledFooter>
    );
}
