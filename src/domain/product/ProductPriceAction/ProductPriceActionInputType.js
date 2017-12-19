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

const ProductPriceActionInputType = new GraphQLInputObjectType({
  name: 'ProductPriceActionInputType',
  description: 'input type for ProductPriceAction',

  fields: () => ({
    amount: {type: GraphQLFloat},
    productPriceActionSeqId: {type: GraphQLString},
    productPriceActionTypeId: {type: GraphQLString},
    productPriceRuleId: {type: GraphQLString},
    rateCode: {type: GraphQLString}
  })
});

export {ProductPriceActionInputType};
    