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

const GlBudgetXrefInputType = new GraphQLInputObjectType({
  name: 'GlBudgetXrefInputType',
  description: 'input type for GlBudgetXref',

  fields: () => ({
    allocationPercentage: {type: GraphQLFloat},
    budgetItemTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlBudgetXrefInputType};
    