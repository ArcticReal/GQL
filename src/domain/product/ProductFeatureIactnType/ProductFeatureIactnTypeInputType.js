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

const ProductFeatureIactnTypeInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureIactnTypeInputType',
  description: 'input type for ProductFeatureIactnType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productFeatureIactnTypeId: {type: GraphQLString}
  })
});

export {ProductFeatureIactnTypeInputType};
    