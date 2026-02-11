import {
    INodeProperties,
} from 'n8n-workflow';

export const locationOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['location'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new location',
                action: 'Create a location',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a location',
                action: 'Delete a location',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a location',
                action: 'Get a location',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all locations',
                action: 'Get all locations',
            },
            {
                name: 'Get Inventory Levels',
                value: 'getInventoryLevels',
                description: 'Get inventory levels for a location',
                action: 'Get inventory levels for a location',
            },
            {
                name: 'Set As Default',
                value: 'setAsDefault',
                description: 'Set a location as default',
                action: 'Set location as default',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a location',
                action: 'Update a location',
            },
            {
                name: 'Update Priorities',
                value: 'updatePriorities',
                description: 'Update priorities for all locations',
                action: 'Update location priorities',
            },
        ],
        default: 'getAll',
    },
];

export const locationFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 location:get/update/delete/setAsDefault    */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Location ID',
        name: 'locationId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['get', 'update', 'delete', 'setAsDefault', 'getInventoryLevels'],
            },
        },
        description: 'The ID of the location',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 location:create/update                     */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Name (Multilanguage)',
        name: 'name',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        required: true,
        default: {},
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                name: 'values',
                displayName: 'Values',
                values: [
                    {
                        displayName: 'Language',
                        name: 'lang',
                        type: 'options',
                        options: [
                            { name: 'Spanish', value: 'es' },
                            { name: 'English', value: 'en' },
                            { name: 'Portuguese', value: 'pt' },
                        ],
                        default: 'es',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                    },
                ],
            },
        ],
        description: 'Location name in different languages',
    },
    {
        displayName: 'Zipcode',
        name: 'zipcode',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        description: 'Zipcode of the location',
    },
    {
        displayName: 'Street',
        name: 'street',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        description: 'Street name',
    },
    {
        displayName: 'Number',
        name: 'number',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        description: 'Street number',
    },
    {
        displayName: 'City',
        name: 'city',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        description: 'City name',
    },
    {
        displayName: 'Province Code',
        name: 'province_code',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        description: 'Province/State code (e.g. SP, CABA)',
    },
    {
        displayName: 'Province Name',
        name: 'province_name',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        description: 'Province/State name',
    },

    {
        displayName: 'Country Code',
        name: 'country_code',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        description: 'Country code (e.g. AR, BR)',
    },
    {
        displayName: 'Country Name',
        name: 'country_name',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        description: 'Country name',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                displayName: 'Floor',
                name: 'floor',
                type: 'string',
                default: '',
                description: 'Floor / Apartment / Complement',
            },
            {
                displayName: 'Locality',
                name: 'locality',
                type: 'string',
                default: '',
                description: 'Locality / Neighborhood',
            },
            {
                displayName: 'Reference',
                name: 'reference',
                type: 'string',
                default: '',
                description: 'Reference for the delivery',
            },
            {
                displayName: 'Between Streets',
                name: 'between_streets',
                type: 'string',
                default: '',
                description: 'Between streets info',
            },
            {
                displayName: 'Region Code',
                name: 'region_code',
                type: 'string',
                default: '',
                description: 'Region code',
            },
            {
                displayName: 'Region Name',
                name: 'region_name',
                type: 'string',
                default: '',
                description: 'Region name',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 location:updatePriorities                  */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Priorities',
        name: 'priorities',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        default: {},
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['updatePriorities'],
            },
        },
        options: [
            {
                name: 'values',
                displayName: 'Values',
                values: [
                    {
                        displayName: 'Location ID',
                        name: 'locationId',
                        type: 'string',
                        default: '',
                        description: 'ID of the location',
                    },
                    {
                        displayName: 'Priority',
                        name: 'priority',
                        type: 'number',
                        default: 0,
                        description: 'Priority (0 is highest)',
                    },
                ],
            },
        ],
        description: 'List of location IDs with their new priorities',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 location:getInventoryLevels                */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['getInventoryLevels'],
            },
        },
        default: false,
        description: 'Whether to return all results or only up to a given limit',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['getInventoryLevels'],
                returnAll: [false],
            },
        },
        typeOptions: {
            minValue: 1,
            maxValue: 200,
        },
        default: 30,
        description: 'Max number of results to return',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: ['location'],
                operation: ['getInventoryLevels'],
            },
        },
        options: [
            {
                displayName: 'Variant ID',
                name: 'variant_id',
                type: 'number',
                default: '',
                description: 'Filter by specific variant ID',
            },
            {
                displayName: 'Page',
                name: 'page',
                type: 'number',
                default: 1,
                description: 'Page number for pagination',
            },
        ],
    },
];
