import React from 'react';
import { PersonList } from "../SwComponents/ItemLists";
import PersonDetails from "../SwComponents/PersonDetails";
import Row from "../Row/Row";
import { withRouter } from "react-router";

const PeoplePage = ({ history, match }) => {
    const { id } = match.params;
    return (
        <Row
            left={<PersonList onItemSelected={(id) => history.push(id)}/>}
            right={<PersonDetails itemId={id}/>}
        />
    );

};

export default withRouter(PeoplePage);

