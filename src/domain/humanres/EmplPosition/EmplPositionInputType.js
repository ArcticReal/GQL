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

const EmplPositionInputType = new GraphQLInputObjectType({
  name: 'EmplPositionInputType',
  description: 'input type for EmplPosition',

  fields: () => ({
    actualFromDate: {type: GraphQLString},
    actualThruDate: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    emplPositionId: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    estimatedFromDate: {type: GraphQLString},
    estimatedThruDate: {type: GraphQLString},
    exemptFlag: {type: GraphQLBoolean},
    fulltimeFlag: {type: GraphQLBoolean},
    partyId: {type: GraphQLString},
    salaryFlag: {type: GraphQLBoolean},
    statusId: {type: GraphQLString},
    temporaryFlag: {type: GraphQLBoolean}
  })
});

export {EmplPositionInputType};
    