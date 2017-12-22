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

const ProductFeatureApplTypeResponseType = new GraphQLObjectType({
  name: 'ProductFeatureApplTypeResponseType',
  description: 'response type for ProductFeatureApplType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productFeatureApplTypeId: {type: GraphQLString}
  })
});

export {ProductFeatureApplTypeResponseType};
    