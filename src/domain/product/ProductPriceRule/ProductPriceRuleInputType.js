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

const ProductPriceRuleInputType = new GraphQLInputObjectType({
  name: 'ProductPriceRuleInputType',
  description: 'input type for ProductPriceRule',

  fields: () => ({
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    isSale: {type: GraphQLBoolean},
    productPriceRuleId: {type: GraphQLString},
    ruleName: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPriceRuleInputType};
    