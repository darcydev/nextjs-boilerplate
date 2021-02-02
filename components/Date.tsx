import styled from 'styled-components';

import { formatDate } from '../utils/formateDate';

interface IDate {
	date: string;
}

export const Date = ({ date }: IDate) => {
	return <StyledTime>{formatDate(date)}</StyledTime>;
};

const StyledTime = styled.time``;
