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
import {WorkEffortContactMechResponseType} from '../../workeffort/WorkEffortContactMech/WorkEffortContactMechResponseType.js';
import {WorkEffortContactMechInputType} from '../../workeffort/WorkEffortContactMech/WorkEffortContactMechInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortContactMech = {
  type: WorkEffortContactMechResponseType,
  description: 'mutation for ofbiz createWorkEffortContactMech method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortContactMechs/add?`, null, req);
  }
};
export {createWorkEffortContactMech};


const updateWorkEffortContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortContactMech method',
  args:{workEffortContactMechToBeUpdated: {type: WorkEffortContactMechInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortContactMechs/${args.nullVal}?`, args.workEffortContactMechToBeUpdated, req);
  }
};
export {updateWorkEffortContactMech};


const deleteWorkEffortContactMechByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortContactMechByIdUpdated method',
  args:{workEffortContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortContactMechs/${args.workEffortContactMechId}?`, null, req);
  }
};
export {deleteWorkEffortContactMechByIdUpdated};
