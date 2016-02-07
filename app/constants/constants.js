/**
 * Constants used in this application
 * @namespace
 * @enum {string}
 */
const constants = {
    //actions
    CREATE_SALE: 'CREATE_SALE',
    READ_SALE: 'READ_SALE',
    READ_SALES: 'READ_SALES',
    UPDATE_SALE: 'UPDATE_SALE',
    DELETE_SALE: 'DELETE_SALE',

    //locations
    locations:{
        0: 'Burnside',
        1: 'Leacock',
        2: 'McConnell'
    },
    //prices
    prices:{
        0: '1 for $1.00, 3 samosas for $3.00'
    },
    //times
    times:{
        0: '8:00 AM',
        1: '8:30 AM',
        2: '9:00 AM',
        3: '9:30 AM'
    },
    //filters
    filters:{
        0: '(all)',
        1: 'owned',
        2: 'confirmed',
        3: 'unconfirmed'
    },
    //sorters
    sorters:{
        0: '(none)',
        1: 'time',
        2: 'location'
    }
};

export default constants;