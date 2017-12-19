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

const ProductFeatureApplTypeInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureApplTypeInputType',
  description: 'input type for ProductFeatureApplType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productFeatureApplTypeId: {type: GraphQLString}
  })
});

export {ProductFeatureApplTypeInputType};
    