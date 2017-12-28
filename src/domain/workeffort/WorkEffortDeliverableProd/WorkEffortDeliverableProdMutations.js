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
import {WorkEffortDeliverableProdInputType} from '../../workeffort/WorkEffortDeliverableProd/WorkEffortDeliverableProdInputType.js';
import {WorkEffortDeliverableProdResponseType} from '../../workeffort/WorkEffortDeliverableProd/WorkEffortDeliverableProdResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortDeliverableProd = {
  type: WorkEffortDeliverableProdResponseType,
  description: 'mutation for ofbiz createWorkEffortDeliverableProd method',
  args:{workEffortDeliverableProdToBeAdded: {type: WorkEffortDeliverableProdInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/deliverable/workEffortDeliverableProds/add?`, args.workEffortDeliverableProdToBeAdded, req);
  }
};
export {createWorkEffortDeliverableProd};


const updateWorkEffortDeliverableProd = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortDeliverableProd method',
  args:{workEffortDeliverableProdToBeUpdated: {type: WorkEffortDeliverableProdInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/deliverable/workEffortDeliverableProds/${args.nullVal}?`, args.workEffortDeliverableProdToBeUpdated, req);
  }
};
export {updateWorkEffortDeliverableProd};


const deleteWorkEffortDeliverableProdByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortDeliverableProdByIdUpdated method',
  args:{workEffortDeliverableProdId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/deliverable/workEffortDeliverableProds/${args.workEffortDeliverableProdId}?`, null, req);
  }
};
export {deleteWorkEffortDeliverableProdByIdUpdated};
