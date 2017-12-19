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

const ProductPromoCategoryInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCategoryInputType',
  description: 'input type for ProductPromoCategory',

  fields: () => ({
    andGroupId: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    productCategoryId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoApplEnumId: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString}
  })
});

export {ProductPromoCategoryInputType};
    