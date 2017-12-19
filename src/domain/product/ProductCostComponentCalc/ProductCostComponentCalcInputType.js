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

const ProductCostComponentCalcInputType = new GraphQLInputObjectType({
  name: 'ProductCostComponentCalcInputType',
  description: 'input type for ProductCostComponentCalc',

  fields: () => ({
    costComponentCalcId: {type: GraphQLString},
    costComponentTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCostComponentCalcInputType};
    