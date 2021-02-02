import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { IWidth, getWidth } from '../utils/getWidth';

export interface IContainer extends HTMLAttributes<HTMLElement> {
	width?: IWidth;
}

export const Container: FC<IContainer> = ({
	children,
	width = 'default',
	...props
}) => {
	return (
		<StyledContainer width={width} {...props}>
			{children}
		</StyledContainer>
	);
};

const StyledContainer = styled.section<IContainer>`
	padding: 0 4%;
	max-width: ${({ width }) => getWidth(width)};
	margin: 0 auto;
`;
