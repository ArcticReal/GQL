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

const ProductCategoryMemberInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryMemberInputType',
  description: 'input type for ProductCategoryMember',

  fields: () => ({
    comments: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryMemberInputType};
    