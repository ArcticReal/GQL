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

const ProductCostComponentCalcResponseType = new GraphQLObjectType({
  name: 'ProductCostComponentCalcResponseType',
  description: 'response type for ProductCostComponentCalc',

  fields: () => ({
    costComponentCalcId: {type: GraphQLString},
    costComponentTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCostComponentCalcResponseType};
    