import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Dashboard from './container/Dashboard';
import CheckOut from './container/Dashboard/CheckOut';

function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <Container fluid className="App">
              <Row>
                <Header />
              </Row>
              <Row className="main">
                <Dashboard />
              </Row>
            </Container>
          }
        />
        <Route
          path="/checkout"
          element={
            <Container fluid className="App">
              <Row className="main">
                <CheckOut />
              </Row>
            </Container>
          }
        />
      </Routes>
  );
}

export default App;
