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

const ProductFeatureCatGrpApplInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureCatGrpApplInputType',
  description: 'input type for ProductFeatureCatGrpAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCatGrpApplInputType};
    