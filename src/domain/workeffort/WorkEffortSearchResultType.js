
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortSearchConstraintType} from '../workeffort/WorkEffortSearchConstraintType.js';


const WorkEffortSearchResultType = new GraphQLObjectType({
  name: 'WorkEffortSearchResultType',
  description: 'Type for WorkEffortSearchResult in workeffort',

  fields: () => ({
    workEffortSearchResultId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    orderByName: {type: GraphQLString},
    numResults: {type: GraphQLInt},
    secondsTotal: {type: GraphQLFloat},
    searchDate: {type: GraphQLString},
    isAscending: {type: GraphQLBoolean},
    workEffortSearchConstraint: {
      type: new GraphQLList(WorkEffortSearchConstraintType),
      args : {workEffortSearchResultId: {type: GraphQLString}},
      resolve: (workEffortSearchResult, args, {loaders}) => loaders.ofbizArray.load(`workEffortSearchConstraints/find?workEffortSearchResultId=${workEffortSearchResult.workEffortSearchResultId}`)
    }
  })
});

export {WorkEffortSearchResultType};
    