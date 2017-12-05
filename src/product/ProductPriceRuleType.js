
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductPriceRule = new GraphQLObjectType({
  name: 'ProductPriceRuleType',
  description: 'Type for ProductPriceRule in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    ruleName: {type: GraphQLString},
    description: {type: GraphQLString},
    isSale: {type: GraphQLBoolean},
    productPriceRuleId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPriceRule};
    