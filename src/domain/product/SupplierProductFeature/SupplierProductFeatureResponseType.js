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

const SupplierProductFeatureResponseType = new GraphQLObjectType({
  name: 'SupplierProductFeatureResponseType',
  description: 'response type for SupplierProductFeature',

  fields: () => ({
    description: {type: GraphQLString},
    idCode: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    uomId: {type: GraphQLString}
  })
});

export {SupplierProductFeatureResponseType};
    