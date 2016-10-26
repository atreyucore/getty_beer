import React from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading'


const Modal = ({beer}) => {

    var modal = beer ?
    (
      <Box>
        <Box pad="medium" align="center" justify="center" colorIndex="neutral-4-a">
          <Title>{beer.name} | {beer.abv}% alcohol</Title>
        </Box>
        <Box pad="medium" align="center" justify="center" colorIndex="neutral-2">
          <Heading tag="h4">Description</Heading>
          <Paragraph>{beer.description}</Paragraph>
        </Box>
      </Box>
    ) : null
    return modal;
}
Modal.propTypes = {
  beer: React.PropTypes.object
};

module.exports = Modal;