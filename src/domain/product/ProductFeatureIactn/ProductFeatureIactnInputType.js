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

const ProductFeatureIactnInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureIactnInputType',
  description: 'input type for ProductFeatureIactn',

  fields: () => ({
    productFeatureIactnTypeId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productFeatureIdTo: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductFeatureIactnInputType};
    