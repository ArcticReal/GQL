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

const ProductFeatureDataResourceInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureDataResourceInputType',
  description: 'input type for ProductFeatureDataResource',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString}
  })
});

export {ProductFeatureDataResourceInputType};
    