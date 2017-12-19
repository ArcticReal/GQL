
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';


const WorkEffortKeywordType = new GraphQLObjectType({
  name: 'WorkEffortKeywordType',
  description: 'Type for WorkEffortKeyword in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortKeyword, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortKeyword.workEffortId}`)
    },
    relevancyWeight: {type: GraphQLInt},
    keyword: {type: GraphQLString}
  })
});

export {WorkEffortKeywordType};
    