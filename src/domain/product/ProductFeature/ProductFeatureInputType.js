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

const ProductFeatureInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureInputType',
  description: 'input type for ProductFeature',

  fields: () => ({
    abbrev: {type: GraphQLString},
    defaultAmount: {type: GraphQLFloat},
    defaultSequenceNum: {type: GraphQLInt},
    description: {type: GraphQLString},
    idCode: {type: GraphQLString},
    numberSpecified: {type: GraphQLFloat},
    productFeatureCategoryId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productFeatureTypeId: {type: GraphQLString},
    uomId: {type: GraphQLString}
  })
});

export {ProductFeatureInputType};
    