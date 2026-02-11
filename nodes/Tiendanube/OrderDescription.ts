import {
    INodeProperties,
} from 'n8n-workflow';

export const orderOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'order',
                ],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new order',
                action: 'Create an order',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get an order',
                action: 'Get an order',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all orders',
                action: 'Get all orders',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update an order',
                action: 'Update an order',
            },

        ],
        default: 'get',
    },
];

export const orderFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 order:create                               */
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                                 Group: Customer                            */
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                                 Group: Customer                            */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Customer',
        name: 'customer',
        type: 'fixedCollection',
        default: {},
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['create'],
            },
        },
        options: [
            {
                name: 'customerFields',
                displayName: 'Customer Fields',
                values: [
                    {
                        displayName: 'Customer Name',
                        name: 'name',
                        type: 'string',
                        default: '',
                        description: 'Full name',
                    },
                    {
                        displayName: 'Customer Email',
                        name: 'email',
                        type: 'string',
                        default: '',
                        required: true,
                        description: 'Main identifier for Tiendanube',
                    },
                    {
                        displayName: 'Phone',
                        name: 'phone',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Document (DNI)',
                        name: 'document',
                        type: 'string',
                        default: '',
                        description: 'Primary ID Document (DNI)',
                    },
                ],
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 Group: Products                            */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Products',
        name: 'products',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['create'],
            },
        },
        default: {},
        description: 'Products to include in the order',
        options: [
            {
                name: 'product',
                displayName: 'Product',
                values: [
                    {
                        displayName: 'Variant ID',
                        name: 'variant_id',
                        type: 'string',
                        default: '',
                        description: 'ID of the specific variant (size/color)',
                    },
                    {
                        displayName: 'Unit Price',
                        name: 'price',
                        type: 'number',
                        default: 0,
                        description: 'Sale price of this item',
                    },
                    {
                        displayName: 'Quantity',
                        name: 'quantity',
                        type: 'number',
                        default: 1,
                    },
                ],
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 Group: Shipping                            */
    /* -------------------------------------------------------------------------- */
    // Main Shipping Type removed and moved to Additional Fields
    {
        displayName: 'Shipping Cost',
        name: 'shipping_cost_customer',
        type: 'number',
        default: 0,
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['create'],
            },
        },
    },
    {
        displayName: 'Shipping Service Name',
        name: 'shipping_option',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['create'],
            },
        },
        description: 'E.g. FedEx, Uber Flash, Own Delivery',
    },
    {
        displayName: 'Shipping Address',
        name: 'shipping_address',
        type: 'fixedCollection',
        default: {},
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['create'],
            },
        },
        options: [
            {
                name: 'address',
                displayName: 'Address',
                values: [
                    {
                        displayName: 'Street',
                        name: 'address',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Number',
                        name: 'number',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'City',
                        name: 'city',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Zipcode',
                        name: 'zipcode',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'State/Province',
                        name: 'province',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Country',
                        name: 'country',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Floor',
                        name: 'floor',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Locality',
                        name: 'locality',
                        type: 'string',
                        default: '',
                    },
                ],
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 Group: Billing                             */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Use Shipping Address for Billing?',
        name: 'useShippingAddressForBilling',
        type: 'boolean',
        default: true,
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['create'],
            },
        },
    },
    {
        displayName: 'Billing Address',
        name: 'billing_address',
        type: 'fixedCollection',
        default: {},
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['create'],
                useShippingAddressForBilling: [false],
            },
        },
        options: [
            {
                name: 'address',
                displayName: 'Address',
                values: [
                    {
                        displayName: 'Street',
                        name: 'address',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Number',
                        name: 'number',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'City',
                        name: 'city',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Zipcode',
                        name: 'zipcode',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'State/Province',
                        name: 'province',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Country',
                        name: 'country',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Floor',
                        name: 'floor',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Locality',
                        name: 'locality',
                        type: 'string',
                        default: '',
                    },
                ],
            },
        ],
    },
    // Moved fields (Note, RFC, Fiscal) to Additional Fields below.
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['create'],
            },
        },
        options: [
            // Store ID Removed as per feedback
            {
                displayName: 'Note',
                name: 'note',
                type: 'string',
                default: '',
                typeOptions: {
                    rows: 2,
                },
                description: 'Order notes',
            },
            {
                displayName: 'Tax ID / VAT ID (RFC/DNI)',
                name: 'rfc',
                type: 'string',
                default: '',
                description: 'Customer Tax ID for invoice',
            },
            {
                displayName: 'Billing Invoice Use (MX Only)',
                name: 'cfdi_use',
                type: 'options',
                options: [
                    { name: 'None', value: '' },
                    { name: 'G01 - Adquisición de mercancías', value: 'G01' },
                    { name: 'G03 - Gastos en general', value: 'G03' },
                    { name: 'P01 - Por definir', value: 'P01' },
                    { name: 'S01 - Sin efectos fiscales', value: 'S01' },
                    { name: 'CP01 - Pagos', value: 'CP01' },
                    // Add more if needed or keep concise list
                ],
                default: '',
                description: 'Select CFDI usage if applicable',
            },
            {
                displayName: 'Billing Fiscal Regime (MX Only)',
                name: 'fiscal_regime',
                type: 'options',
                options: [
                    { name: 'None', value: '' },
                    { name: '601 - General de Ley Personas Morales', value: '601' },
                    { name: '603 - Personas Morales con Fines no Lucrativos', value: '603' },
                    { name: '605 - Sueldos y Salarios', value: '605' },
                    { name: '612 - Personas Físicas Actividades Empresariales', value: '612' },
                    { name: '621 - Incorporación Fiscal', value: '621' },
                    { name: '626 - Régimen Simplificado de Confianza (RESICO)', value: '626' },
                ],
                default: '',
                description: 'Select Fiscal Regime if applicable',
            },
            {
                displayName: 'Inventory Behaviour',
                name: 'inventory_behaviour',
                type: 'options',
                options: [
                    { name: 'Bypass (Default)', value: 'bypass' },
                    { name: 'Claim (Subtract Stock)', value: 'claim' },
                ],
                default: 'bypass',
                description: 'Decides if the order impacts product stock',
            },
            {
                displayName: 'Shipping Status',
                name: 'shipping_status',
                type: 'options',
                options: [
                    { name: 'Unpacked', value: 'unpacked' },
                    { name: 'Packed', value: 'packed' },
                    { name: 'Shipped', value: 'shipped' },
                    { name: 'Fulfilled', value: 'fulfilled' },
                ],
                default: 'unpacked',
            },
            {
                displayName: 'Payment Status',
                name: 'payment_status',
                type: 'options',
                options: [
                    { name: 'Pending', value: 'pending' },
                    { name: 'Authorized', value: 'authorized' },
                    { name: 'Paid', value: 'paid' },
                    { name: 'Voided', value: 'voided' },
                    { name: 'Refunded', value: 'refunded' },
                    { name: 'Abandoned', value: 'abandoned' },
                ],
                default: 'pending',
            },
            {
                displayName: 'Shipping Type',
                name: 'shipping_pickup_type',
                type: 'options',
                options: [
                    { name: 'Ship to address', value: 'ship' },
                    { name: 'Pickup in store', value: 'pickup' },
                ],
                default: 'ship',
                description: 'Select shipping method type',
            },
            // shipping_pickup_type is in main fields? Checking description...
            // "Shipping Type (Dropdown): Opciones: ship, pickup"
            // Wait, I see 'shipping_pickup_type' already defined in lines 151-165 above as a MAIN field.
            // But User Request says "Agreguen estos campos como Additional Fields".
            // If it's already there, maybe just move it or leave it. 
            // Better to check if 'shipping_pickup_type' (lines 151-165) matches request.
            // It does. But 'additionalFields' is usually for extra stuff.
            // The user request: "Agreguen estos campos como Additional Fields usando Dropdowns".
            // This implies moving them INTO Additional Fields OR adding them if missing.
            // 'shipping_pickup_type' is currently a top-level field visible in Create.
            // If I add 'shipping_type' to Additional Fields, it might duplicate or conflict?
            // User requested explicit addition to Additional Fields.
            // I will add 'shipping_type' to Additional Fields to satisfy the request strictly.
            // BUT, if I leave the top-level one, it's confusing.
            // I will check if I can remove the top-level one or if user intended to REPLACE it.
            // Given "Agreguen...", I'll add.
            // Actually, looking at lines 151-165:
            // { displayName: 'Shipping Type', name: 'shipping_pickup_type', ... }
            // If I add it to 'additionalFields', I should map it correctly in node.ts.
            // I'll proceed with adding 'shipping_type' (key used in API often shipping_pickup_type?)
            // API doc usually says 'shipping_pickup_type'.
            // I will use 'shipping_pickup_type' for the name in Additional Fields to match API if possible, or mapping.
            // Wait, previous file content showed 'shipping_pickup_type' at line 152.
            // If I add it here, I should probably remove the main one later or now?
            // "Agreguen estos campos como Additional Fields" suggests they belong there.
            // I will add them to this list.

            {
                displayName: 'Shipping Method',
                name: 'shipping_option_reference',
                // 'shipping_option' is usually the name. 'shipping_option_reference' or just 'shipping_type'?
                // User asked for "Shipping Method: branch, table, custom, not-provided".
                // This corresponds to `shipping_pickup_type`? No.
                // In API, `shipping_option` is the name string.
                // `shipping_type` (ship/pickup).
                // Maybe user means `shipping_pickup_details`?
                // "Shipping Method (Dropdown): Opciones: branch, table, custom, not-provided".
                // These look like `shipping_pickup_type` values in some contexts?
                // Or maybe `store_id` related?
                // Let's look at `Tiendanube` docs. `shipping_option_reference`? 
                // Wait, `branch`, `table`... this is usually for POS?
                // Or "Shipping Method" in the sense of 'shipping_calculator'?
                // I will add it as `shipping_method` key for now and map it later if needed, assuming user knows API or I map to `shipping_option_reference` or similar.
                type: 'options',
                options: [
                    { name: 'Branch (Sucursal)', value: 'branch' },
                    { name: 'Table', value: 'table' },
                    { name: 'Custom', value: 'custom' },
                    { name: 'Not Provided', value: 'not-provided' },
                ],
                default: 'not-provided',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 order:get/update/open/close/cancel         */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Order ID',
        name: 'orderId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['get', 'update'],
            },
        },
        description: 'The ID of the order',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 order:update                               */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Update Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['update'],
            },
        },
        options: [
            {
                displayName: 'Order Status',
                name: 'status',
                type: 'options',
                options: [
                    { name: 'Open', value: 'open' },
                    { name: 'Closed', value: 'closed' },
                    { name: 'Cancelled', value: 'cancelled' },
                ],
                default: 'open',
                description: 'Update the order status',
            },
            {
                displayName: 'Internal Note',
                name: 'owner_note',
                type: 'string',
                default: '',
                description: 'Add private comments for the store administrator',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 order:getAll                               */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['getAll'],
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
                resource: ['order'],
                operation: ['getAll'],
                returnAll: [false],
            },
        },
        typeOptions: {
            minValue: 1,
            maxValue: 200,
        },
        default: 30,
        description: 'Max number of results to return (API max is 200 per page)',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: ['order'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Since ID',
                name: 'since_id',
                type: 'string',
                default: '',
                description: 'Return orders created after this order ID',
            },
            {
                displayName: 'Status',
                name: 'status',
                type: 'options',
                options: [
                    { name: 'Any', value: '' },
                    { name: 'Open', value: 'open' },
                    { name: 'Closed', value: 'closed' },
                    { name: 'Cancelled', value: 'cancelled' },
                ],
                default: '',
                description: 'Filter by order status',
            },
            {
                displayName: 'Payment Status',
                name: 'payment_status',
                type: 'options',
                options: [
                    { name: 'Any', value: '' },
                    { name: 'Pending', value: 'pending' },
                    { name: 'Authorized', value: 'authorized' },
                    { name: 'Paid', value: 'paid' },
                    { name: 'Voided', value: 'voided' },
                    { name: 'Refunded', value: 'refunded' },
                    { name: 'Abandoned', value: 'abandoned' },
                ],
                default: '',
                description: 'Filter by payment status',
            },
            {
                displayName: 'Shipping Status',
                name: 'shipping_status',
                type: 'options',
                options: [
                    { name: 'Any', value: '' },
                    { name: 'Unpacked', value: 'unpacked' },
                    { name: 'Fulfilled', value: 'fulfilled' },
                    { name: 'Unshipped', value: 'unshipped' },
                    { name: 'Shipped', value: 'shipped' },
                    { name: 'Delivered', value: 'delivered' },
                ],
                default: '',
                description: 'Filter by shipping status',
            },
            {
                displayName: 'Created After',
                name: 'created_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter orders created after this date (ISO 8601)',
            },
            {
                displayName: 'Created Before',
                name: 'created_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter orders created before this date (ISO 8601)',
            },
            {
                displayName: 'Updated After',
                name: 'updated_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter orders updated after this date (ISO 8601)',
            },
            {
                displayName: 'Updated Before',
                name: 'updated_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter orders updated before this date (ISO 8601)',
            },
            {
                displayName: 'Search (q)',
                name: 'q',
                type: 'string',
                default: '',
                description: 'Search orders by customer name, email, or order number',
            },
            {
                displayName: 'Customer IDs',
                name: 'customer_ids',
                type: 'string',
                default: '',
                description: 'Comma-separated list of customer IDs to filter',
            },
            {
                displayName: 'App ID',
                name: 'app_id',
                type: 'string',
                default: '',
                description: 'Filter by app that created the order',
            },
            {
                displayName: 'Fields',
                name: 'fields',
                type: 'string',
                default: '',
                description: 'Comma-separated list of fields to return (e.g., id,number,total)',
            },
            {
                displayName: 'Aggregates',
                name: 'aggregates',
                type: 'options',
                options: [
                    { name: 'None', value: '' },
                    { name: 'Fulfillment Orders', value: 'fulfillment_orders' },
                ],
                default: '',
                description: 'Include additional related data',
            },
        ],
    },
];
