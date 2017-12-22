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

const ProductFeatureDataResourceResponseType = new GraphQLObjectType({
  name: 'ProductFeatureDataResourceResponseType',
  description: 'response type for ProductFeatureDataResource',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString}
  })
});

export {ProductFeatureDataResourceResponseType};
    