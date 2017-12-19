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

const ProductStoreFacilityInputType = new GraphQLInputObjectType({
  name: 'ProductStoreFacilityInputType',
  description: 'input type for ProductStoreFacility',

  fields: () => ({
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreFacilityInputType};
    