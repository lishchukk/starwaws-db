import React from 'react';

import withData from "../HocHelpers/withData";
import ItemList from "../ItemList/ItemList";
import withSwapiService from "../HocHelpers/withSwapiService";
import withChildFunction from "../HocHelpers/withChildFunction";




const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};
// До рефакторинга:
// передаем методы в пропсы с помощью функции withSwapiService,
//которая принимает 2 функции, куда преобразовать методы и какие именно методы
//withData, в свою очередь, принимает функцию для рендера childrens компонента, которая
// принимает компонент, который нужно отрисовать и функцию для этого
// const PersonList = withSwapiService(
//                         withData(
//                             withChildFunction(ItemList, renderName)),
//                         mapPersonMethodsToProps);

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                        withData(
                            withChildFunction(renderName)(
                                ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                        withData(
                            withChildFunction(renderName)(
                                ItemList)));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                        withData(withChildFunction(renderModelAndName)(ItemList)));

export {
   PersonList,
   PlanetList,
   StarshipList
};
