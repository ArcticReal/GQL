
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


const WorkEffortIcalDataType = new GraphQLObjectType({
  name: 'WorkEffortIcalDataType',
  description: 'Type for WorkEffortIcalData in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortIcalData, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortIcalData.workEffortId}`)
    },
    icalData: {type: GraphQLString}
  })
});

export {WorkEffortIcalDataType};
    