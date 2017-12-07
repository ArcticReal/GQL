
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
import {ContactMechType} from '../party/ContactMechType.js';


const WorkEffortContactMechType = new GraphQLObjectType({
  name: 'WorkEffortContactMechType',
  description: 'Type for WorkEffortContactMech in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortContactMech, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortContactMech.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (workEffortContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${workEffortContactMech.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortContactMechType};
    