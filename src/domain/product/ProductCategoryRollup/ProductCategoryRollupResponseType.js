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

const ProductCategoryRollupResponseType = new GraphQLObjectType({
  name: 'ProductCategoryRollupResponseType',
  description: 'response type for ProductCategoryRollup',

  fields: () => ({
    fromDate: {type: GraphQLString},
    parentProductCategoryId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryRollupResponseType};
    