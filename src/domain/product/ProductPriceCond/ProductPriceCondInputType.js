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

const ProductPriceCondInputType = new GraphQLInputObjectType({
  name: 'ProductPriceCondInputType',
  description: 'input type for ProductPriceCond',

  fields: () => ({
    condValue: {type: GraphQLString},
    inputParamEnumId: {type: GraphQLString},
    operatorEnumId: {type: GraphQLString},
    productPriceCondSeqId: {type: GraphQLString},
    productPriceRuleId: {type: GraphQLString}
  })
});

export {ProductPriceCondInputType};
    