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
import {DeliverableInputType} from '../../workeffort/Deliverable/DeliverableInputType.js';
import {DeliverableResponseType} from '../../workeffort/Deliverable/DeliverableResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDeliverable = {
  type: DeliverableResponseType,
  description: 'mutation for ofbiz createDeliverable method',
  args:{deliverableToBeAdded: {type: DeliverableInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/deliverables/add?`, args.deliverableToBeAdded, req);
  }
};
export {createDeliverable};


const updateDeliverable = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDeliverable method',
  args:{deliverableToBeUpdated: {type: DeliverableInputType},deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/deliverables/${args.deliverableId}?`, args.deliverableToBeUpdated, req);
  }
};
export {updateDeliverable};


const deleteDeliverableByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDeliverableByIdUpdated method',
  args:{deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/deliverables/${args.deliverableId}?`, null, req);
  }
};
export {deleteDeliverableByIdUpdated};
