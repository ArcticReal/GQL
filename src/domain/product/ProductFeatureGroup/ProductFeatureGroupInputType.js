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

const ProductFeatureGroupInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureGroupInputType',
  description: 'input type for ProductFeatureGroup',

  fields: () => ({
    description: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString}
  })
});

export {ProductFeatureGroupInputType};
    