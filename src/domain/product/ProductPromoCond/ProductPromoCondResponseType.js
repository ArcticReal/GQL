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

const ProductPromoCondResponseType = new GraphQLObjectType({
  name: 'ProductPromoCondResponseType',
  description: 'response type for ProductPromoCond',

  fields: () => ({
    condValue: {type: GraphQLString},
    inputParamEnumId: {type: GraphQLString},
    operatorEnumId: {type: GraphQLString},
    otherValue: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString}
  })
});

export {ProductPromoCondResponseType};
    