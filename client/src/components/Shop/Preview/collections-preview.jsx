import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../Collection/collection-item';
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './preview-collection-styles.jsx';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <div className="position-relative">
  <section className="section">
    <Container >
    <Row className="row-grid">
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>      
    <Col lg="12">
      <Row className="row-grid">
          {items
            .filter((item, idx) => idx < 3)
            .map(item => (
              <Col lg="4"><CollectionItem key={item.id} item={item} /></Col>
            ))}     
      </Row>
      </Col>
      </Row>
    </Container>

  </section>
  </div>
);

export default withRouter(CollectionPreview);