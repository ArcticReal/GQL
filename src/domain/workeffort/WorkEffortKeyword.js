
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';


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
    




const WorkEffortKeywordInputType = new GraphQLInputObjectType({
  name: 'WorkEffortKeywordInputType',
  description: 'input type for WorkEffortKeyword in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    relevancyWeight: {type: GraphQLInt},
    keyword: {type: GraphQLString}
  })
});

export {WorkEffortKeywordInputType};
    