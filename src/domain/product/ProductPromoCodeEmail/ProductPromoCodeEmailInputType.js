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

const ProductPromoCodeEmailInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCodeEmailInputType',
  description: 'input type for ProductPromoCodeEmail',

  fields: () => ({
    emailAddress: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString}
  })
});

export {ProductPromoCodeEmailInputType};
    