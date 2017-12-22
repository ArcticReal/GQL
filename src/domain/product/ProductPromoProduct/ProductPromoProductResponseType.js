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

const ProductPromoProductResponseType = new GraphQLObjectType({
  name: 'ProductPromoProductResponseType',
  description: 'response type for ProductPromoProduct',

  fields: () => ({
    productId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoApplEnumId: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString}
  })
});

export {ProductPromoProductResponseType};
    