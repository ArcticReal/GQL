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

const CostComponentInputType = new GraphQLInputObjectType({
  name: 'CostComponentInputType',
  description: 'input type for CostComponent',

  fields: () => ({
    cost: {type: GraphQLFloat},
    costComponentCalcId: {type: GraphQLString},
    costComponentId: {type: GraphQLString},
    costComponentTypeId: {type: GraphQLString},
    costUomId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {CostComponentInputType};
    