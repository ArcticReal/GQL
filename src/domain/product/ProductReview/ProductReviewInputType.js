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

const ProductReviewInputType = new GraphQLInputObjectType({
  name: 'ProductReviewInputType',
  description: 'input type for ProductReview',

  fields: () => ({
    postedAnonymous: {type: GraphQLBoolean},
    postedDateTime: {type: GraphQLString},
    productId: {type: GraphQLString},
    productRating: {type: GraphQLFloat},
    productReview: {type: GraphQLString},
    productReviewId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {ProductReviewInputType};
    