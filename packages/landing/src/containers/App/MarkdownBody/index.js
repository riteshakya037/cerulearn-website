import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import ReactMarkdown from 'react-markdown'
import Heading from 'common/components/Heading';

const MarkdownBody = ({
    sectionWrapper,
    row,
    col,
    title,
    titleStyle,
    data,
}) => {
    return (
        <Box {...sectionWrapper} id="markdown">
            <Container>
                <Heading content={title} {...titleStyle} />
                <Box {...row}>
                    <Box {...col}>
                        <ReactMarkdown children={data} />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

MarkdownBody.propTypes = {
    sectionWrapper: PropTypes.object,
    row: PropTypes.object,
    col: PropTypes.object,
    title: PropTypes.object,
    description: PropTypes.object,
    button: PropTypes.object,
    btnStyle: PropTypes.object,
};

MarkdownBody.defaultProps = {
    sectionWrapper: {
        as: 'section',
        pb: ['40px', '80px'],
    },
    row: {
        flexBox: true,
        flexWrap: 'wrap',
        ml: '-15px',
        mr: '-15px',
    },
    textAreaRow: {
        flexDirection: 'row-reverse',
    },
    col: {
        pr: '15px',
        pl: '15px',
    },
    titleStyle: {
        fontSize: ['36px', '50px'],
        fontWeight: '400',
        color: '#20201D',
        letterSpacing: '-0.025em',
    },
    description: {
        fontSize: '16px',
        color: '#343d48cc',
        lineHeight: '1.75',
        mb: '33px',
        maxWidth: ['100%', '100%', '100%', '440px', '440px'],
        textAlign: ['center', 'left'],
    },
};

export default MarkdownBody;
