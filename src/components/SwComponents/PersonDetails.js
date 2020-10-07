import React from 'react';

import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import withSwapiService from "../HocHelpers/withSwapiService";

const PersonDetails = (props) => {// деструктурируем пропсы
    return (
        // передаем все пропсы, так как названия методов соответствуют названию свойств необходимых компоненту
        <ItemDetails {...props} >
            <Record field="gender" label="Gender:"/>
            <Record field="eyeColor" label="Eye Color:"/>
        </ItemDetails>
    );
};

// павило, как именно передавать swapiService в пропс,
// чтобы названия методов совпадали (назначаем методы swapiService св-вам компонента)
// компонент PersonDetails вместо всего объекта swapiService
// получает только необходимые ему методы
const mapMethodsToProps = (swapiService) => {
    return {

        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};
export default withSwapiService(mapMethodsToProps)(PersonDetails);