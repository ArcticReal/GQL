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

const ProductAssocInputType = new GraphQLInputObjectType({
  name: 'ProductAssocInputType',
  description: 'input type for ProductAssoc',

  fields: () => ({
    estimateCalcMethod: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    instruction: {type: GraphQLString},
    productAssocTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productIdTo: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reason: {type: GraphQLString},
    recurrenceInfoId: {type: GraphQLString},
    routingWorkEffortId: {type: GraphQLString},
    scrapFactor: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductAssocInputType};
    