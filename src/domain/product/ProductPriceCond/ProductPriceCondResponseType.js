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

const ProductPriceCondResponseType = new GraphQLObjectType({
  name: 'ProductPriceCondResponseType',
  description: 'response type for ProductPriceCond',

  fields: () => ({
    condValue: {type: GraphQLString},
    inputParamEnumId: {type: GraphQLString},
    operatorEnumId: {type: GraphQLString},
    productPriceCondSeqId: {type: GraphQLString},
    productPriceRuleId: {type: GraphQLString}
  })
});

export {ProductPriceCondResponseType};
    