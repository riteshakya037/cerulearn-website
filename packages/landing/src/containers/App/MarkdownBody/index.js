import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import ReactMarkdown from 'react-markdown'

const MarkdownBody = ({
    sectionWrapper,
    row,
    col,
    data,
}) => {
    return (
        <Box {...sectionWrapper} id="markdown">
            <Container>
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
        pt: ['40px', '80px'],
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
