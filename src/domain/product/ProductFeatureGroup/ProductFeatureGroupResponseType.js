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

const ProductFeatureGroupResponseType = new GraphQLObjectType({
  name: 'ProductFeatureGroupResponseType',
  description: 'response type for ProductFeatureGroup',

  fields: () => ({
    description: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString}
  })
});

export {ProductFeatureGroupResponseType};
    