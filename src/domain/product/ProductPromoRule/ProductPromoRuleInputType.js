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

const ProductPromoRuleInputType = new GraphQLInputObjectType({
  name: 'ProductPromoRuleInputType',
  description: 'input type for ProductPromoRule',

  fields: () => ({
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    ruleName: {type: GraphQLString}
  })
});

export {ProductPromoRuleInputType};
    