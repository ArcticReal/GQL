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

const WorkEffortSearchConstraintResponseType = new GraphQLObjectType({
  name: 'WorkEffortSearchConstraintResponseType',
  description: 'response type for WorkEffortSearchConstraint',

  fields: () => ({
    anyPrefix: {type: GraphQLBoolean},
    anySuffix: {type: GraphQLBoolean},
    constraintName: {type: GraphQLString},
    constraintSeqId: {type: GraphQLString},
    highValue: {type: GraphQLString},
    includeSubWorkEfforts: {type: GraphQLBoolean},
    infoString: {type: GraphQLString},
    isAnd: {type: GraphQLBoolean},
    lowValue: {type: GraphQLString},
    removeStems: {type: GraphQLBoolean},
    workEffortSearchResultId: {type: GraphQLString}
  })
});

export {WorkEffortSearchConstraintResponseType};
    