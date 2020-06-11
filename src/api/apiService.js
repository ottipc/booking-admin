import dataProvider from '../api/dataProvider';
import React from 'react';
import myDataProvider from "../api/dataProvider";

const { createContext, useContext } = React;

const ApiContext = createContext(null);

export const ApiService = (props) => {
    const value = {
    };

    return (
        <ApiService.Provider value={value}>
            {props.children}
        </ApiService.Provider>
    );
};

export const useApi = () => {
    return useContext(ApiContext);
};

const myApiService = {

    /**
     * Insert a relation of RoleRight.
     *
     * @param {string} payload
     * @public
     */
    createEvent: function(payload) {
        dataProvider
            .create('event', {data: payload})
            .then(response => {
                // success side effects go here
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            }).finally(() => {
            // Dispatch an action letting react-admin know a API call has ended

        });
    },

    fetchAllUserObjects : function(){
        return dataProvider.getList('user', {
            pagination: {
                page: 1,
                perPage: 20
            },
            sort: {
                field: 'name',
                order: 'ASC'
            },
            filter: {},
        })
    },
};


export default myApiService
