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

const ProductPromoContentResponseType = new GraphQLObjectType({
  name: 'ProductPromoContentResponseType',
  description: 'response type for ProductPromoContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productPromoContentTypeId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPromoContentResponseType};
    