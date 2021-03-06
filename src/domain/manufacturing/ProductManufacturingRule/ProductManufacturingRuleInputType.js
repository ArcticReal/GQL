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

const ProductManufacturingRuleInputType = new GraphQLInputObjectType({
  name: 'ProductManufacturingRuleInputType',
  description: 'input type for ProductManufacturingRule',

  fields: () => ({
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productFeature: {type: GraphQLString},
    productId: {type: GraphQLString},
    productIdFor: {type: GraphQLString},
    productIdIn: {type: GraphQLString},
    productIdInSubst: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    ruleId: {type: GraphQLString},
    ruleOperator: {type: GraphQLString},
    ruleSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductManufacturingRuleInputType};
    