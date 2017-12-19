import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const PicklistInputType = new GraphQLInputObjectType({
  name: 'PicklistInputType',
  description: 'input type for Picklist',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    picklistDate: {type: GraphQLString},
    picklistId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {PicklistInputType};
    