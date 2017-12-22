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

const ProductFeatureIactnResponseType = new GraphQLObjectType({
  name: 'ProductFeatureIactnResponseType',
  description: 'response type for ProductFeatureIactn',

  fields: () => ({
    productFeatureIactnTypeId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productFeatureIdTo: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductFeatureIactnResponseType};
    