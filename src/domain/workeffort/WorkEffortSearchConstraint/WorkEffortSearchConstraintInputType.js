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

const WorkEffortSearchConstraintInputType = new GraphQLInputObjectType({
  name: 'WorkEffortSearchConstraintInputType',
  description: 'input type for WorkEffortSearchConstraint',

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

export {WorkEffortSearchConstraintInputType};
    