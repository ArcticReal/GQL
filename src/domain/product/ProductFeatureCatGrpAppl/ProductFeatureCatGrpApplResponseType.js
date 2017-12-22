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

const ProductFeatureCatGrpApplResponseType = new GraphQLObjectType({
  name: 'ProductFeatureCatGrpApplResponseType',
  description: 'response type for ProductFeatureCatGrpAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCatGrpApplResponseType};
    