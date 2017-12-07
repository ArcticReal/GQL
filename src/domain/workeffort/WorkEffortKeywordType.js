
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';


const WorkEffortKeywordType = new GraphQLObjectType({
  name: 'WorkEffortKeywordType',
  description: 'Type for WorkEffortKeyword in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortKeyword, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortKeyword.workEffortId}`)
    },
    relevancyWeight: {type: GraphQLInt},
    keyword: {type: GraphQLString}
  })
});

export {WorkEffortKeywordType};
    