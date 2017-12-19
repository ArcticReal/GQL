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

const SupplierProductFeatureInputType = new GraphQLInputObjectType({
  name: 'SupplierProductFeatureInputType',
  description: 'input type for SupplierProductFeature',

  fields: () => ({
    description: {type: GraphQLString},
    idCode: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    uomId: {type: GraphQLString}
  })
});

export {SupplierProductFeatureInputType};
    