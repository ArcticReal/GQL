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

const ProductPromoCondInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCondInputType',
  description: 'input type for ProductPromoCond',

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

export {ProductPromoCondInputType};
    