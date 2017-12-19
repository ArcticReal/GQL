
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


const WorkEffortIcalDataType = new GraphQLObjectType({
  name: 'WorkEffortIcalDataType',
  description: 'Type for WorkEffortIcalData in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortIcalData, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortIcalData.workEffortId}`)
    },
    icalData: {type: GraphQLString}
  })
});

export {WorkEffortIcalDataType};
    