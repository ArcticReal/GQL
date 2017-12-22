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

const ProductPromoRuleResponseType = new GraphQLObjectType({
  name: 'ProductPromoRuleResponseType',
  description: 'response type for ProductPromoRule',

  fields: () => ({
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    ruleName: {type: GraphQLString}
  })
});

export {ProductPromoRuleResponseType};
    