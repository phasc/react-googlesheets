import React, { useState } from 'react'
import { Container } from 'semantic-ui-react';
import './App.css';
import {
  GridCanvas,
  PostBox,
} from './styles.tsx';

const test = () => {
  var gData;

  const [showAll, setShowAll] = useState(false)

  function getData() {
    fetch("https://sheet.best/api/sheets/2529bb95-bab1-4c8b-899f-91b7228b2c4c")
      .then((response) => response.json())
      .then((data) => {
        gData = data
        console.log(gData);
    })
      .catch((error) => {
      console.error(error);
    });
  }

  function showAllIssues() {
    setShowAll(true);
    console.log(showAll);
  }

  const containerStyle = {
    borderRadius: '10px',
    boxShadow: '0 5px 25px 0 rgba(0,0,0,0.09)',
    display: 'flex', 
    flexDirection: 'column',
    height: '100%',
    padding: '30px 20px',
    width: '100%' 
  }

  const allIssues = (gData) => {
    let elements = [];
    let elementCounter = 0;
    for (const issue of gData) {
      elementCounter++;

      elements.push(
        <div>
          <PostBox
            key={`main-content-${elementCounter}`} >
            <Container style={containerStyle}>
              <h2>
                {issue.Class_ID}
              </h2>
            </Container>
          </PostBox>
        </div>
      );
    }

    return (
      <GridCanvas>
        {elements}
      </GridCanvas>
    );
  }


  return (
    <div>
      <button onClick={getData}>
        click here to get/update data
      </button>
      <h1>
        Inspect this page and go to console to see the full data
      </h1>
      <button onClick={showAllIssues}>
        click here to see the issues (not working yet)
      </button>
      {!showAll || allIssues(gData)}
    </div>
  );
}

export default test;
