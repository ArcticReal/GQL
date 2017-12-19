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

const ProductCategoryRollupInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryRollupInputType',
  description: 'input type for ProductCategoryRollup',

  fields: () => ({
    fromDate: {type: GraphQLString},
    parentProductCategoryId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryRollupInputType};
    