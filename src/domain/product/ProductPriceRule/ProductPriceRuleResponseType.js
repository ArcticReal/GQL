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

const ProductPriceRuleResponseType = new GraphQLObjectType({
  name: 'ProductPriceRuleResponseType',
  description: 'response type for ProductPriceRule',

  fields: () => ({
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    isSale: {type: GraphQLBoolean},
    productPriceRuleId: {type: GraphQLString},
    ruleName: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPriceRuleResponseType};
    