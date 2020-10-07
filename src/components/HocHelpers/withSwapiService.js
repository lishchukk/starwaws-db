import React from "react";
import {SwapiServiceConsumer} from "../SwapiServiceConext/SwapiServiceConext";

const withSwapiService = (mapMethodsToProps) => ( Wrapped ) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => { // из провыйдера приходит swapiService
                        const serviceProps = mapMethodsToProps(swapiService);

                        return (
                            <Wrapped {...props} {...serviceProps} />
                        );
                    }
                }
            </SwapiServiceConsumer>
        )
    }
};

export default withSwapiService;