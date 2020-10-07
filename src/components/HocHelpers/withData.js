import React, {Component} from "react";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const withData = (Wrapped) => {
    return class extends Component {
        state ={
            data: null,
            loading: true,
            error: false
        };

        componentDidUpdate(prevProps) {
            if( this.props.getData !== prevProps.getData){
                this.update();// позволяет обновлять сервисы данных при их изменении
            }

        }

        componentDidMount() {
            this.update();
        }

        update () {
            this.setState({
                loading: true,
                error: false
            });

            this.props.getData()
                .then(data => this.setState({
                    data,
                    loading: false
                }))//получение данных с сервера в state
                .catch( () => {
                    this.setState({
                        error: true,
                        loading: false
                    });
                })
        }
        render() {
            const { data, loading, error } = this.state;

            if (loading) {
                return <Spinner/>;
            }

            if (error){
                return <ErrorIndicator/>
            }

            return <Wrapped {...this.props} data={data}/>
        }
    }
};

export default withData;