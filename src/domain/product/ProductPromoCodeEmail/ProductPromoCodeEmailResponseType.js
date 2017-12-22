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

const ProductPromoCodeEmailResponseType = new GraphQLObjectType({
  name: 'ProductPromoCodeEmailResponseType',
  description: 'response type for ProductPromoCodeEmail',

  fields: () => ({
    emailAddress: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString}
  })
});

export {ProductPromoCodeEmailResponseType};
    