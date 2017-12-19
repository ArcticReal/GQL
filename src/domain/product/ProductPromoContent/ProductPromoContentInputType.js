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

const ProductPromoContentInputType = new GraphQLInputObjectType({
  name: 'ProductPromoContentInputType',
  description: 'input type for ProductPromoContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productPromoContentTypeId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPromoContentInputType};
    