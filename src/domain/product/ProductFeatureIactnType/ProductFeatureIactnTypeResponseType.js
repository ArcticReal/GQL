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

const ProductFeatureIactnTypeResponseType = new GraphQLObjectType({
  name: 'ProductFeatureIactnTypeResponseType',
  description: 'response type for ProductFeatureIactnType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productFeatureIactnTypeId: {type: GraphQLString}
  })
});

export {ProductFeatureIactnTypeResponseType};
    