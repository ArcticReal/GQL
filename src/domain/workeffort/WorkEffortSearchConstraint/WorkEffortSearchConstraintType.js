
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

import {WorkEffortSearchResultType} from '../../workeffort/WorkEffortSearchResult/WorkEffortSearchResultType.js';


const WorkEffortSearchConstraintType = new GraphQLObjectType({
  name: 'WorkEffortSearchConstraintType',
  description: 'Type for WorkEffortSearchConstraint in workeffort',

  fields: () => ({
    workEffortSearchResult: {
      type: WorkEffortSearchResultType,
      args : {workEffortSearchResultId: {type: GraphQLString}},
      resolve: (workEffortSearchConstraint, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortSearchResults/find?workEffortSearchResultId=${workEffortSearchConstraint.workEffortSearchResultId}`)
    },
    isAnd: {type: GraphQLBoolean},
    removeStems: {type: GraphQLBoolean},
    lowValue: {type: GraphQLString},
    constraintSeqId: {type: GraphQLString},
    infoString: {type: GraphQLString},
    anyPrefix: {type: GraphQLBoolean},
    highValue: {type: GraphQLString},
    anySuffix: {type: GraphQLBoolean},
    constraintName: {type: GraphQLString},
    includeSubWorkEfforts: {type: GraphQLBoolean}
  })
});

export {WorkEffortSearchConstraintType};
    