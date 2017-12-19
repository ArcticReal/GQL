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

const ProductPromoProductInputType = new GraphQLInputObjectType({
  name: 'ProductPromoProductInputType',
  description: 'input type for ProductPromoProduct',

  fields: () => ({
    productId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoApplEnumId: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString}
  })
});

export {ProductPromoProductInputType};
    