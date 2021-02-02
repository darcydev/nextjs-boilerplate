import styled from 'styled-components';

import { Container } from './Container';

export default function Footer() {
	return (
		<StyledFooter>
			<Container>this is the footer</Container>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer``;
