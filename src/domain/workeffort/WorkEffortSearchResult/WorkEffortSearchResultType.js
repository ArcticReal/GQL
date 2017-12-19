
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

import {WorkEffortSearchConstraintType} from '../../workeffort/WorkEffortSearchConstraint/WorkEffortSearchConstraintType.js';


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
    workEffortSearchConstraints: {
      type: new GraphQLList(WorkEffortSearchConstraintType),
      args : {},
      resolve: (workEffortSearchResult, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortSearchConstraints/find?workEffortSearchResultId=${workEffortSearchResult.workEffortSearchResultId}`)
    }
  })
});

export {WorkEffortSearchResultType};
    